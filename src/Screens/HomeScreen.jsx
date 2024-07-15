/* eslint-disable */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import RevRateLogo from "../assets/logo.svg";
import brand1 from "../assets/image1.jpg";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import category1 from "../assets/category1.jpg";
import category5 from "../assets/category5.jpg";
import category3 from "../assets/home.jpg";

import Heading from "../Componants/Headnig.jsx";
import CategoryItem from "../Componants/CategoryItem";
// import { useEffect, useState } from "react";
import { createContext, useState, useEffect, useContext } from "react";

import axios from "axios";
import { useRecoilState } from "recoil";
import categoriesState from "../Atoms/CategoriesAtoms.jsx";
import SearchBar from "../Componants/SearchBar.jsx";
import Header from "../Componants/Header.jsx";
import ReviewCard from "../Componants/Cards/ReviewCard.jsx";
import BrandBar from "../Componants/BrandBar.jsx";
import useCategories from "../Context/CategoriesContext.jsx";
import useBrands from "../Context/BrandsContext.jsx";
import OfferCard from "../Componants/Cards/OfferCard.jsx";
import Footer from "../Componants/Footer.jsx";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HomeScreen() {
  // const [categories, setCategories] = useRecoilState(categoriesState);
  const { allCategories, loading } = useCategories();
  const { allBrands, brandLoading } = useBrands();

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (loading || brandLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <div
        className=" bg-white "
        style={{
          backgroundImage: `url(${brand1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />

        <div className="relative isolate px-6 lg:px-8">
          <div className="grid grid-cols-1 grid-rows-2 align-bottom py-32 sm:py-48 ">
            <div className="sm:mb-8 sm:grid text-center justify-center">
              <h2 className="text-9xl text-shadow-lg font-bold tracking-tight text-orange-400 ">
                FOOD
              </h2>
            </div>
            <BrandBar />
          </div>
        </div>
      </div>

      {/* Category section */}
      <div className="mx-12 h-full">
        <Heading
          value1="Categories"
          value2="show all categories"
          to={"/categories"}
        />

        <div className="h-full w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9 mb-60">
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
        </div>
      </div>

      <div className="mx-12 h-full">
        <Heading value1="Brand" value2="show all Brands" to={"/categories"} />
        <div className="h-full w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9 mb-60">
          {allBrands && allBrands.length > 0 ? (
            allBrands.map((brand) => (
              <h3 key={brand.brandId}>{brand.brandName}</h3>
            ))
          ) : (
            <div>No Brands available</div>
          )}
        </div>
      </div>

      {/* Offers section */}
      <div className="mx-12 h-full">
        <Heading value1="Offers" value2="show all offers" to={"/categories"} />

        <div className="h-full w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9 mb-60">
          <OfferCard img={offer1}></OfferCard>
          <OfferCard img={offer2}></OfferCard>
          <OfferCard img={offer1}></OfferCard>
          <OfferCard img={offer2}></OfferCard>
          <OfferCard img={offer1}></OfferCard>
          <OfferCard img={offer2}></OfferCard>
        </div>
      </div>

      {/* Reviews section */}
      <div className="mx-12 h-full">
        <Heading value1="Popular Reviews" value2="show all Reviews" />

        <div className="h-full w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2  gap-9 mb-12">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>

      <Footer></Footer>

      {/* <div className="w-full h-screen"></div> */}
    </>
  );
}
