import React from "react";
import Img404 from "../assets/404.png";

const Page404 = () => {
  return (
    <div>
      <h1>Błąd 404</h1>
      <img alt="Błąd 404" src={Img404} />
      <br></br>
      Błąd. Skorzystaj z menu aby dostać sie do treści strony.
    </div>
  );
};

export default Page404;
