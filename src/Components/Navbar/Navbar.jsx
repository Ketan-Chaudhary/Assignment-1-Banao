import React from "react";
import "./Navbar.css";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <section className="innerWidth  nav-wrapper">
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
              className="search-input"
              placeholder="Search for your favorite groups in ATG"
            />
          </div>
        </div>
        <div className="nav-right flex items-center gap-1">
          <span>Create account. </span>
          <span className="cursor-pointer">
            {" "}
            <a href="" className="">
              It’s free!{" "}
            </a>{" "}
          </span>
          <span>
            <RiArrowDownSFill />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
