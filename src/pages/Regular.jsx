import React from "react";

import Meme from "../components/Meme";


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

export default RegularPage;
