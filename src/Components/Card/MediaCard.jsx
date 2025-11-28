import { Link } from "react-router-dom";
import Style from "./card.module.css";
import mediaImage from "/images/media/media1.webp";

export default function MediaCard({ date, image, title, url }) {
  return (
    <Link to={url || "/"} className={Style.mediaCard}>
      <div className={Style.mediaCardImageArea}>
        <img
          src={image || mediaImage}
          alt={title || "media image"}
          className={Style.mediaCardImage}
          loading="lazy"
        />
      </div>

      <div className={Style.mediaCardTextArea}>
        <p>{date || "No Date"}</p>
        <h5 className={Style.mediaMainText}>{title || "No Title"}</h5>
      </div>
    </Link>
  );
}
