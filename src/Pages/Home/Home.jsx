import Hero from "./Hero";
import Properties from "./Properties";
import Whyus from "./Whyus";
import { FetchContext } from "../../Context/FetchContext";
import { useContext } from "react";
import Loading from "../../Components/ErrorHandler/Loading";
import ErrorMessage from "../../Components/ErrorHandler/ErrorMessage";
import NoProperty from "../../Components/ErrorHandler/NoProperty";
import Media from "./Media";

export default function Home() {
  const { propertyData, loading, error } = useContext(FetchContext);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!propertyData || Object.keys(propertyData).length === 0)
    return <NoProperty>No properties available at the moment</NoProperty>;

  return (
    <>
      <Hero />
      <Whyus />
      <Properties property={propertyData || {}} />
      <Media />
    </>
  );
}
