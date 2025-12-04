import Style from "./card.module.css";

export default function WhyusCard({ title, para, icon }) {
  return (
    <div className={Style.whyusCard}>
      <img
        src={icon || ""}
        alt={title || "card image"}
        className={Style.whyusCardIcon}
        loading="lazy"
      />
      <h5>{title || "No Title"}</h5>

      <div className={Style.whyusCardHideBox}>
        <h6 className={Style.whyusCardHideBoxText}>
          {para || "No additional details provided."}
        </h6>
      </div>
    </div>
  );
}
