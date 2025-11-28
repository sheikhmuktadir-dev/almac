import Container from "../Container/Container";
import Style from "./navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import menuData from "./Navbar.json";

export default function NavbarMenu({ setMenuOpen, menuOpen }) {
  return (
    <div
      className={`${Style.navbarMenu} ${
        menuOpen ? Style.navbarMenuVisible : ""
      }`}
    >
      <Container>
        <div className={Style.navbarMenuFlex}>
          <div className={Style.navbarLogoArea}>
            <Link to="/" className={Style.navbarLogo}>
              <span>Almac</span>
              <span>Real Estate</span>
            </Link>
          </div>

          {/* navbar menu close btn */}
          <button
            className={Style.navbarToggleClose}
            onClick={() => setMenuOpen(false)}
          >
            <IoCloseOutline />
          </button>
        </div>
      </Container>

      <ul className={Style.navbarMenuList}>
        {menuData?.menus?.map((menuItem) => {
          return (
            <li className={Style.navbarMenuItem} key={menuItem?.label}>
              <NavLink
                to={menuItem?.url}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `${Style.navbarMenuLink} ${isActive ? Style.menuActive : ""}`
                }
              >
                {menuItem?.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
