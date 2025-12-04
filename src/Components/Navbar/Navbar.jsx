import Style from "./navbar.module.css";
import Container from "../Container/Container";
import { Link, NavLink, useLocation } from "react-router-dom";
import navData from "./Navbar.json";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useEffect, useState } from "react";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  const [navScroll, setNavScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // nav link color according to pages
  const bgPages = ["/contact", "/details"];

  const isWhiteLink =
    location.pathname === "/" ||
    bgPages.some((path) => location.pathname.startsWith(path));

  // nav toggle show on scroll
  useEffect(() => {
    const navScrollHandler = () => {
      setNavScroll(window.scrollY > 600);
    };

    window.addEventListener("scroll", navScrollHandler);
    return () => window.removeEventListener("scroll", navScrollHandler);
  }, []);

  // body scroll disable when menu active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`${Style.navbarMain} ${
          isWhiteLink ? Style.navwhiteLink : ""
        }`}
      >
        <Container>
          <div className={Style.navbarInner}>
            <div className={Style.navbarLogoArea}>
              <Link to="/" className={Style.navbarLogo}>
                <span>Almac</span>
                <span>Real Estate</span>
              </Link>
            </div>

            <div className={Style.navbarContent}>
              <ul className={Style.navbarContentList}>
                {navData?.menus?.map((navItem) => {
                  return (
                    <li
                      className={Style.navbarContentItem}
                      key={navItem?.label}
                    >
                      <NavLink
                        to={navItem?.url}
                        className={({ isActive }) =>
                          `${Style.navbarContentLink} ${
                            isActive ? Style.activeNav : ""
                          }`
                        }
                      >
                        {navItem?.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Container>
      </nav>

      {/* navbar toggle btn */}
      <button
        className={`${Style.navbarToggle} ${
          navScroll ? Style.navbarToggleVisible : ""
        }`}
        onClick={() => setMenuOpen(true)}
      >
        <HiOutlineMenuAlt4 />
      </button>

      {/* navbar menu */}
      <NavbarMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
