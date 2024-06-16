// import React from "react";
// import "./Navbar.css";
// import { IoIosSearch } from "react-icons/io";
// import { RiArrowDownSFill } from "react-icons/ri";
// import Signup from "../Authentication/Signup";

// const Navbar = () => {
//   return (
//     <section className="innerWidth  nav-wrapper">
//       <div className="nav-container">
//         <div className="nav-left">
//           {" "}
//           <img src="/logo.png" alt="" />{" "}
//         </div>
//         <div className="nav-center">
//           <div className="nav-search">
//             <button>
//               {" "}
//               <IoIosSearch />
//             </button>
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Search for your favorite groups in ATG"
//             />
//           </div>
//         </div>
//         <div className="nav-right flex items-center gap-1">
//           <span>Create account. </span>
//           <span className="cursor-pointer">
//             {" "}
//             <button
//               onClick={() => document.getElementById("my_modal_1").showModal()}
//             >
//               It’s free!{" "}
//             </button>{" "}
//             <Signup />
//           </span>
//           <span>
//             <RiArrowDownSFill />
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";
import Signup from "../Authentication/Signup";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import Content from "../Content/Content";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const openSignupModal = () => {
    document.getElementById("my_modal_1").showModal();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    window.localStorage.setItem("NotAuthenticated", true);
  };

  return (
    <section className="innerWidth nav-wrapper hidden lg:block  sm:m-0">
      <div className="nav-container">
        <div className="nav-left">
          <img src="/logo.png" alt="ATG World Logo" />
        </div>
        <div className="nav-center">
          <div className="nav-search">
            <button type="button">
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
          {isAuthenticated ? (
            <button
              type="button"
              className="flex items-center gap-3"
              onClick={handleLogout}
            >
              <Avatar
                name="Dan Abrahmov"
                w="36px"
                h="36px"
                src="https://bit.ly/dan-abramov"
              />
              <span>Siddharth Goyal</span>
              <span>
                <RiArrowDownSFill />
              </span>
              {window.localStorage.setItem("NotAuthenticated", false)}
            </button>
          ) : (
            <>
              <span>Create account.</span>
              <span className="cursor-pointer">
                <button type="button" onClick={openSignupModal}>
                  It’s free!
                </button>
                <Signup setIsAuthenticated={setIsAuthenticated} />
              </span>
              <span>
                <RiArrowDownSFill />
              </span>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
