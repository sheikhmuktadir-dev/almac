import Style from "./dropdown.module.css";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

export default function DropDown({
  dropDownOpen = null,
  setDropDownOpen,
  dropDownCompare = "",
  dropDownLabel = "",
  dropDownMenuData = [],
  dropDownMenu = "",
  setDropDownMenu,
}) {
  const dropDownHandler = (dropItem) => {
    setDropDownOpen((prev) => (prev === dropItem ? null : dropItem));
  };

  return (
    <div className={Style.dropDown}>
      <div
        className={Style.dropDownButton}
        onClick={() => dropDownHandler(dropDownCompare)}
      >
        <div className={Style.dropDownLabel}>{dropDownLabel}</div>
        <div className={Style.dropDownButtonFlex}>
          <span>{dropDownMenu}</span>
          <span>
            {dropDownOpen === dropDownCompare ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </span>
        </div>
      </div>

      <div
        className={`${Style.dropDownMenu} ${
          dropDownOpen === dropDownCompare ? Style.dropDownMenuShow : ""
        }`}
      >
        <ul className={Style.dropDownMenuList}>
          {dropDownMenuData.map((item, index) => {
            return (
              <li
                key={item?.label || index}
                className={Style.dropDownMenuItem}
                onClick={() => {
                  setDropDownMenu(item?.label);
                  setDropDownOpen(null);
                }}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
