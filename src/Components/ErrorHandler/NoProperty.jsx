import Style from "./errorHandler.module.css";

export default function NoProperty({ children }) {
  return <h5 className={Style.noProperty}>{children}</h5>;
}
