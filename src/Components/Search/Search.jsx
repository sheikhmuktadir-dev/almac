import Style from "./search.module.css";
import { searchFilters } from "../../Data/DataMain";
import DropDown from "../Dropdown/DropDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { BsDash } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";

export default function Search() {
  const { propertyType, location, price, bedrooms } = searchFilters || {};

  const [searchShow, setSearchShow] = useState(false);

  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isPropertyType, setIsPropertyType] = useState(
    propertyType?.[0]?.label || "Any"
  );
  const [isBedroom, setIsBedroom] = useState(bedrooms?.[0]?.label || "Any");
  const [isPrice, setIsPrice] = useState(price?.[0]?.label || "Any");
  const [isLocation, setIsLocation] = useState(location?.[0]?.label || "Any");

  const formSubmit = (e) => {
    e.preventDefault();

    const query = new URLSearchParams({
      type: isPropertyType === "Any" ? "" : isPropertyType,
      bedroom: isBedroom === "Any" ? "" : isBedroom,
      price: isPrice === "Any" ? "" : isPrice,
      location: isLocation === "Any" ? "" : isLocation,
    }).toString();

    navigate(`/properties?${query}`);
  };

  const Clear = () => {
    setIsPropertyType(propertyType[0]?.label);
    setIsBedroom(bedrooms[0]?.label);
    setIsPrice(price[0]?.label);
    setIsLocation(location[0]?.label);

    navigate("/properties"); // remove query params
  };

  return (
    <>
      <button
        className={Style.filterBtn}
        onClick={() => setSearchShow((prev) => !prev)}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <LuFilter />
          Filters
        </span>
        <span>{searchShow ? <BsDash /> : <GoPlus />}</span>
      </button>
      <form
        onSubmit={(e) => formSubmit(e)}
        className={`${Style.searchMain} ${
          searchShow ? Style.searchMainShow : ""
        }`}
      >
        <DropDown
          dropDownOpen={isDropdownOpen}
          setDropDownOpen={setIsDropdownOpen}
          dropDownCompare="propertytype"
          dropDownLabel="Property Type"
          dropDownMenuData={propertyType}
          dropDownMenu={isPropertyType}
          setDropDownMenu={setIsPropertyType}
        />

        <DropDown
          dropDownOpen={isDropdownOpen}
          setDropDownOpen={setIsDropdownOpen}
          dropDownCompare="bedroom"
          dropDownLabel="Bedrooms"
          dropDownMenuData={bedrooms}
          dropDownMenu={isBedroom}
          setDropDownMenu={setIsBedroom}
        />

        <DropDown
          dropDownOpen={isDropdownOpen}
          setDropDownOpen={setIsDropdownOpen}
          dropDownCompare="price"
          dropDownLabel="Price Range"
          dropDownMenuData={price}
          dropDownMenu={isPrice}
          setDropDownMenu={setIsPrice}
        />

        <DropDown
          dropDownOpen={isDropdownOpen}
          setDropDownOpen={setIsDropdownOpen}
          dropDownCompare="location"
          dropDownLabel="Location"
          dropDownMenuData={location}
          dropDownMenu={isLocation}
          setDropDownMenu={setIsLocation}
        />

        <div className={Style.searchBtnArea}>
          <button
            type="submit"
            className={Style.searchBtn}
            onClick={() => setSearchShow(false)}
          >
            Search Properties
          </button>
          <div className={Style.searchBtnClear} onClick={() => Clear()}>
            Clear All
          </div>
        </div>
      </form>
    </>
  );
}
