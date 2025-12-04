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
      <div className={Style.detailsList}>
        <Container>
          <div className={Style.detailsListTop}>
            <h6>{data?.location || "No Location"}</h6>
            <div className={Style.detailsListTopFlex}>
              <h4>{data?.title || "No Title"}</h4>
              <h4>{data?.price || "No Price"}</h4>
            </div>
          </div>

          <div className={Style.detailsListMain}>
            <div className={Style.detailsListMainLeft}>
              <div className={Style.detailsListBox}>
                <h5>Details</h5>
                <div className={Style.detailsListAmenitiesFlex}>
                  <div className={Style.detailsAminities}>
                    <h6>
                      <SlHome />
                    </h6>
                    <h6>
                      {data?.propertyType || "No Property Type Available"}
                    </h6>
                  </div>

                  <div className={Style.detailsAminities}>
                    <h6>
                      <LuBedDouble />
                    </h6>
                    <h6>{data?.bedrooms || "No Bedroom Available"}</h6>
                  </div>

                  <div className={Style.detailsAminities}>
                    <h6>
                      <LiaVectorSquareSolid />
                    </h6>
                    <h6>
                      {data?.areaSqft || "No"}
                      <span style={{ paddingLeft: "5px" }}>Sq.ft</span>
                    </h6>
                  </div>

                  <div className={Style.detailsAminities}>
                    <h6>Status</h6>
                    <h6>{data?.status || "No Status"}</h6>
                  </div>
                </div>
              </div>

              <div className={Style.detailsListBox}>
                <h5>Amenities</h5>
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
                        <h6>{item.label || "Not Found"}</h6>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={Style.detailsListBox}>
                <h5>Payment Plan</h5>
                <div className={Style.detailsListpayPlanArea}>
                  {data?.paymentPlan?.map((list) => {
                    return (
                      <div className={Style.payPlanFlex}>
                        <h6 className={Style.payPlanHeading}>
                          {list.installment || "Not Available"}
                        </h6>
                        <h6>{list.percentage || "Not Available"}</h6>
                        <h6>{list.amount || "Not Available"}</h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={Style.detailsListMainRight}>
              <div className={Style.detailsListBox}>
                <h5>Floor Plan</h5>
                <a
                  href={data?.floorPlan}
                  target="_blank"
                  className={Style.floorPlanButton}
                >
                  Download
                </a>
              </div>
              <div className={Style.detailsListBox}>
                <h5>Location</h5>
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
              <div className={Style.detailsListBox}>
                <a
                  href="https://wa.me/911234567890?text=Hello%2C+I+want+to+know+more+about+the+property"
                  className={Style.detailsListWhatapp}
                >
                  <span>Whatsapp</span>
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
