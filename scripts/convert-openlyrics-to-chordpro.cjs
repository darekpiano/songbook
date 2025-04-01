const fs = require('fs');
const path = require('path');
const { DOMParser } = require('xmldom');

// Wersja skryptu
const VERSION = '0.1.6';

/**
 * Wyświetla informacje pomocy
 */
function displayHelp() {
  console.log(`
Konwerter OpenLyrics do ChordPro v${VERSION}

Użycie:
  node convert-openlyrics-to-chordpro.cjs [opcje] <katalog_wejściowy> <katalog_wyjściowy>

Opcje:
  --help, -h     Wyświetla tę informację pomocy
  --version, -v  Wyświetla wersję programu

Przykłady:
  node convert-openlyrics-to-chordpro.cjs input output
  node convert-openlyrics-to-chordpro.cjs -h
  `);
}

/**
 * Wyświetla wersję programu
 */
function displayVersion() {
  console.log(`Konwerter OpenLyrics do ChordPro v${VERSION}`);
}

/**
 * Cleans up the XML input content to ensure there's only one XML declaration
 * and fixes any encoding issues
 * @param {string} xmlContent The XML content to clean up
 * @returns {string} Cleaned XML content with only one XML declaration at the beginning
 */
function cleanupXmlContent(xmlContent) {
  // Find all XML declarations
  const xmlDecRegex = /(<\?xml[^?]*\?>)/g;
  const matches = [...xmlContent.matchAll(xmlDecRegex)];
  
  // Check if there are multiple XML declarations
  if (matches.length <= 1) {
    return xmlContent;
  }
  
  // Extract only the content of the first well-formed song tag
  const songRegex = /<song[^>]*>[\s\S]*?<\/song>/;
  const songMatch = xmlContent.match(songRegex);
  
  if (songMatch && songMatch.length > 0) {
    // Return just the first XML declaration + first complete song
    const firstDeclaration = matches[0][0];
    return firstDeclaration + '\n' + songMatch[0];
  }
  
  // If we couldn't extract a complete song, keep only the first declaration
  const firstDeclaration = matches[0][0];
  // Remove all declarations
  let cleanedContent = xmlContent.replace(xmlDecRegex, '');
  // Add back the first declaration at the beginning
  cleanedContent = firstDeclaration + cleanedContent;
  
  return cleanedContent;
}

/**
 * Removes duplicated content in the ChordPro text
 * This is needed to handle cases where the XML file had multiple songs
 * @param {string} chordProContent The ChordPro content to deduplicate
 * @returns {string} Deduplicated ChordPro content
 */
function deduplicateChordPro(chordProContent) {
  // If there's actual content in the file
  if (!chordProContent.trim()) {
    return '';
  }
  
  // We'll identify song sections by looking for title directives
  const titleRegex = /\{title: ([^\}]+)\}/g;
  const titles = [...chordProContent.matchAll(titleRegex)];
  
  if (titles.length <= 0) {
    // No title tags found, return original content
    return chordProContent;
  }
  
  // Extract the title part and build a completely new ChordPro content
  const firstTitleMatch = titles[0];
  const titleText = firstTitleMatch[1];
  
  // Find artist part if exists (usually right after title)
  const artistRegex = /\{artist: ([^\}]+)\}/;
  const artistMatch = chordProContent.slice(firstTitleMatch.index).match(artistRegex);
  const artistText = artistMatch ? artistMatch[1] : '';
  
  // Find all verse sections
  const verseStartRegex = /\{start_of_([^:]+): ([^\}]+)\}([\s\S]*?)\{end_of_\1: \2\}/g;
  const verses = [...chordProContent.matchAll(verseStartRegex)];
  
  if (verses.length === 0) {
    // If no verses found, return just the metadata
    let cleanContent = `{title: ${titleText}}\n`;
    if (artistText) {
      cleanContent += `{artist: ${artistText}}\n`;
    }
    return cleanContent;
  }
  
  // Build clean ChordPro content
  let cleanContent = `{title: ${titleText}}\n`;
  if (artistText) {
    cleanContent += `{artist: ${artistText}}\n`;
  }
  cleanContent += '\n';
  
  // Keep track of verse types and names to avoid duplicates
  const processedVerses = new Set();
  
  // Add verses
  for (const verse of verses) {
    const verseType = verse[1];
    const verseName = verse[2];
    const verseContent = verse[3].trim();
    
    // Create a unique key for this verse
    const verseKey = `${verseType}:${verseName}`;
    
    // Skip if we've already processed this verse type and name
    if (processedVerses.has(verseKey)) {
      continue;
    }
    
    // Add verse to result and mark as processed
    cleanContent += `{start_of_${verseType}: ${verseName}}\n${verseContent}\n{end_of_${verseType}: ${verseName}}\n\n`;
    processedVerses.add(verseKey);
  }
  
  return cleanContent.trim();
}

