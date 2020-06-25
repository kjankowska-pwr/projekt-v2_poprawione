import React from "react";
import README from '../assets/README.md';

const Main = () => {
    return (
        <div>
            <h1>Strona z pozytywnymi memami</h1>
            <p>Witamy na stronie ze śmiesznymi obrazkami, które spróbują nastawić Cię pozytywnie do życia.</p>
            <p>Zapraszam do zapoznania się z plikiem <a href={README} download="README.md">README.md</a>
            </p>
        </div>
    );
};

export default Main;
