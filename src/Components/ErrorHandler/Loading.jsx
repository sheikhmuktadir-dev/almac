import Style from "./errorHandler.module.css";

export default function Loading() {
  return (
    <div className={Style.scrollLoader}>
      <div className={Style.scrollLoaderInner}></div>
    </div>
  );
}
