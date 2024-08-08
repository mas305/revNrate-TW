/* eslint-disable */

import { useLocation } from "react-router-dom";
import BrnadHS from "../Componants/BrandHS";
import CategoryItem from "../Componants/CategoryItem";
import Header from "../Componants/Header";
import Heading from "../Componants/Headnig";
import useBrands from "../Context/BrandsContext";
import useCategories from "../Context/CategoriesContext";
import { useEffect, useState } from "react";

function OneCategoryScreen() {
  const { allBrands, brandLoading } = useBrands();
  const { allCategories, loading } = useCategories();
  const location = useLocation();
  const { category } = location.state;

  const [categoryBrands, setCategoryBrands] = useState([]);

  useEffect(() => {
    if (allBrands && category) {
      const filterBrands = allBrands.filter(
        (brand) => brand.categoryId === category.categoryId
      );
      setCategoryBrands(filterBrands);
    }
  }, [allBrands, category]);

  //   console.log(allBrands);
  if (loading || brandLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header></Header>
      <div className="mx-12 h-auto">
        <Heading
          className="mt-28 my-8 text-orange-500"
          value1={category.categoryName}
        ></Heading>

        <div className="h-full w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9 ">
          {categoryBrands && categoryBrands.length > 0 ? (
            categoryBrands.map((brand) => (
              <BrnadHS
                key={brand.brandId}
                img={brand.logo}
                onClick={() =>
                  navigate(`/brand/${brand.brandId}`, { state: { brand } })
                }
              ></BrnadHS>
            ))
          ) : (
            <div>No Brands available</div>
          )}
          <CategoryItem></CategoryItem>
        </div>
      </div>
    </div>
  );
}

export default OneCategoryScreen;
