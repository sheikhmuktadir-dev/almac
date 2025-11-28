import Style from "./button.module.css";

export default function GrayButton({ children, url }) {
  return (
    <a href={url || "/"} target="_blank" className={Style.grayButton}>
      {children}
    </a>
  );
}
