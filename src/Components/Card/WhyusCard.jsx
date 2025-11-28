import Style from "./card.module.css";
import iconMain from "/images/icons/burj-al-arab.png";

export default function WhyusCard({ title, para, icon }) {
  return (
    <div className={Style.whyusCard}>
      <img
        src={icon || iconMain}
        alt={title || "card image"}
        className={Style.whyusCardIcon}
        loading="lazy"
      />
      <h5>{title || "No Title"}</h5>

      <div className={Style.whyusCardHideBox}>
        <h5 className={Style.whyusCardHideBoxText}>
          {para || "No additional details provided."}
        </h5>
      </div>
    </div>
  );
}
