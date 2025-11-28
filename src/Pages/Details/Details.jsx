import { useParams } from "react-router-dom";
import { FetchContext } from "../../Context/FetchContext";
import { useContext } from "react";
import Loading from "../../Components/ErrorHandler/Loading";
import ErrorMessage from "../../Components/ErrorHandler/ErrorMessage";
import NoProperty from "../../Components/ErrorHandler/NoProperty";
import DetailsBanner from "./DetailsBanner";
import DetailsList from "./DetailsList";

export default function Details() {
  const { url } = useParams();

  const { propertyData, loading, error } = useContext(FetchContext);

  // message
  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!propertyData || Object.keys(propertyData).length === 0)
    return <NotFound>No properties available at the moment</NotFound>;

  const data = propertyData?.properties?.find((item) => item.url === url);

  if (!data) return <NoProperty>No properties available</NoProperty>;

  return (
    <>
      <DetailsBanner data={data} />
      <DetailsList data={data} />
    </>
  );
}
