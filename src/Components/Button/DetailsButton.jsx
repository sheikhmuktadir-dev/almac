import { Link } from "react-router-dom";
import Style from "./button.module.css";

export default function DetailsButton({ children, url }) {
  return (
    <Link to={url || "/"} className={Style.detailsButton}>
      {children}
    </Link>
  );
}
