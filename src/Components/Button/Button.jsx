import { Link } from "react-router-dom";
import Style from "./button.module.css";

export default function Button({ children, url }) {
  return (
    <Link to={url || "/"} className={Style.button}>
      {children}
    </Link>
  );
}
