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

];


const HotPage = () => {
    return (
        <div>
            <h1>Najlepsze memy</h1>
            <div className={"regular-memes__container"}>
                {memes.map(meme => {
                    return <Meme {...meme} />
                })}
            </div>
        </div>
    );
};

export default HotPage;
