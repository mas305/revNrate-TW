import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./Context/CategoriesContext.jsx";
import { BrandsProvider } from "./Context/BrandsContext.jsx";
import { ReviewsProvider } from "./Context/ReviewsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <CategoriesProvider>
          <BrandsProvider>
            <ReviewsProvider>
              <App />
            </ReviewsProvider>
          </BrandsProvider>
        </CategoriesProvider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
