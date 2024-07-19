/* eslint-disable */
import { useLocation } from "react-router-dom";
import category1 from "../assets/category1.jpg";
import RevRateLogo from "../assets/logo.svg";
import BrandState from "../Componants/BrandState";
import brand2 from "../assets/brand2.jpg";
import Header from "../Componants/Header";
import GoldenStar from "../assets/star.png";
import Heading from "../Componants/Headnig";
import useBrands from "../Context/BrandsContext";
import PrimaryButton from "../Componants/PrimaryButton";
import Title from "../Componants/Title";
import { IoCall } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import { TbWorld } from "react-icons/tb";
import { MdDoubleArrow } from "react-icons/md";

import OfferCard from "../Componants/Cards/OfferCard";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import ProgressBar from "../Componants/ProgressBar";
import ReviewCard from "../Componants/Cards/ReviewCard";

function BrandScreen() {
  const { allBrands, brandLoading } = useBrands();

  const location = useLocation();
  const { brand } = location.state || {};

  if (brandLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className=" bg-slate-100 ">
        <Header></Header>

        <img className="w-full h-530px md:h-96" src={brand.photos} alt="" />
        {/* Brand Name & Logo  */}
        <div className="w-full h-72 flex -mt-32">
          <div className="w-1/2 h-full flex justify-start items-center pl-8  ">
            <div
              className="lg:w-64 lg:h-64 md:w-48 md:h-48 rounded-full bg-white"
              style={{
                backgroundImage: `url(${brand.logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mx-4 mt-10  flex flex-col">
              <Heading
                className="text-orange-500 my-3 "
                value1={brand.brandName}
              ></Heading>
              <div className="w-full flex ">
                <BrandState value="open"></BrandState>
                <div className="flex items-center">
                  <p className="">4.9</p>
                  <img className="w-4 h-4" src={GoldenStar} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4"></div>
          <div className=" flex items-center justify-center w-1/4 ">
            <PrimaryButton className="mt-8" name="Add Review"></PrimaryButton>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-3 mx-12 py-4 ">
          {/* col 1 : about - items..etc */}
          <div className="grid col-span-2 md:col-span-3 grid-rows-4 gap-y-8  ">
            {/* About */}
            <div className="w-full">
              <Title className="lg:text-4xl sm:text-2xl font-bold" title="About"></Title>
              <hr className="h-1 my-2  bg-black" />
              <p className="lg:text-2xl sm:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem architecto harum eveniet. Assumenda, veritatis
                accusantium voluptatum dignissimos minus iure, quaerat
                consequatur facere at, quidem beatae eius magni dolorem
                asperiores aliquid.
              </p>
            </div>
            {/* Items */}
            <div className="w-full">
              <div className="flex items-center justify-between">
                <Title className="text-4xl font-bold" title="Offers"></Title>
                <div className="flex items-center text-lg underline">
                  <a href="">View More Items</a>
                  <i>
                    <MdDoubleArrow />{" "}
                  </i>
                </div>
              </div>
              <hr className="h-1 my-2 bg-black" />
              <div className="grid grid-cols-2  gap-10 ">
                <OfferCard img={offer1}></OfferCard>
                <OfferCard img={offer2}></OfferCard>
              </div>
            </div>
            {/* Offers */}
            <div className="w-full">
              <Title className="text-4xl font-bold" title="Offers"></Title>
              <hr className="h-1 my-2 bg-black" />
              <div className="grid grid-cols-2 gap-10 ">
                <OfferCard img={offer1}></OfferCard>
                <OfferCard img={offer2}></OfferCard>
              </div>
            </div>
            {/* Offers */}
            <div className="w-full">
              <Title className="text-4xl font-bold" title="Offers"></Title>
              <hr className="h-1 my-2 bg-black" />
              <div className="grid grid-cols-3 gap-10 ">
                <ReviewCard></ReviewCard> 
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
              </div>
            </div>
          </div>

          {/* col 2 : Info - Rating */}
          <div className="lg:grid w-full p-2 gap-12 md:hidden">
            {/* row 1 : info */}
            <div className="flex flex-col w-full  justify-center border-2 rounded-2xl  p-4 border-black ">
              <Heading value1="Info"></Heading>

              <div className="flex flex-col items-start w-full gap-20  py-10">
                <div className="flex gap-3">
                  <i className="text-3xl ">
                    <TbWorld />
                  </i>
                  <a
                    className="text-lg xl:text-2xl  font-semibold  underline text-slate-600 hover:text-blue-900"
                    href=""
                  >
                    https://karamelsham.org
                  </a>
                </div>
                <div className="flex gap-3">
                  <i className="text-3xl ">
                    <ImLocation2 />
                  </i>
                  <a
                    className="text-lg xl:text-2xl font-semibold  underline text-slate-600 hover:text-blue-900"
                    href=""
                  >
                    https://g.co/kgs/Krq42bs
                  </a>
                </div>
                <div className="flex gap-3">
                  <i className="text-3xl ">
                    <IoCall />
                  </i>
                  <a
                    className="text-lg xl:text-2xl font-semibold  underline text-slate-600 hover:text-blue-900"
                    href=""
                  >
                    01018604335
                  </a>
                </div>
              </div>
            </div>

            {/* row 2 : Rating */}
            <div className="flex flex-col  w-full  justify-center border-2 rounded-2xl  p-4 border-black gap-12">
              <Heading value1="Rating"></Heading>

              <div className="flex w-full justify-center gap-x-4 ">
                <img className="w-12" src={GoldenStar} alt="Golden Star" />
                <img className="w-12" src={GoldenStar} alt="Golden Star" />
                <img className="w-12" src={GoldenStar} alt="Golden Star" />
                <img className="w-12" src={GoldenStar} alt="Golden Star" />
                <img className="w-12" src={GoldenStar} alt="Golden Star" />
              </div>

              <div className="flex flex-col  w-full  border-2 rounded-2xl  p-4 border-black gap-9">
                <ProgressBar barName="Price" level="60%"></ProgressBar>
                <ProgressBar barName="Service" level="90%"></ProgressBar>
                <ProgressBar barName="Quality" level="20%"></ProgressBar>
                <ProgressBar
                  barName="Satisfaction Level"
                  level="50%"
                ></ProgressBar>
              </div>
              <PrimaryButton
                name="Add Review"
                className="text-2xl"
              ></PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandScreen;
