import Style from "./footer.module.css";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import footerData from "./Footer.json";

export default function Footer() {
  const icons = {
    FaInstagram: <FaInstagram />,
    FaFacebookF: <FaFacebookF />,
    FaXTwitter: <FaXTwitter />,
    AiOutlineYoutube: <AiOutlineYoutube />,
  };

  return (
    <footer className={Style.footerMain}>
      <Container>
        <div className={Style.footerTop}>
          <Link to="/" className={Style.footerLogo}>
            <span>Almac</span>
            <span>Real Estate</span>
          </Link>

          <div className={Style.footerSocial}>
            <p>Follow us</p>

            {footerData?.socialLinks?.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                className={Style.socialLinks}
              >
                {icons[item.icon]}
              </a>
            ))}
          </div>
        </div>

        <div className={Style.footerGrid}>
          <div className={Style.footerContent}>
            <h5>Quick Links</h5>
            <ul className={Style.footerList}>
              {footerData?.quickLinks?.map((footerLink) => {
                return (
                  <li key={footerLink?.label}>
                    <Link to={footerLink?.url} className={Style.footerLinks}>
                      {footerLink?.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={Style.footerContent}>
            <h5>Living Experiences</h5>
            <ul className={Style.footerList}>
              {footerData?.livingExperiences?.map((footerLink) => {
                return (
                  <li key={footerLink?.label}>
                    <Link to={footerLink?.url} className={Style.footerLinks}>
                      {footerLink?.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={Style.footerContent}>
            <h5>Media Center</h5>
            <ul className={Style.footerList}>
              {footerData?.mediaCenter?.map((footerLink) => {
                return (
                  <li key={footerLink?.label}>
                    <Link to={footerLink?.url} className={Style.footerLinks}>
                      {footerLink?.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={Style.footerContent}>
            <h5>Contact Us</h5>
            <ul className={Style.footerList}>
              <li>
                <p>{footerData?.contact?.address}</p>
              </li>
              <li>
                <a
                  href={`tel:${footerData?.contact?.phone}`}
                  className={Style.footerLinks}
                >
                  {footerData?.contact?.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footerData?.contact?.email}`}
                  className={Style.footerLinks}
                >
                  {footerData?.contact?.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={Style.footerBottom}>
          <div className={Style.footerBottomFlex}>
            {footerData?.policies?.map((links) => {
              return (
                <Link
                  to={links?.url}
                  key={links?.label}
                  className={Style.footerLinks}
                >
                  {links?.label}
                </Link>
              );
            })}
          </div>

          <p>{footerData?.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
