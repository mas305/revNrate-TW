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

function App() {
  const [allCategories, setAllCategories] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/categories" element={<CategoriesScreen />} />
      </Routes>

      {/* <CategoriesScreen></CategoriesScreen> */}
      {/* <SignupScreen></SignupScreen> */}
      {/* <HS></HS> */}
      {/* <SearchBar></SearchBar> */}
      {/* <CardHover></CardHover> */}
      {/* <Search></Search> */}
      {/* <CategoriesProvider> */}
      {/* <AllCategories></AllCategories> */}
      {/* <MAS> */}
      {/* <MAS.Title></MAS.Title> */}
      {/* <MAS.Paragraph></MAS.Paragraph> */}
      {/* </MAS> */}
      {/* </CategoriesProvider> */}
      {/* <Animation></Animation> */}
    </>
  );
}

export default App;

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzE5OTQ0MTY4LCJleHAiOjIzMjQ3NDQxNjh9.k5BRZjlaDvWp7jLmegXsXiktqcl4YmdX-fzgCxR3oyE"
