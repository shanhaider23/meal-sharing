import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getMeals = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setdata(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getMeals();
  }, [url]);
  return { data, isLoading };
};
