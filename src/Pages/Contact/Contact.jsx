import Section from "../../Components/Section/Section";
import Style from "./contact.module.css";
import contactImage from "/images/other/view.webp";
import Container from "../../Components/Container/Container";
import { contactDetails } from "../../Data/DataMain";
import NotFound from "../../Components/ErrorHandler/NotFound";

export default function Contact() {
  return (
    <Section>
      <div className={Style.contactBanner}>
        <img
          src={contactImage}
          loading="lazy"
          alt="banner"
          className={Style.contactBannerImage}
        />
      </div>
      <Container>
        <div className={Style.contactGrid}>
          <div className={Style.contactBoxArea}>
            <h4>Contact Us</h4>

            {contactDetails.length > 0 ? (
              <>
                {contactDetails?.map((list, index) => {
                  return (
                    <div className={Style.contactBox} key={list?.id || index}>
                      <img
                        src={list.icon || ""}
                        alt="icon"
                        className={Style.contactBoxIcon}
                      />
                      <div className={Style.contactText}>
                        <label>{list?.labels}</label>
                        {list.labels === "Address" ? (
                          <h5>{list.value}</h5>
                        ) : (
                          <a href={list.link}>
                            <h5>{list.value || "No Data"}</h5>
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <NotFound>No details available</NotFound>
            )}
          </div>
          <iframe
            title="Downtown Dubai - Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.078441604033!2d55.27802644999999!3d25.19412875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682f700cf983%3A0xb5cc58b076c0b904!2sDowntown%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1764013440228!5m2!1sen!2sin"
            width="100%"
            style={{ border: 0 }}
            className={Style.contactMap}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </Section>
  );
}
