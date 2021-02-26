import React from "react";
import Second from "../icons/second.svg";
import Idea from "../icons/idea.svg";
import Robotics from "../icons/robotics.svg";

const Main: React.FC = () => {
  return (
    <div className="row content_mt">
      <div className="col s12">
        <div className="row">
          <div className="col s12">
            <div className="card hoverable">
              <div className="card-image">
                <img className="icons" src={Robotics} alt="" />
              </div>
              <div className="card-content">
                <p>
                  Подумайте, какими путями можно достичь целей, которые вы перед
                  собой поставили
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
                <img className="icons" src={Second} alt="" />
              </div>
              <div className="card-content">
                <p>Подумайте о том, что для вас важно</p>
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
                <img className="icons" src={Idea} alt="" />
              </div>
              <div className="card-content">
                <p>Попробуйте понять, каким вы хотите стать в будущем</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
