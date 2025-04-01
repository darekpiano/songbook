# Konwerter OpenLyrics do ChordPro

Skrypt służący do konwersji plików w formacie OpenLyrics (.xml) na format ChordPro (.cho).

## Opis

Konwerter przetwarza pliki XML w formacie OpenLyrics i przekształca je na pliki w formacie ChordPro. Proces konwersji obejmuje:

- Wyodrębnienie metadanych (tytuł, autor)
- Konwersję zwrotek, refrenów i bridge'ów
- Zachowanie akordów w odpowiednim formacie
- Generowanie nazw plików wyjściowych na podstawie tytułów

## Wymagania

- Node.js (wersja 12 lub nowsza)
- NPM (do instalacji zależności)

## Instalacja

1. Zainstaluj zależności:

```bash
npm install xmldom
```

## Użycie

### Podstawowe użycie

```bash
node convert-openlyrics-to-chordpro.cjs <katalog_wejściowy> <katalog_wyjściowy>
```

Przykład:

```bash
node convert-openlyrics-to-chordpro.cjs input output
```

### Przetwarzanie pojedynczego pliku

Aby przetworzyć pojedynczy plik, możesz użyć funkcji `processFile` zaimportowanej z modułu:

```javascript
const { processFile } = require('./convert-openlyrics-to-chordpro.cjs');
processFile('input/plik.xml', 'output/');
```

## Struktura kodu

Skrypt zawiera następujące główne funkcje:

- `convertOpenLyricsToChordPro(xmlContent)` - konwertuje zawartość XML na format ChordPro
- `processFile(inputFile, outputDir)` - przetwarza pojedynczy plik
- `processDirectory(inputDir, outputDir)` - przetwarza wszystkie pliki XML w katalogu

## Format wyjściowy

Wygenerowany plik ChordPro będzie zawierał:

```
{title: Tytuł piosenki}
{artist: Autor piosenki}

{start_of_verse: Zwrotka 1}
Tekst zwrotki z [Dm]akordami
{end_of_verse}

{start_of_chorus: Refren}
Tekst refrenu z [G]akordami
{end_of_chorus}
```

## Znane problemy i ograniczenia

- Przetwarzane są tylko podstawowe elementy formatu OpenLyrics
- Dodatkowe metadane (tempo, tonacja) nie są obecnie obsługiwane
- Kodowanie znaków jest obsługiwane dla UTF-8

## Przykład

### Wejście (OpenLyrics XML):

```xml
<song>
  <properties>
    <titles><title>Przykładowa piosenka</title></titles>
    <authors><author>Jan Kowalski</author></authors>
  </properties>
  <lyrics>
    <verse name="v1">
      <lines>
        <chord name="C"/>Tu jest <chord name="G"/>tekst piosenki
      </lines>
    </verse>
  </lyrics>
</song>
```

### Wyjście (ChordPro):

```
{title: Przykładowa piosenka}
{artist: Jan Kowalski}

{start_of_verse: Zwrotka 1}
[C]Tu jest [G]tekst piosenki
{end_of_verse}
``` 