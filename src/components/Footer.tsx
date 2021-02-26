import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="page-footer purple darken-3 body">
      <div className="container main">
        <div className="row">
          <div className="col l12 s12 ">
            <h3 className="white-text text">Robot Memory</h3>
            <p className="grey-text text-lighten-4">
              You cannot change the direction of the wind, but you can always
              raise the sails to reach your goal
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright purple darken-4">
        <div className="container">
          © 2021 Robot Memory made by Philipp Timokhin
        </div>
      </div>
    </footer>
  );
};

export default Footer;
