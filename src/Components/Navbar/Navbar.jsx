import React from "react";
import "./Navbar.css";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <section className="innerWidth paddings nav-wrapper">
      <div className="nav-container">
        <div className="nav-left">
          {" "}
          <img src="/logo.png" alt="" />{" "}
        </div>
        <div className="nav-center">
          <div className="nav-search">
            <button>
              {" "}
              <IoIosSearch />
            </button>
            <input
              type="text"
              placeholder="Search for your favorite groups in ATG"
            />
          </div>
        </div>
        <div className="nav-right">
          Create account. <span> It’s free!</span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
