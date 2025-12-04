import { FetchContext } from "../../Context/FetchContext";
import { useContext, useState } from "react";
import Loading from "../../Components/ErrorHandler/Loading";
import ErrorMessage from "../../Components/ErrorHandler/ErrorMessage";
import { useLocation } from "react-router-dom";
import PropertiesList from "./PropertiesList";
import PropertiesBanner from "./PropertiesBanner";
import NoProperty from "../../Components/ErrorHandler/NoProperty";

export default function Properties() {
  // inner search state
  const [innerSearch, setInnerSearch] = useState("");

  const query = new URLSearchParams(useLocation().search);

  // url
  const mainLocation = query.get("location") || "";
  const mainBedroom = query.get("bedroom") || "";
  const mainPrice = query.get("price") || "";
  const mainType = query.get("type") || "";

  // context
  const { propertyData, loading, error, visibleCount, setVisibleCount } =
    useContext(FetchContext);

  // message
  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!propertyData || Object.keys(propertyData).length === 0)
    return <NoProperty>No properties available at the moment</NoProperty>;

  // filter
  const propertiesList = propertyData?.properties?.filter((property) => {
    const priceValue =
      parseFloat(property?.price?.replace("AED", "").replace("M", "")) *
      1_000_000;

    const propertyBedroomValue = parseInt(property?.bedrooms);

    const selectedBedroom = mainBedroom?.replace("Bedroom", "").trim() || "";

    const matchLocation =
      !mainLocation ||
      property?.location.toLowerCase().includes(mainLocation.toLowerCase());

    const matchType =
      !mainType ||
      property?.propertyType.toLowerCase().includes(mainType.toLowerCase());

    const matchBedroom =
      !selectedBedroom ||
      selectedBedroom === "Any" ||
      propertyBedroomValue === parseInt(selectedBedroom);

    const matchPrice =
      !mainPrice ||
      mainPrice === "Any" ||
      (mainPrice === "AED < 10M" && priceValue < 10_000_000) ||
      (mainPrice === "AED 10M+" && priceValue >= 10_000_000);

    return matchLocation && matchType && matchBedroom && matchPrice;
  });

  // inner search filter
  const searchFilter =
    innerSearch.trim() === ""
      ? propertiesList
      : propertiesList?.filter((item) =>
          item.title.toLowerCase().includes(innerSearch.toLowerCase())
        );

  // load more
  const visibleProperties = searchFilter.slice(0, visibleCount);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <>
      {/* <PropertiesBanner /> */}
      <PropertiesList
        innerSearch={innerSearch}
        setInnerSearch={setInnerSearch}
        searchFilter={searchFilter}
        visibleProperties={visibleProperties}
        visibleCount={visibleCount}
        btnClicked={handleLoadMore}
      />
    </>
  );
}
