/* eslint-disable */

import BrnadHS from "../Componants/BrandHS";
import CategoryItem from "../Componants/CategoryItem";
import Header from "../Componants/Header";
import Heading from "../Componants/Headnig";
import useBrands from "../Context/BrandsContext";
import useCategories from "../Context/CategoriesContext";

function OneCategoryScreen() {
  const { allBrands, brandLoading } = useBrands();
  console.log(allBrands);
  if (brandLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header></Header>
      <div className="mx-12 h-auto">
        <Heading
          className="mt-28 my-8 text-orange-500"
          value1="Categories"
        ></Heading>

        <div className="h-full w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9 ">
          {allBrands && allBrands.length > 0 ? (
            allBrands.map((brand) => (
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
          <CategoryItem></CategoryItem>
          <CategoryItem></CategoryItem>
          <CategoryItem></CategoryItem>
          <CategoryItem></CategoryItem>
          <CategoryItem></CategoryItem>
        </div>
      </div>
    </div>
  );
}

export default OneCategoryScreen;
