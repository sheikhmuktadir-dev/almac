import { FiSearch } from "react-icons/fi";
import Style from "./properties.module.css";

export default function TopSearch({
  innerSearch,
  setInnerSearch,
  searchFilter,
}) {
  return (
    <div className={Style.propertiesContentSearchPart}>
      <h4 className={Style.propertiesContentHeading}>Search</h4>
      <div className={Style.propertiesSearchArea}>
        <div className={Style.propertiesSearchIcon}>
          <FiSearch />
        </div>
        <input
          type="text"
          value={innerSearch}
          onChange={(e) => setInnerSearch(e.target.value)}
          placeholder="Search Properties By Name"
          className={Style.searchBox}
        />
      </div>
      <h6 className={Style.propertiesContentHeadingLength}>
        {searchFilter?.length || 0}
        <span>Properties</span>
      </h6>
    </div>
  );
}
