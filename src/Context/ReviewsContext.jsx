/* eslint-disable */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import useBrands from "./BrandsContext";

const ReviewsContext = createContext();

export function ReviewsProvider({ children }) {
  const [allReviews, setAllReviews] = useState([]);
  const [reviewLoading, setReviewLoading] = useState(true);
  const { allBrands, brandLoading } = useBrands();

  useEffect(() => {
    console.log("allBrands updated:", allBrands);
    if (!brandLoading) {
      getBrandReviews();
    }
  }, [allBrands, brandLoading]);

  const getBrandReviews = () => {
    if (!allBrands || !allBrands.brandId) {
      console.error("Brand ID is missing or invalid");
      setReviewLoading(false);
      return;
    }

    const url = `${
      import.meta.env.VITE_APP_MAIN_API_LINK
    }/api/reviews/brandreviews/${allBrands.brandId}`;
    console.log("Fetching reviews from URL:", url);

    axios({
      method: "get",
      url,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNzE5MzA5MjU2LCJleHAiOjIzMjQxMDkyNTZ9.tQ0ZvbLpxmyZZWZlsvwN_I4XdCiCemaYZYOBq3cBPRs",
      },
    })
      .then((response) => {
        console.log(response.data.Data);
        setAllReviews(response.data.Data);
      })
      .catch((error) => {
        console.error("Error fetching review:", error);
        setAllReviews([]);
      })
      .finally(() => {
        setReviewLoading(false);
      });
  };

  if (brandLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ReviewsContext.Provider value={{ allReviews, reviewLoading }}>
      {children}
    </ReviewsContext.Provider>
  );
}

export default function useReviews() {
  const context = useContext(ReviewsContext);
  if (!context) {
    throw new Error("useReviews must be used within a ReviewsProvider");
  }
  return context;
}
