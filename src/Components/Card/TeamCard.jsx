import Style from "./card.module.css";

export default function TeamCard({ data, index, expandIndex, setExpandIndex }) {
  return (
    <div
      onMouseOver={() => setExpandIndex(index)}
      onMouseLeave={() => setExpandIndex(null)}
      className={`${Style.teamCard} ${
        expandIndex === index ? Style.teamCardExpand : ""
      }`}
    >
      <img src={data.image} className={Style.teamCardImage} />
      <div className={Style.teamCardContent}>
        <h5>{data.name}</h5>
        <p>{data.position}</p>
      </div>
    </div>
  );
}
