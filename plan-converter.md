# Plan implementacji konwertera OpenLyrics do ChordPro

## Cel projektu
Stworzenie skryptu w JavaScript do konwersji plików w formacie OpenLyrics (.xml) na format ChordPro (.cho).

## Etapy realizacji

### 1. Analiza struktury formatu OpenLyrics
- [x] Zrozumienie schematu XML używanego w OpenLyrics
- [x] Identyfikacja niezbędnych elementów (tytuł, autor, zwrotki, refreny)
- [x] Określenie sposobu reprezentacji akordów w OpenLyrics

### 2. Analiza struktury formatu ChordPro
- [x] Zrozumienie składni formatu ChordPro
- [x] Identyfikacja elementów formatu ChordPro odpowiadających elementom z OpenLyrics
- [x] Określenie sposobu reprezentacji akordów w ChordPro

### 3. Implementacja skryptu konwertującego
- [x] Utworzenie pliku skryptu JavaScript
- [x] Zaimplementowanie parsowania plików XML
- [x] Zaimplementowanie funkcji konwertującej treść OpenLyrics do ChordPro
- [x] Zaimplementowanie funkcji zapisującej przekonwertowany plik
- [x] Zaimplementowanie funkcji przetwarzającej wiele plików

### 4. Testowanie skryptu
- [x] Testowanie na przykładowym pliku OpenLyrics
- [x] Weryfikacja poprawności konwersji metadanych
- [x] Weryfikacja poprawności konwersji zwrotek, refrenów i akordów
- [x] Weryfikacja nazw generowanych plików
- [x] Rozwiązanie problemów z kodowaniem znaków
- [x] Rozwiązanie problemu z podziałem linii i znacznikami `<br/>`
- [x] Rozwiązanie problemu z duplikacją treści

### 5. Implementacja CLI
- [x] Dodanie obsługi parametrów linii poleceń
- [x] Dodanie opcji help i version
- [x] Dodanie opcji wskazania katalogu źródłowego i docelowego

### 6. Dokumentacja
- [x] Utworzenie README z opisem działania skryptu
- [x] Dodanie instrukcji instalacji i użycia
- [x] Dodanie przykładów użycia

### 7. Problemy do rozwiązania w przyszłości
- [ ] Poprawa obsługi kodowania UTF-8 i polskich znaków
- [ ] Obsługa więcej znaczników OpenLyrics (tempo, key, itd.)
- [ ] Możliwość wskazywania pojedynczych plików jako parametrów
- [ ] Dodanie opcji rekurencyjnego przeszukiwania katalogów 