import React from "react";
import Automation from "../icons/automation.svg";
import Clipboard from "../icons/clipboard.svg";
import Learning from "../icons/learning.svg";

const General: React.FC = () => {
  return (
    <div className="row content_mt">
      <div className="col s12">
        <div className="row">
          <div className="col s12">
            <div className="card hoverable">
              <div className="card-image">
                <img className="icons" src={Automation} alt="" />
              </div>
              <div className="card-content">
                <p>
                  Очень важно понять, что именно вы ответственны за достижение
                  этой цели
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m6">
        <div className="row">
          <div className="col s12">
            <div className="card hoverable">
              <div className="card-image">
                <img className="icons" src={Clipboard} alt="" />
              </div>
              <div className="card-content">
                <p>Постарайтесь позитивно сформулировать свои цели</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m6">
        <div className="row">
          <div className="col s12">
            <div className="card hoverable">
              <div className="card-image">
                <img className="icons" src={Learning} alt="" />
              </div>
              <div className="card-content">
                <p>
                  Вы должны ставить цели, когда точно знаете, какой результат
                  хотите получить
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
