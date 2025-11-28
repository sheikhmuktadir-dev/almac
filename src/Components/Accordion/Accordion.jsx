import { useState } from "react";
import Style from "./accordion.module.css";
import { GoPlus } from "react-icons/go";
import { GoDash } from "react-icons/go";

export default function Accordion({ data }) {
  const [accordionShow, setAccordionShow] = useState(1);

  function accordionHandler(id) {
    setAccordionShow((prev) => (prev === id ? null : id));
  }

  return (
    <div className={Style.accordion}>
      {data.map((item, index) => {
        return (
          <div key={item.id || index} className={Style.accordionItem}>
            <button
              className={`${Style.accordionButton} ${
                item.id === accordionShow ? Style.accordionButtonActive : ""
              }`}
              onClick={() => accordionHandler(item.id)}
            >
              <span>{item.id === accordionShow ? <GoDash /> : <GoPlus />}</span>
              <span> {item.title}</span>
            </button>
            <div
              className={`${Style.accordionContent} ${
                item.id === accordionShow ? Style.accordionContentShow : ""
              }`}
            >
              <div className={Style.accordionContentInner}>
                <h5 className={Style.accordionPara}>{item.content}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
