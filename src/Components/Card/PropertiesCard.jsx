import Style from "./card.module.css";
import { GrLocation } from "react-icons/gr";
import { LuBedDouble } from "react-icons/lu";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { SlHome } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import DetailsButton from "../Button/DetailsButton";
import GrayButton from "../Button/GrayButton";

export default function PropertiesCard({ data }) {
  return (
    <div className={Style.propertiesCard}>
      <div className={Style.propertiesCardImageArea}>
        <img
          src={data?.image || ""}
          loading="lazy"
          alt={data?.title || "property image"}
          className={Style.propertiesCardImage}
        />
      </div>

      <div className={Style.propertiesCardContent}>
        <p className={Style.propertiesCardPara}>
          <span>
            <GrLocation />
          </span>
          <span>{data?.location || "No Location"}</span>
        </p>
        <Link to={`/details/${data?.url}`}>
          <h5 className={Style.propertiesCardHeading}>
            {data?.title || "No Title"}
          </h5>
        </Link>

        <ul className={Style.propertiesCardList}>
          <li className={Style.propertiesCardItem}>
            <label className={Style.propertiesCardLabel}>
              <span>
                <LuBedDouble />
              </span>
              <span>Beds</span>
            </label>
            <span>{data?.bedrooms || "Not Available"}</span>
          </li>

          <li className={Style.propertiesCardItem}>
            <label className={Style.propertiesCardLabel}>
              <span>
                <LiaVectorSquareSolid />
              </span>
              <span>Area (SqFt)</span>
            </label>
            <span>{data?.areaSqft || "Not Available"}</span>
          </li>

          <li className={Style.propertiesCardItem}>
            <label className={Style.propertiesCardLabel}>
              <span>
                <FaRegMoneyBillAlt />
              </span>
              <span>Price</span>
            </label>
            <span>{data?.price || "Not Available"}</span>
          </li>

          <li className={Style.propertiesCardItem}>
            <label className={Style.propertiesCardLabel}>
              <span>
                <SlHome />
              </span>
              <span>Property Type</span>
            </label>
            <span>{data?.propertyType || "Not Available"}</span>
          </li>
        </ul>

        <div className={Style.propertiesCardBtnArea}>
          <DetailsButton url={`/details/${data?.url}`}>
            More Details
          </DetailsButton>
          <GrayButton url="https://wa.me/911234567890?text=Hello%2C+I+want+to+know+more+about+the+property">
            <FaWhatsapp />
            <span>Whatsapp</span>
          </GrayButton>
        </div>
      </div>
    </div>
  );
}