/**
 * Converts OpenLyrics XML to ChordPro format
 * @param {string} xmlContent OpenLyrics XML content as string
 * @returns {string} ChordPro formatted string
 */
function convertOpenLyricsToChordPro(xmlContent) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlContent, 'text/xml');
  
  // Extract song properties
  const chordProSong = {
    title: '',
    verses: []
  };
  
  // Parse title
  const titleNode = xmlDoc.getElementsByTagName('title')[0];
  if (titleNode) {
    chordProSong.title = titleNode.textContent || '';
    // Remove numbering prefixes if present (like "DOD003 - ")
    chordProSong.title = chordProSong.title.replace(/^[A-Z0-9]+ - /, '');
  }
  
  // Parse authors
  const authorNodes = xmlDoc.getElementsByTagName('author');
  if (authorNodes && authorNodes.length > 0) {
    const authors = [];
    for (let i = 0; i < authorNodes.length; i++) {
      authors.push(authorNodes[i].textContent || '');
    }
    chordProSong.artist = authors.join(', ');
  }
  
  // Parse verses
  const verseNodes = xmlDoc.getElementsByTagName('verse');
  for (let i = 0; i < verseNodes.length; i++) {
    const verse = verseNodes[i];
    const nameAttr = verse.getAttribute('name') || '';
    
    // Identify verse type and name
    let verseType = 'verse';
    let verseName = '';
    
    if (nameAttr.startsWith('c')) {
      verseType = 'chorus';
      verseName = `Refren${nameAttr.substring(1) !== '1' ? ' ' + nameAttr.substring(1) : ''}`;
    } else if (nameAttr.startsWith('v')) {
      verseType = 'verse';
      verseName = `Zwrotka ${nameAttr.substring(1)}`;
    } else if (nameAttr.startsWith('b')) {
      verseType = 'bridge';
      verseName = `Bridge${nameAttr.substring(1) !== '1' ? ' ' + nameAttr.substring(1) : ''}`;
    }
    
    // Get verse content
    const linesNode = verse.getElementsByTagName('lines')[0];
    if (!linesNode) continue;
    
    // Struktura do przechowywania zawartości zwrotki
    const verseContent = {
      keyLine: null,  // linia oznaczenia tonacji np. [=Bb]
      lines: []       // właściwe linie zwrotki z tekstem i akordami
    };
    
    // Przechowywanie aktualnie przetwarzanej linii
    let currentLine = {
      text: '',
      chords: [],
      isBrLine: false
    };
    
    // Funkcja resetująca aktualną linię
    const resetCurrentLine = () => {
      if (currentLine.text.trim() || currentLine.chords.length > 0) {
        verseContent.lines.push({...currentLine});
      }
      currentLine = {
        text: '',
        chords: [],
        isBrLine: false
      };
    };
    
    // Pomocnicza funkcja do przetwarzania węzłów
    const processNode = (node) => {
      // Obsługa specjalnej linii z oznaczeniem tonacji [=X]
      if (node.nodeType === 3 && node.nodeValue && node.nodeValue.trim().match(/^\[=[A-G][b#]?.*\]$/)) {
        verseContent.keyLine = node.nodeValue.trim();
        return;
      }
      
      if (node.nodeType === 3) { // Węzeł tekstowy
        currentLine.text += node.nodeValue || '';
      } else if (node.nodeType === 1) { // Węzeł elementu
        const element = node;
        
        if (element.tagName === 'chord') {
          const chordName = element.getAttribute('name') || '';
          const chordPosition = currentLine.text.length;
          
          currentLine.chords.push({
            name: chordName,
            position: chordPosition
          });
        } else if (element.tagName === 'br') {
          // Zakończ aktualną linię i rozpocznij nową
          currentLine.isBrLine = true;
          resetCurrentLine();
        } else {
          // Przetwarzaj dzieci innych elementów
          for (let j = 0; j < element.childNodes.length; j++) {
            processNode(element.childNodes[j]);
          }
        }
      }
    };
    
    // Przetwarzanie wszystkich węzłów linesNode
    for (let j = 0; j < linesNode.childNodes.length; j++) {
      processNode(linesNode.childNodes[j]);
    }
    
    // Dodaj pozostałą treść w currentLine
    resetCurrentLine();
    
    // Konwersja na format ChordPro
    let formattedVerseContent = '';
    
    // Dodaj linię tonacji, jeśli istnieje
    if (verseContent.keyLine) {
      formattedVerseContent += verseContent.keyLine + '\n';
    }
    
    // Dodaj linie zwrotki
    for (const line of verseContent.lines) {
      let formattedLine = '';
      
      // Dodawanie akordów przed lub wewnątrz tekstu
      if (line.chords.length > 0) {
        // Sortuj akordy względem pozycji (od końca do początku)
        const sortedChords = [...line.chords].sort((a, b) => b.position - a.position);
        
        // Linia tekstu z wstawionymi akordami
        let textWithChords = line.text;
        for (const chord of sortedChords) {
          const chordText = `[${chord.name}]`;
          textWithChords = textWithChords.slice(0, chord.position) + chordText + textWithChords.slice(chord.position);
        }
        
        formattedLine = textWithChords;
      } else {
        formattedLine = line.text;
      }
      
      formattedVerseContent += formattedLine.trim() + '\n';
    }
    
    chordProSong.verses.push({
      type: verseType,
      name: verseName,
      content: formattedVerseContent.trim()
    });
  }
  
  // Generate ChordPro format
  let chordProContent = '';
  
  // Add metadata
  chordProContent += `{title: ${chordProSong.title}}\n`;
  if (chordProSong.artist) {
    chordProContent += `{artist: ${chordProSong.artist}}\n`;
  }
  
  // Add empty lines for readability
  chordProContent += '\n';
  
  // Add verses
  for (const verse of chordProSong.verses) {
    chordProContent += `{start_of_${verse.type}: ${verse.name}}\n`;
    chordProContent += verse.content + '\n';
    chordProContent += `{end_of_${verse.type}: ${verse.name}}\n\n`;
  }
  
  return chordProContent.trim();
}

/**
 * Processes a single OpenLyrics file and converts it to ChordPro
 * @param {string} inputFile Path to OpenLyrics XML file
 * @param {string} outputDir Directory to save the ChordPro file
 */
function processFile(inputFile, outputDir) {
  try {
    console.log(`Przetwarzanie pliku: ${inputFile}`);
    
    // Read file with UTF-8 encoding
    let xmlContent = fs.readFileSync(inputFile, { encoding: 'utf8' });
    
    // Clean up XML content (remove duplicate XML declarations)
    xmlContent = cleanupXmlContent(xmlContent);
    
    // Convert to ChordPro format
    let chordProContent = convertOpenLyricsToChordPro(xmlContent);
    
    // Remove any duplicated song content (from multiple songs in the XML)
    chordProContent = deduplicateChordPro(chordProContent);
    
    // Generate output filename
    const baseFilename = path.basename(inputFile, path.extname(inputFile));
    
    // Extract only the DOD code pattern, for example "DOD006" from "DOD006 - Song Name"
    const codeMatch = baseFilename.match(/^([A-Z0-9]+)/);
    let codePrefix = '';
    
    if (codeMatch && codeMatch[1]) {
      // If we found a code pattern like DOD006, use it
      codePrefix = codeMatch[1].toLowerCase();
    }
    
    // Extract the title from ChordPro content
    const titleMatch = chordProContent.match(/\{title: ([^\}]+)\}/);
    let title = '';
    
    if (titleMatch && titleMatch[1]) {
      // Get the title and convert to filename-friendly format
      title = titleMatch[1]
        .toLowerCase()
        .replace(/\s+/g, '-')  // Replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, ''); // Remove special characters
    }
    
    // Combine prefix and title for the output filename
    let outputFilename = '';
    if (codePrefix && title) {
      // If we have both prefix and title, combine them
      outputFilename = `${codePrefix}-${title}`;
    } else if (codePrefix) {
      // If we only have prefix
      outputFilename = codePrefix;
    } else if (title) {
      // If we only have title
      outputFilename = title;
    } else {
      // Fallback to the original transformation
      outputFilename = baseFilename.toLowerCase()
        .replace(/\s+/g, '-')  // Replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, ''); // Remove special characters
    }
      
    const outputPath = path.join(outputDir, `${outputFilename}.cho`);
    
    // Delete the file if it already exists
    if (fs.existsSync(outputPath)) {
      console.log(`Usuwanie istniejącego pliku: ${outputPath}`);
      fs.unlinkSync(outputPath);
    }
    
    // Write the file with the correct UTF-8 encoding with BOM
    fs.writeFileSync(outputPath, '\ufeff' + chordProContent, { encoding: 'utf8' });
    console.log(`Przekonwertowano: ${inputFile} -> ${outputPath}`);
    
    return outputPath;
  } catch (error) {
    console.error(`Błąd przetwarzania pliku ${inputFile}:`, error);
    return null;
  }
}

/**
 * Main function to process all OpenLyrics files in a directory
 * @param {string} inputDir Directory containing OpenLyrics XML files
 * @param {string} outputDir Directory to save the ChordPro files
 */
function processDirectory(inputDir, outputDir) {
  try {
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Get all XML files in input directory
    const files = fs.readdirSync(inputDir)
      .filter(file => file.toLowerCase().endsWith('.xml'));
    
    console.log(`Znaleziono ${files.length} plików OpenLyrics do konwersji`);
    
    // Process each file
    const convertedFiles = [];
    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const outputPath = processFile(inputPath, outputDir);
      if (outputPath) {
        convertedFiles.push(outputPath);
      }
    }
    
    console.log('Konwersja zakończona!');
    return convertedFiles;
  } catch (error) {
    console.error('Błąd podczas przetwarzania katalogu:', error);
    return [];
  }
}

// Main function for CLI
function main() {
  try {
    // Parse command line arguments
    const args = process.argv.slice(2);
    
    // Check for help flag
    if (args.includes('--help') || args.includes('-h')) {
      displayHelp();
      return;
    }
    
    // Check for version flag
    if (args.includes('--version') || args.includes('-v')) {
      displayVersion();
      return;
    }
    
    // Get input and output directories
    let inputDir = args[0];
    let outputDir = args[1];
    
    // Check if required arguments are provided
    if (!inputDir || !outputDir) {
      console.error('Błąd: Brak wymaganych argumentów.');
      displayHelp();
      process.exit(1);
    }
    
    console.log(`Konwertowanie plików OpenLyrics z ${inputDir} do ChordPro w ${outputDir}`);
    processDirectory(inputDir, outputDir);
  } catch (error) {
    console.error('Błąd podczas wykonywania programu:', error);
    process.exit(1);
  }
}

// Run the main function if this file is executed directly
if (require.main === module) {
  main();
}

module.exports = { convertOpenLyricsToChordPro, processFile, processDirectory }; 