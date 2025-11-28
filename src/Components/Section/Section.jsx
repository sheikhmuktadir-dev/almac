import Style from "./section.module.css";

export default function Section({ children, position }) {
  const sectionPosition = Style[position] || Style.sectionRelative;
  return (
    <div className={`${Style.section} ${sectionPosition}`}>{children}</div>
  );
}
