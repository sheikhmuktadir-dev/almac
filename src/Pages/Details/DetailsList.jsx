import Style from "./details.module.css";
import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import { SlHome } from "react-icons/sl";
import { LuBedDouble } from "react-icons/lu";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";

export default function DetailsList({ data }) {
  return (
    <Section>
      <a
        href="https://wa.me/911234567890?text=Hello%2C+I+want+to+know+more+about+the+property"
        className={Style.detailsListWhatapp}
      >
        <FaWhatsapp />
      </a>
      <div className={Style.detailsList}>
        <Container>
          <div className={Style.detailsListTop}>
            <h5>{data?.location || "No Location"}</h5>
            <div className={Style.detailsListTopFlex}>
              <h4>{data?.title || "No Title"}</h4>
              <h4>{data?.price || "No Price"}</h4>
            </div>
          </div>

          <div className={Style.detailsListMain}>
            <div className={Style.detailsListMainLeft}>
              <div className={Style.detailsListBox}>
                <h4>Details</h4>
                <div className={Style.detailsListAmenitiesFlex}>
                  <div className={Style.detailsAminities}>
                    <h5>
                      <SlHome />
                    </h5>
                    <h5>
                      {data?.propertyType || "No Property Type Available"}
                    </h5>
                  </div>

                  <div className={Style.detailsAminities}>
                    <h5>
                      <LuBedDouble />
                    </h5>
                    <h5>{data?.bedrooms || "No Bedroom Available"}</h5>
                  </div>

                  <div className={Style.detailsAminities}>
                    <h5>
                      <LiaVectorSquareSolid />
                    </h5>
                    <h5>
                      {data?.areaSqft || "No"}
                      <span style={{ paddingLeft: "5px" }}>Sq.ft</span>
                    </h5>
                  </div>

                  <div className={Style.detailsAminities}>
                    <h5>Status</h5>
                    <h5>{data?.status || "No Status"}</h5>
                  </div>
                </div>
              </div>

              <div className={Style.detailsListBox}>
                <h4>Amenities</h4>
                <ul className={Style.detailsListOrder}>
                  {data?.amenities?.map((item, index) => {
                    return (
                      <li
                        key={item.label || index}
                        className={Style.detailsListOrderItem}
                      >
                        <img
                          src={item.icon || ""}
                          className={Style.amenitiesIcon}
                          alt="amenities icon"
                        />
                        <h5>{item.label || "Not Found"}</h5>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={Style.detailsListBox}>
                <h4>Payment Plan</h4>
                <div className={Style.detailsListpayPlanArea}>
                  {data?.paymentPlan?.map((list) => {
                    return (
                      <div className={Style.payPlanFlex}>
                        <h5 className={Style.payPlanHeading}>
                          {list.installment || "Not Available"}
                        </h5>
                        <h5>{list.percentage || "Not Available"}</h5>
                        <h5>{list.amount || "Not Available"}</h5>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={Style.detailsListMainRight}>
              <div className={Style.detailsListBox}>
                <h4>Floor Plan</h4>
                <a
                  href={data?.floorPlan}
                  target="_blank"
                  className={Style.floorPlanButton}
                >
                  Download
                </a>
              </div>
              <div className={Style.detailsListBox}>
                <h4>Location</h4>
                <iframe
                  title="property location"
                  src={data?.mapIframe || ""}
                  width="100%"
                  style={{ border: 0 }}
                  className={Style.propertyMap}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
