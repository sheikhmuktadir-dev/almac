import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Container from "./Components/Container/Container";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <div className="mobileBottomContact">
        <Container>
          <div className="mobileBottomContactFlex">
            <a href="tel:+971587772622" className="mobileBottomText">
              <span>Call Us Now</span>
              <FiPhoneCall />
            </a>
            <a
              href="https://wa.me/911234567890?text=Hello%2C+I+want+to+know+more+about+the+property"
              className="mobileBottomText"
            >
              <span>Whatsapp</span>
              <FaWhatsapp />
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
