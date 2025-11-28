import Style from "./errorHandler.module.css";

export default function NotFound({ children }) {
  return <p className={Style.notFound}>{children}</p>;
}
