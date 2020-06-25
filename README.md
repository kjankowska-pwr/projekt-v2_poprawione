---
title: Accessibility Mem Service przy użyciu React - projekt zaliczeniowy WSB Frontend Developer
author: Karolina Jankowska
---
# Accessibility Mem Page przy użyciu React - projekt zaliczeniowy WSB Frontend Developer

## 1. Wprowadzenie.

React w pełni wspiera budowanie dostępnych dla wszystkich stron internetowych, często z wykorzystaniem standardowych technik HTML. Jednak należy pamiętać o tym aby kod, który piszemy był poprawny semantycznie. Ułatwi to jego interpretacje programom i narzędziom wspierającym takim jak czytniki ekranu, myszki sterowane ruchem głowy, itp. Strona/aplikacja zaprojektowana w sposób uniwersalny da możliwość skorzystania z niej jaknajwiększej grupie osób, również tym ze szczególnymi potrzebami.

## 2. Dostępność - accessibility.

### 2.1. Czym jest dostępność?

Pojęcie dostępności stron internetowych (określanej również jako a11y od ang. *accessibility*) zostało zaprojektowane i stworzone z myślą o Internecie przystępnym dla wszystkich. Wspieranie dostępności jest niezbędne, aby umożliwić technologiom asystującym poprawną interpretację stron.

#### 2.1.1 Wytyczne WCAG

Web Content Accessibility Guidelines czyli podręcznik dostępności treści internetowych. To standard ustanowiony przez ogólnoświatową organizację W3C (*The World Wide Web Consortium*) określający zasady tworzenia treści internetowych w taki sposób aby były dostępne dla wszystkich użytkowników niezależnie od wieku, niepełnosprawności, zamożności, użytego sprzętu i oprogramowania. Do współpracy przy tworzeniu standardu zostali zaproszeni najwięksi naukowcy i przedstawiciele największych firm informatycznych takich jak Microsoft, IBM Cisco, Adobe, Apple czy Google. Obecnie obowiązuje druga odsłona Web Content Accessibility Guidelines pod nazwą WCAG 2.1 i jest stosowana w wielu krajach na całym świecie.

### 2.2. Dostępność w świetle praw.

W Polsce od kwietnia 2019 obowiązuje Ustawa o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych. Ustawa ta stawia wymagania dotyczące spełnienia wytycznych WCAG 2.1. (załącznik 1 do ustawy)

W jednym z najważniejszych dokumentów Unii Europejskiej, odnoszącym się do ICT (*Information and Communication Technologies*) – Europejskiej Agendzie Cyfrowej znajduje się zapis, wskazujący na rekomendacje W3C, jako obowiązujące. O ile wskazania te dotyczą obszaru administracji państwowej, a mówiąc bardziej precyzyjnie podmiotów realizujących zadania publiczne, o tyle agenda zachęca również biznes i sektor prywatny do tworzenia dobrych praktyk. Zachęca na tyle skutecznie, że w wielu przedsiębiorstwach, zwłaszcza tych o zasięgu międzynarodowym, problematyka dostępności jest jednym z kluczowych obszarów. Wiele przedsiębiorstw zdaje sobie sprawę, że dostępność strony www dla jak najszerszej grupy użytkowników niesie ze sobą same korzyści. Oczywiście, dostosowanie istniejącej strony www wiąże się z pewnymi kosztami, ale już uruchomienie nowego serwisu, zgodnego ze standardem nie podnosi ich znacząco.

### 2.3. Podstawowe źródła informacji i dobre praktyki.

#### 2.3.1. Wytyczne WCAG 2.1 i rozumienie dostępności.

Wytyczne WCAG 2.1. (oryginalna wersja) https://www.w3.org/TR/WCAG21/

Jak spełnić WCAG (Krótki przewodnik) https://wcag.lepszyweb.pl/

Dostępność React https://pl.reactjs.org/docs/accessibility.html

#### 2.3.2. Poprawne tworzenie opisów alternatywnych.

Zasada 1 - Postrzegalność.

Wytyczna 1.1 - Alternatywa w postaci tekstu.

Kryterium sukcesu 1.1.1 (Poziom A)

