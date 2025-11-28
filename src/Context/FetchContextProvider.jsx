import { useEffect, useState } from "react";
import { FetchContext } from "./FetchContext";

export default function FetchContextProvider({ children }) {
  const [propertyData, setPropertyData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // properties slice
  const [visibleCount, setVisibleCount] = useState(6);

  const fetchHandler = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/PropertiesData/Properties.json");
      if (!res.ok) throw new Error("Failed to fetch properties data");
      const data = await res.json();
      setPropertyData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <FetchContext.Provider
      value={{ visibleCount, setVisibleCount, propertyData, loading, error }}
    >
      {children}
    </FetchContext.Provider>
  );
}
