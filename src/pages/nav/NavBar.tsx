// import React, { useState } from "react";
// import scrollToElement from "scroll-to-element";
// import { NavLink, withRouter } from "react-router-dom";
// import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";
// import { NavBarProps, NavBarState } from "../interfaces/navBar.i";
// import { useScreenWidth } from "../../hooks/useScreenWidth";
// import { useEffect } from "react";

// interface NavProps {
//   active: string;
//   setActive: (page: string) => void;
// }

// interface NavState {
//   isOpen: boolean;
//   hiddenNav: boolean;
//   collapsed: boolean;
// }

// const NavBar: React.FC = ({ closeNav }) => {
//   const [hiddenNav, setHidden] = useState();
//   const [isOpen, setOpen] = useState(false);
//   const collapsed = !useScreenWidth(768);

//   const navBarRef = React.createRef<HTMLDivElement>();
//   const closeBtnRef = React.createRef<HTMLImageElement>();
//   const homeLink = React.createRef<HTMLDivElement>();
//   const portfolioLink = React.createRef<HTMLDivElement>();
//   const contactLink = React.createRef<HTMLDivElement>();
//   const aboutMeLink = React.createRef<HTMLDivElement>();

//   useEffect(() => {
//     if (closeNav) {
//       setHidden(true);
//     }
//   });

//   const onNavToggle = (): void => {
//     setOpen(!isOpen);
//   };

//   const onCloseButton = (): void => {
//     const nav = navBarRef.current;
//     const closeBtn = closeBtnRef.current;

//     closeBtn.classList.add("fadeOut");
//     setTimeout((): void => {
//       nav.classList.add("animated", "slideOutUp");
//     }, 500);

//     setTimeout((): void => {
//       closeNav();
//     }, 700);
//   };

//   return (
//     <>
//       <div
//         className="nav__container"
//         ref={navBarRef}
//         style={{
//           borderBottom: collapsed ? `1px solid ${color}` : "",
//           borderRadius: collapsed ? "10px" : "",
//           background:
//             collapsed && isOpen && navBackground
//               ? `url(${navBackground}) no-repeat fixed center`
//               : collapsed && isOpen && navColor
//               ? navColor
//               : "",
//         }}
//       >
//         {hiddenNav && (
//           <i
//             onClick={onCloseButton}
//             onKeyDown={onCloseButton}
//             role="button"
//             tabIndex={0}
//             className="fa fa-times animated pulse infinite nav__close-button"
//             ref={closeBtnRef}
//           />
//         )}
//         <Navbar
//           className={collapsed && isOpen ? "nav__collapsed" : ""}
//           color="faded"
//           dark={hiddenNav}
//           light={!hiddenNav}
//           expand="md"
//         >
//           <NavLink to="/">
//             <img src={logo} alt="JG Web Developer" className="nav__logo" />
//           </NavLink>
//           <div className="nav__separator" />
//           <NavbarToggler className={`nav__toggle--${color}`} onClick={onNavToggle} />
//           <Collapse isOpen={isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <div
//                 className={active === "home" ? "nav__home--active" : "nav__home"}
//                 ref={homeLink}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(): void => {
//                   home ? scrollToElement("#landing-page") : history.push("/");
//                 }}
//                 onClick={(): void => {
//                   home ? scrollToElement("#landing-page") : history.push("/");
//                 }}
//               >
//                 Home
//               </div>
//               <div
//                 className={active === "about" ? "nav__about-me--active" : "nav__about-me"}
//                 ref={aboutMeLink}
//                 role="button"
//                 tabIndex={0}
//                 onClick={(): void => {
//                   home ? scrollToElement("#about-me") : history.push("/#about-me");
//                 }}
//               >
//                 About Me
//               </div>
//               <div
//                 className={
//                   active === "portfolio" ? "nav__portfolio--active" : "nav__portfolio"
//                 }
//                 ref={portfolioLink}
//                 role="button"
//                 tabIndex={0}
//                 onClick={(): void => {
//                   home
//                     ? scrollToElement("#current-work")
//                     : history.push("/#current-work");
//                 }}
//               >
//                 Portfolio
//               </div>
//               <div
//                 className={active === "contact" ? "nav__contact--active" : "nav__contact"}
//                 ref={contactLink}
//                 role="button"
//                 tabIndex={0}
//                 onClick={(): void => {
//                   home
//                     ? scrollToElement("#contact-form")
//                     : history.push("/#contact-form");
//                 }}
//               >
//                 Contact Me
//               </div>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     </>
//   );
// };

// export default NavBar;
