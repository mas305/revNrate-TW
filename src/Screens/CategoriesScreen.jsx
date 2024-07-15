/* eslint-disable */

import CategoryItem from "../Componants/CategoryItem";
import Header from "../Componants/Header";
import Heading from "../Componants/Headnig";
import useCategories from "../Context/CategoriesContext";

function CategoriesScreen() {
  const { allCategories, loading } = useCategories();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header></Header>
      <div className="mx-12 h-auto">
        <Heading className="mt-28" value1="Categories"></Heading>

        <div className="h-full w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9 ">
          {allCategories && allCategories.length > 0 ? (
            allCategories.map((category) => (
              <CategoryItem
                key={category.categoryId}
                name={category.categoryName}
                img={category.categoryPic}
              />
            ))
          ) : (
            <div>No categories available</div>
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

export default CategoriesScreen;
