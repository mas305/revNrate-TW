/* eslint-disable */

import { createContext, useEffect, useState } from "react";
import "./App.css";

import Animation from "./Componants/Animation";
import SearchBar from "./Componants/SearchBar";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import AllCategories from "./Componants/AllCategories";
import MAS from "./Componants/MAS";
import CategoriesProvider from "./Context/CategoriesContext"; // CategoriesContext,
import Search from "./Screens/Search";
import HS from "./Screens/HS";
import { Routes, Route } from "react-router-dom";
import CategoriesScreen from "./Screens/CategoriesScreen";
import BrandScreen from "./Screens/BrandScreen";
import BrandsScreen from "./Screens/BrandsScreen";
import BrandProductsScreen from "./Screens/BrandProductsScreen";
import BrandOffersScreen from "./Screens/BrandOffersScreen";
import BrandReviewsScreen from "./Screens/BrandReviewsScreen";
import AddReviewScreen from "./Screens/AddReviewScreen";
import SearchScreen from "./Screens/SearchScreen";
import OneCategoryScreen from "./Screens/OneCategoryScreen";

function App() {
  const [allCategories, setAllCategories] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/" element={<HomeScreen />} /> */}
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/categories" element={<CategoriesScreen />} />
        <Route path="/brand" element={<BrandScreen />} />
        <Route path="/brand/:brandId" element={<BrandScreen />} />
        <Route path="/getonecategory/:categoryId" element={<OneCategoryScreen />} />
        <Route path="/brandProducts" element={<BrandProductsScreen />} />
        <Route path="/brandOffers" element={<BrandOffersScreen />} /> 
        <Route path="/brandReviews/:brandId" element={<BrandReviewsScreen />} /> 
        <Route path="/brands" element={<BrandsScreen />} />
        <Route path="/addbrandreview/:brandId" element={<AddReviewScreen />} /> 
        <Route path="/search" element={<SearchScreen />} /> 
      </Routes>
    </>
  );
}

export default App;

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzE5OTQ0MTY4LCJleHAiOjIzMjQ3NDQxNjh9.k5BRZjlaDvWp7jLmegXsXiktqcl4YmdX-fzgCxR3oyE"
