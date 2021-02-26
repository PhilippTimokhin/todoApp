import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper purple darken-4">
          <a href="/" className="logo left">
            <h5 className="text">Robot Memory</h5>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
