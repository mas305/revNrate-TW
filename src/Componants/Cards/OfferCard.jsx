/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router-dom";

const OfferCard = ({ img, offer, allBrands }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const brand = allBrands.find((brand) => brand.brandId === offer.brandId);
    if (brand) {
      navigate(`/brand/${offer.brandId}`, {
        state: { offer, brand },
      });
    }
  };

  return (
    <div className="offer-card cursor-pointer" onClick={handleClick}>
      <img className="rounded-lg" src={img} alt="Offer" />
      {/* Add other offer details as needed */}
    </div>
  );
};

export default OfferCard;
