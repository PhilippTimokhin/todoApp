import React from "react";
import Rob from "../icons/rob.svg";

const Board: React.FC = () => {
  return (
    <div className="row">
      <div className="col s12  preview_color">
        <img className="preview" src={Rob} alt="nano" />
        <h4 className="text_pr">Получить списки дел из вашей головы</h4>
        <h5 className="text_pr">
          Хватит думать о вашем списке дел - позвольте приложению Robot Memory
          помнить всё о вас
        </h5>
      </div>
    </div>
  );
};

export default Board;
