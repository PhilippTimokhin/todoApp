import React from "react";
import Ai from "../icons/ai.svg";

const Preview = () => {
  return (
    <div className="row">
      <div className="col s12  preview_color">
        <img className="preview" src={Ai} alt="chatbot" />
        <h4 className="text_pr">Добьемся цели вместе.</h4>
        <h5 className="text_pr">
          Записывайте свои цели и достигайте вместе с Robot Memory
        </h5>
      </div>
    </div>
  );
};

export default Preview;
