// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './Navbar.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const Navbar = () => {
//   const [searchActive, setSearchActive] = useState(false);

//   const handleSearchClick = () => {
//     setSearchActive(!searchActive);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//       <NavLink className="navbar-brand" to="/">DharaFinance</NavLink>

//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// <li className="nav-item">
//   <NavLink exact className="nav-link" activeClassName="active" to="/">
//     Home
//   </NavLink>
// </li>
// <li className="nav-item">
//   <NavLink className="nav-link" activeClassName="active" to="/about-us">
//     About Us
//   </NavLink>
// </li>
// <li className="nav-item">
//   <NavLink className="nav-link" activeClassName="active" to="/services">
//     Services
//   </NavLink>
// </li>
//         </ul>

//         <form className="d-flex align-items-center justify-content-center connect-form">
//           <NavLink to="/connect-us" className="btn btn-outline-light connect-btn">
//             Contect Us
//           </NavLink>

//           {searchActive ? (
//             <div className="search-box">
//               <input
//                 type="text"
//                 className="search-input"
//                 placeholder="Search about loans"
//                 aria-label="Search"
//               />
//               <button
//                 className="btn btn-outline-light close-btn"
//                 onClick={handleSearchClick}
//                 type="button"
//               >
//                 <i className="bi bi-x"></i>
//               </button>
//             </div>
//           ) : (
//             <button
//               className="btn btn-outline-light search-btn"
//               type="button"
//               onClick={handleSearchClick}
//             >
//               <i className="bi bi-search"></i>
//             </button>
//           )}
//         </form>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  return (
    <header className={`header bg-dark ${isNavbarActive ? "sticky" : ""}`}>
      <NavLink className="logo" to="/">
        DharaFinance
      </NavLink>

      <div className="menu-icon" onClick={toggleNavbar}>
        {isNavbarActive ? (
          <CloseIcon style={{ fontSize: "2.5rem", color: "#ededed" }} />
        ) : (
          <MenuIcon style={{ fontSize: "2.5rem", color: "#ededed" }} />
        )}
      </div>

      <nav className={`navbar ${isNavbarActive ? "active" : ""}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/about-us"
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/services"
            >
              Services
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/connect-us"
              className="btn btn-outline-light connect-btn"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <span className="active-nav"></span>
      </nav>
    </header>
  );
};

export default Navbar;