W serwisie, którego główną funkcjonalnością jest przeglądanie i głosowanie na memy, znajdować się będzie wiele grafik, które będą wymagać opisu. Aby dane zdjęcie/mem było dostępne dla osób z niepełnosprawnością wzroku należy opatrzeć je w opis, który odzwierciedla to co  w rzeczywistości znajduje się na grafice. Sam tekst alternatywny w postaci np. `alt="mem1"` lub `alt="zdjecie kotka"` nie jest wystarczające. Jednak nie  należy także niepotrzebnie rozwijać opisów, np. o szczegółowy wygląd jakiejś postaci (o ile nie jest to informacja potrzebna do zrozumienia mema). Także staramy się nie interpretować tego co znajduje się na zdjęciu - możemy naszą interpretacją wprowadzić kogoś w błąd. Podajemy "suche" fakty.

![Portret Schopenhauera z tekstem: Wszystko się ułoży. 3 metry pod ziemią.](https://d-pt.ppstatic.pl/k/r/1/ef/3d/577c980ac5e3d_p.jpg?1467818722)

Przykładowy tekst alternatywny powyższego mema to `alt="Portret Schopenhauera z tekstem: Wszystko się ułoży. 3 metry pod ziemią."`

Przykłady niepoprawnego tekstu alternatywnego powyższego mema to:

`alt = "Zdjęcie przedstawia portret starszego mężczyzny. Mężczyzna ma siwe włosy, na czubku głowy łysina, po bokach bujna fryzura. Jest elegancko ubrany. To Schopenhauer - niemiecki filozof żyjący w latach 1788-1860, itp."`

`alt = "Na memie Schopenhauer - niemiecki filozof, przedstawiciel pesymizmu. Na górze grafiki znajduje się tekst "Wszystko się ułoży". Na dole tekst "3 metry pod ziemią"`

Teoretycznie drugi opis podany jako niepoprawny byłby w porządku, ale informujemy w opisie kim był Schopenhauer. Osoba widząca przeglądająca memy nie dostaje takiej informacji. Albo rozpoznaje filozofa ze zdjęcia i wie jakiego nurtu był on przedstawicielem albo nie.  Nie mamy wpływu na to czy ktoś zna jakąś dziedzinę czy nie.

Dodając teksty alternatywne należy pamiętać o zasadach ortografii i interpunkcji. Popełniając błędy sprawimy, że tekst może być gorzej zrozumiały dla osób z niepełnosprawnością, a przecież to dla tych osób tworzymy te opisy. Warto pamiętać o tym, że czytniki ekranu używane przez osoby z niepełnosprawnością wzroku reagują na znaki interpunkcyjne. Tworząd poprawne opisy alternatywne dajemy też dobry przykład dla innych twórców.

Zapraszam do lektury podręcznika "Chodź opisz nasz świat - poradnik dla redaktorów stron www... zawierający wyjaśnienia dla wszystkich, którzy  umieszczają informacje na stronach internetowych i chcieliby, by te informacje były dostępne dla wszystkich użytkowników." autorstwa Adama Pietrasiewicza oraz Mateusza Ciborowskiego (aktualnie ekspertów ds. dostępnośco cyfrowej w Ministerstwie Cyfryzacji) i zapoznania się z przykładami w nim występującymi celem poprawienia warsztatu tworzenia opisów alternatywnych do grafik/zdjęć. http://akceslab.pl/poradnik/

## 3. Przygotowanie środowiska

Projekt przygotowywany jest w programie Visual Studio Code (version 1.45.1) w środowisku Windows 10 Home, 64bit. Przegląd uruchomionej aplikacji odbywa się w przeglądarce internetowej Firefox (version 77.0.1 (64 bit)).

### 3.1. Stworzenie środowiska przez Create React App

Uruchamiam terminal w programie VSC. Za pomocą komendy

```bash
npx create-react-app mem-page
```

tworzę środowisko pracy React.  

![Zrzut fragmentu z terminala: We suggest that you begin by typing: \\ cd mem-page // npm start // Happy hacking!](https://pbs.twimg.com/media/DtCqzv8VYAAyOuj.jpg)

npx to narzędzie uruchamiające pakiety zawarte w npm 5.2+. Kolejno przechodzę do folderu z utworzonym środowiskiem,

```bash
cd mem-page
```

a następnie uruchamiam npm.

```bash
npm start
```

#### 3.2. Podstawowe zmiany w szablonie.

Deklaruje język strony w pliku HTML ./mem-page/public/index.html

Strona z memami będzie tworzona w języku polskim, a więc należy zmienić kod języka z aktualnego

```html
<html lang="en">
```

na

```html
<html lang="pl">
```

Kolejnym elementem do zmiany w index.html jest tytuł strony 

```html
<title>React App</title>
```

zamieniam na

```html
<title>Strona z memami</title>
```

## 4. Funkcjonalności aplikacji

### 4.1. Aplikacja zawiera route ‘/hot’ i ‘/regular’.

W katalogu **src** dodaję folder **pages**, a następnie w nowoutworzonym folderze dodaję dwa pliki: **Regular.js** praz **Hot.js**. Bedą to dwa routy wyświetlające memy (Regular wyświetlać będzie wszystkie memy, zaś Hot najlepsze). W folderze **pages** dodaje także pliki **Main.js** - Strona główna, **Page404.js** - strona z błędem 404 oraz **Navbar.js** odpowiadajacą za pasek menu.

W konsoli wpisuję: 
```bash
npm install react-router-dom 
```
W pliku **App.js** znajdującym się w folderze **src** importuję bibliotekę odpowiadającą za routing stron.

```JavaScript
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
```
oraz pozostałe importy dotyczące powstałych stron znajdujących się w folderze **src/pages** oraz **App.css** z folderu **src**.
```JavaScript
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";
import Page404 from "./pages/Page404";
import Regular from "./pages/Regular";
import Hot from "./pages/Hot";

import "./App.css";
```

Kolejnym elementem jest dodanie routów do poszczególnych stworzonych stron - w dalszym ciągu w pliku **App.js** z folderu **src**.
```JavaScript
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className="Routes">
            <Switch>
              <Route exact path="/">
                <Redirect to="/main" />
              </Route>
              <Route path="/main">
                <Main />
              </Route>
              <Route path="/regular">
                <Regular />
              </Route>
              <Route path="/hot">
                <Hot />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
```

### 4.2. Memy z ilością (upvote - downvote > 5) trafianą na route ‘/hot’, pozostałe znajdują się na ‘regular’.

### 4.3. Dodane proste menu, które pozwala przełączać się między sekcjami.
Menu zostaje dodane przez plik **Navbar.js** znajdujący się w folderze **src/pages**.
W pliku **Navbar.js** importuję NavLink z bilbioteki react-router-dom.
```JavaScript
import { NavLink } from "react-router-dom";
```
a następnie dodaję pasek menu dzięki któremu można się przełączać pomiędzy routami Main/Regular/Hot.
```JavaScript
class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <ul>
          <li>
            <NavLink to="/Main">Strona główna</NavLink>
          </li>
          <li>
            <NavLink to="/Regular">Wszystkie</NavLink>
          </li>
          <li>
            <NavLink to="/Hot">Najlepsze</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
```

### 4.4. Baza memów jest stała. Memy zapisane są w tablicy postaci:

`[
	{
		title: “Mem 1”,
		upvotes: 6,
		downvotes: 0,
		img: “path/to/image1.png”,
	},
	{
		title: “Mem 2”,
		upvotes: 1,
		downvotes: 2,
		img: “path/to/image2.png”,
},
....
]`

```JavaScript
[
	{
		title: "Wirus",
		upvotes: 0,
		downvotes: 0,
		img: "https://pobierak.jeja.pl/images/2/b/2/602865_artur-wie-co-mowi.jpg",
		alt: "Portret Schopenhauera z podpisem: Za rok będziecie się śmiać z tego wirusa. Oczywiście nie wszyscy.",
	},
	{
		title: "Miłość",
		upvotes: 0,
		downvotes: 0
		img: "https://www.gdansk.pl/download/2017-12/99803.jpg",
		alt: "Portret Schopenhauera z podpisem: Czy warto kochać, jeśli miłość może być źródłem cierpienia? Warto.",
	},
	{
		title: "Przyszłość",
		upvotes: 0,
		downvotes: 0,
		img: "https://memy.pl/show/big/uploads/Post/72501/14677913535394.jpg",
		alt: "Portret Schopenhauera z podpisem: Widzę przed tobą świetlaną przyszłość. To chyba znicze...",
	},
	{
		title: "Egzystencja",
		upvotes: 0,
		downvotes: 0,
		img: "https://memy.pl/show/big/uploads/Post/28436/14490599392218.jpg".
		alt: "Schopenauer stoi przed pustą tablicą, wskazuje na nią palcem. Obok ludzie klaszczą. Podpis: Na tej tablicy wynotowałem efektywne metody radzenia sobie z egzystencjalną pustką.",
	},
	{
		title: "Nekrolog",
		upvotes: 0,
		downvotes: 0,
		img: "https://d-pt.ppstatic.pl/k/r/1/45/d0/577c98079565f_p.jpg",
		alt: "Portret Schopenhauera z podpisem: O, nekrolog. Poczytam sobie.",
	},
	{
		title: "Palenie zabija",
		upvotes: 0,
		downvotes: 0,
		img: "https://a.wattpad.com/cover/132121178-352-k600414.jpg",
		alt: "Paczka papierosów z napisem 'Palenie zabija'. Pod spodem portret Schopenahuera z podpisem 'To dobrze'.",
	},
	{
		title: "Prognoza pogody",
		upvotes: 0,
		downvotes: 0,
		img: "https://i.pinimg.com/originals/8f/c3/da/8fc3dabad13fb2e20b3e45d7dae4e87c.jpg",
		alt: "Obrazkowa prognoza pogody na cały tydzień. W każdym dniu chmury i deszcz. Pod spodem portret Schopenhauera z podpisem: Wyśmienicie.",
	},
	{
		title: "Gorzej być nie może",
		upvotes: 0,
		downvotes: 0,
		img: "https://1.bp.blogspot.com/-98KZGn2XtuU/XD3g-dRCdOI/AAAAAAAACUE/eC4pTEtORbALLZSxoHsgWNLmqwa9ynDSQCLcBGAs/s1600/artursch5.jpg",
		alt: "Portret Schopenhauera z podpisem: Gorzej być nie może? Gorzej być może i będzie.",
	}
]
```

### 4.5. Utworzenie komponentu Mem, który wyświetla tytuł, liczbę upvotes/downvotes, obrazek oraz kontrolki do kliknięcia upvote, downvote.

W folderze **src** tworzę folder **components**, zaś w tym folderze tworzę plik **Meme.jsx**. W tym ustalam wygląd memów oraz mechanizm głosowania:
```react
const Meme = ({title, img, alt, upvotes=0, downvotes=0}) => {

	const [upVote, setUpVote] = useState(upvotes)
	const [downVote, setDownVote] = useState(downvotes)

	const handleUpVote = () => {
		setUpVote(upVote + 1)
	}

	const handleDownVote = () => {
		setDownVote(downVote + 1)

	}
```

### 4.6. Generowanie listy z komponentu Mem i wyświetlanie w '/hot' i '/regular'.
Dodaję tablicę memów oraz sposób wyświetlania memów z listy na roucie /regular **Wszystkie**.
```react
let memes = [
    {
        title: "Wirus",
        upvotes: 0,
        downvotes: 0,
        img: "https://pobierak.jeja.pl/images/2/b/2/602865_artur-wie-co-mowi.jpg",
        alt: "Portret Schopenhauera z podpisem: Za rok będziecie się śmiać z tego wirusa. Oczywiście nie wszyscy.",
    },
    {
        title: "Miłość",
        upvotes: 0,
        downvotes: 0,
        img: "https://www.gdansk.pl/download/2017-12/99803.jpg",
        alt: "Portret Schopenhauera z podpisem: Czy warto kochać, jeśli miłość może być źródłem cierpienia? Warto.",
    },
    {
        title: "Przyszłość",
        upvotes: 0,
        downvotes: 0,
        img: "https://memy.pl/show/big/uploads/Post/72501/14677913535394.jpg",
        alt: "Portret Schopenhauera z podpisem: Widzę przed tobą świetlaną przyszłość. To chyba znicze...",
    },
    {
        title: "Egzystencja",
        upvotes: 0,
        downvotes: 0,
        img: "https://memy.pl/show/big/uploads/Post/28436/14490599392218.jpg",
        alt: "Schopenauer stoi przed pustą tablicą, wskazuje na nią palcem. Obok ludzie klaszczą. Podpis: Na tej tablicy wynotowałem efektywne metody radzenia sobie z egzystencjalną pustką.",
    },
    {
        title: "Nekrolog",
        upvotes: 0,
        downvotes: 0,
        img: "https://d-pt.ppstatic.pl/k/r/1/45/d0/577c98079565f_p.jpg",
        alt: "Portret Schopenhauera z podpisem: O, nekrolog. Poczytam sobie.",
    },
    {
        title: "Palenie zabija",
        upvotes: 0,
        downvotes: 0,
        img: "https://a.wattpad.com/cover/132121178-352-k600414.jpg",
        alt: "Paczka papierosów z napisem 'Palenie zabija'. Pod spodem portret Schopenahuera z podpisem 'To dobrze'.",
    },
    {
        title: "Prognoza pogody",
        upvotes: 0,
        downvotes: 0,
        img: "https://i.pinimg.com/originals/8f/c3/da/8fc3dabad13fb2e20b3e45d7dae4e87c.jpg",
        alt: "Obrazkowa prognoza pogody na cały tydzień. W każdym dniu chmury i deszcz. Pod spodem portret Schopenhauera z podpisem: Wyśmienicie.",
    },
    {
        title: "Gorzej być nie może",
        upvotes: 0,
        downvotes: 0,
        img: "https://1.bp.blogspot.com/-98KZGn2XtuU/XD3g-dRCdOI/AAAAAAAACUE/eC4pTEtORbALLZSxoHsgWNLmqwa9ynDSQCLcBGAs/s1600/artursch5.jpg",
        alt: "Portret Schopenhauera z podpisem: Gorzej być nie może? Gorzej być może i będzie.",
    }
];


const RegularPage = () => {
  return (
    <div>
        <h1>Wszystkie memy</h1>
        <div className={"regular-memes__container"}>
        {memes.map(meme => {
            return <Meme {...meme} />
        })}
        </div>
    </div>
  );
};
```
### *4.7. Na odpowiednich routach znajdują się przefiltrowane listy z bazą memów (zgodnie z zasadą: "Memy z ilością (upvote - downvote > 5) trafiają na route ‘/hot’, pozostałe znajdują się na ‘regular’"). Filtrowanie działa "live".*

### 4.8. Aktywny przycisk przełączający routa odróżnia się od nieaktywnego.

W pliku **App.css** ustalam wygląd aktywnych i nieaktywnych przycisków paska nawigacyjnego oraz wygląd po najechaniu kursorem oraz po osiągnięciu focusa (tj. gdy dojdziemy do danego klikalnego elementu za pomocą tabulatora).

```css
li a:hover:not(.active) {
  background-color: #000000;
}
li a:focus:not(.active) {
  background-color: #000000;
}
.active {
  background-color: #791CAB;
```


### 4.9. Lista memów jest przewijalna.

W CSS ustalam dla znacznika odpowiadającego za nawigację:
```css
nav {
  position: fixed;
}
```
dzięki czemu menu nawigacyjne będzie przypięte na stałe w jednym miejscu, zaś lista memów będzie przewijalna.

### *4.10. ** Możliwość oznaczenia mema gwiazdką (dodanie nowego pola w bazie memów).*

### *4.11. ** (dodatkowe) Dodany dodatkowy route z formularzem do dodawania mema.*

### 4.12. Stylowanie wyglądu.

Kolorystyka: użyta kolorystyka jest zgodna z WCAG 2.1. - wytyczna 1.4. Możliwość rozróżnienia - kryterium sukcesu 1.4.3 Kontrast (minimalny) Poziom AA. 
Wizualne przedstawienie tekstu, lub obrazu tekstu posiada kontrast wynoszący przynajmniej 4,5:1. 
Sprawdzając kontrasty użyłam narzędzia "Wyszukiwarka kontrastu" dostępnego na stronie lepszyweb: https://kontrast.lepszyweb.pl/. 
Tło białe, czcionka czarna - kontrast: 
Pasek menu: po najechaniu myszą lub otrzymaniu focusa: kolor czarny #707070, czcionka biała - kontrast: 4,95 > 4,5. 
Wygląd statyczny: kolor czarny, czczionka biała  - kontrast: 21 > 4,5. 
Aktywny przycisk menu: kolor #791CAB, czcionka biała - kontrast: 8,18 > 4,5.
Przycisk Lubię: kolor #108301, czcionka biała - kontrast: 4,92 > 4,5, po najechaniu myszą lub otrzymaniu focuca kolor: #0C6001, czcionka biała - kontrast: 7,81 > 4,5.
Przycisk Nie lubię: kolor #E00000, czcionka biała - kontrast: 5,04 > 4,5, po najechaniu myszą kolor lub otrzymaniu focusa kolor: #AD0000, czcionka biała - kontrast: 7,56 > 4,5.

## 5. Uruchomienie aplikacji - instrukcja.

Należy ściągnać paczkę z aplikacją, następnie ją rozpakować i dodać do programu Visual Studio Code. Włączyć terminal **ctrl + `**. Następnie za pomocą komendy **cd** przejść do katalogu z aplikacją. Następnie należy wpisać następujące komendy:

```bash
npm i
```

i kolejno

```bash
npm run start
```

Otworzy się przeglądarka internetowa powiązana z programem Visual Studio Code, która wyświetli na domyślnym adresie "http://localhost:3000/" aplikację.

## 6. Testowanie aplikacji pod kątem wytycznych WCAG 2.1.

### 6.1. Automatyczna walidacja.

Automatyczna walidacja została przeprowadzona przy użyciu dodatku do Firefoxa o nazwie WAVE Accessibility Extension (autorstwa WebAIM).
Automatyczna walidacja nie wykazała błędów. Zostały pokazane ostrzeżenia dotyczące długości tekstów alternatywnych. Przy długich opisach dobrą praktyką jest skrócenie tekstu alternatywnego w atrybucie "alt" 
oraz dodawanie grafik na przykład w następującej postaci:
```html
<figure id="img1">
    <img src="images/img.png" class="img-fluid" alt="Tutaj umieszczamy opis alternatywny do grafiki"/>
<figcaption class="tfl-center">
Tutaj umieszczamy wyświetlany tytuł grafiki.
<details>
<summary>Szczegółowy opis grafiki</summary>
<p>
Tutaj umieszczamy szczegółowy opis grafiki.
</p>
</details>
</figcaption>
</figure>
```

### 6.2. Testowanie przy pomocy oprogramowania udźwiękawiającego (screen reader) NVDA.

Użyte oprogramowanie udźwiękawiające do testów dostępności to NVDA (NonVisual Desktop Access) w wersji 2020.1beta1. 
Sprawdzenie dostępności opierało się na walidacji kilku podstawowych wytycznych WCAG 2.1 m.in. osiągalność elementów interfejsu za pomocą klawiatury, 
osiągalność fokusa, logiczna treść (użycie odpowiedniej hierarchii nagłówków, list, itp.). Oprócz weryfikacji dźwiękowej zostało użyte także narzędzie NVDA "Podgląd mowy".
Przykładowy fragment z podglądu mowy (dotyczący nawigacji i przejścia do nagłówka podstrony) wygląda następująco:
```
Strona z memami - Google Chrome
Strona z memami
nawigacja punkt orientacyjny 
lista  elementów: 3
• 
odwiedzony  link
Strona główna
• 
odwiedzony  link  bieżąca strona
Wszystkie
• 
odwiedzony  link
Najlepsze
Koniec lista
nagłówek  poziom 1
Wszystkie memy
```

### 6.4. Testowanie aplikacji przez użytkownika z niepełnosprawnością / ze szczególnymi potrzebami.

Do testowania aplikacji został zaproszony informatyk z niepełnosprawnością wzroku, niewidomy, 
posługujący się oprogramowaniem udźwiękawiajacym NVDA oraz JAWs. 
Funkcjonalności były sprawdzane w przeglądarce Firefox version 77.0.1 (64 bit) na systemie operacyjnym Windows 10.
Niewidomy tester mógł bez problemu zaznajomić się z listą memów oraz zagłosować na nie. Poruszanie się po menu również nie stanowiło problemu.