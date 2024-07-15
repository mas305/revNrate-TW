/* eslint-disable */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const BrandsContext = createContext();

export function BrandsProvider({ children }) {
  const [allBrands, setAllBrands] = useState([]);
  const [brandLoading, setBrandLoading] = useState(true); // Corrected typo

  useEffect(() => {
    axios({
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
      },
      method: "get",
      url: `${import.meta.env.VITE_APP_MAIN_API_LINK}/api/brands`,
    })
      .then((response) => {
        console.log(response.data.data);
        setAllBrands(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
        setAllBrands([]);
      })
      .finally(() => {
        setBrandLoading(false);
      });
  }, []);

  return (
    <BrandsContext.Provider value={{ allBrands, brandLoading }}>
      {children}
    </BrandsContext.Provider>
  );
}

export default function useBrands() { // Changed to `useBrands` for consistency
  const context = useContext(BrandsContext);
  if (!context) {
    throw new Error("useBrands must be used within a BrandsProvider");
  }
  return context;
}
