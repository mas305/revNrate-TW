/* eslint-disable */

import React from "react";
import Footer from "../Componants/Footer";
import Header from "../Componants/Header";
import Heading from "../Componants/Headnig";
import ProductsCard from "../Componants/Cards/ProductsCard";
import brand2 from "../assets/brand2.jpg";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import product1 from "../assets/product1.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import PriceFilter from "../Componants/PriceFilter";
import Maps from "../Componants/Maps";
import useBrands from "../Context/BrandsContext";
import BrnadHS from "../Componants/BrandHS";

function SearchScreen() {
  const { allBrands, brandLoading } = useBrands();
  if (brandLoading) {
    return <div>Loading...</div>;
  }
  // console.log(allBrands);

  return (
    <div>
      <Header></Header>

      <section className="mx-24 mt-40 ">
        <Heading
          className="text-orange-500"
          value1="Top 15 Best Brand"
        ></Heading>

        <div className="w-full grid grid-cols-3 mt-10 gap-8">
          <div className="col-span-1 bg-slate-300 rounded-lg">
            <Heading className="text-orange-500 " value1="Filter"></Heading>
            <div className=" flex flex-col bg-slate-200 m-5 p-5 rounded-xl gap-9 ">
              <Heading className="text-black " value1="Price"></Heading>
              <PriceFilter></PriceFilter>
              <Maps className="h-full rounded-xl"></Maps>
            </div>

            <div></div>
          </div>
          <div className="col-span-2 grid grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="col-span-2 grid grid-cols-2 xl:grid-cols-3 gap-5">
              {allBrands && allBrands.length > 0 ? (
                allBrands.map((brand) => (
                  <ProductsCard key={brand.brandId} img={brand.logo} />
                ))
              ) : (
                <div>No Brands available</div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-24 mt-40 ">
        <Heading
          className="text-orange-500"
          value1="Top 15 Best Brand"
        ></Heading>

        <div className="w-full grid grid-cols-3 mt-10 gap-8">
          <div className="col-span-1 bg-slate-300 rounded-lg">
            <Heading className="text-orange-500 " value1="Filter"></Heading>
            <div className=" flex flex-col bg-slate-200 m-5 p-5 rounded-xl gap-9 ">
              <Heading className="text-black " value1="Price"></Heading>
              <PriceFilter></PriceFilter>
              <Maps className="h-full rounded-xl"></Maps>
            </div>

            <div></div>
          </div>
          <div className="col-span-2 grid grid-cols-2 xl:grid-cols-3 gap-5">
            <ProductsCard img={brand2}></ProductsCard>
            <ProductsCard img={brand3}></ProductsCard>
            <ProductsCard img={brand4}></ProductsCard>
            <ProductsCard img={brand2}></ProductsCard>
            <ProductsCard img={brand3}></ProductsCard>
            <ProductsCard img={brand4}></ProductsCard>
            <ProductsCard img={brand2}></ProductsCard>
            <ProductsCard img={brand3}></ProductsCard>
            <ProductsCard img={brand4}></ProductsCard>
            <ProductsCard img={brand2}></ProductsCard>
            <ProductsCard img={brand3}></ProductsCard>
            <ProductsCard img={brand4}></ProductsCard>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default SearchScreen;
