import React from "react";
import Feelings from "../icons/feelings.svg";

const Conclusion: React.FC = () => {
  return (
    <div className="row">
      <div className="col s12  preview_color">
        <img className="preview" src={Feelings} alt="nano" />
        <h4 className="text_pr">Сформируйте свой список дел уже сейчас</h4>
        <h5 className="text_pr">
          Просто напишите свою цель или задачу, которую нужно достичь или
          решить. Удачи!
        </h5>
      </div>
    </div>
  );
};

export default Conclusion;
