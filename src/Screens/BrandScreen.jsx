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

function BrandScreen() {
  const { allBrands, brandLoading } = useBrands();

  const location = useLocation();
  const { brand } = location.state || {};

  if (brandLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="h-full ">
        <Header></Header>

        <img className="w-full h-530px" src={brand.photos} alt="" />
        {/* Brand Name & Logo  */}
        <div className="w-full h-72 flex -mt-32">
          <div className="w-1/2 h-full flex justify-start items-center pl-8  ">
            <div
              className="w-72 max-w-72 h-full rounded-full bg-white"
              style={{
                backgroundImage: `url(${brand.logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mx-4 mt-10 flex flex-col">
              <Heading
                className="text-orange-500 my-3"
                value1={brand.brandName}
              ></Heading>
              <div className="w-full flex  ">
                <BrandState value="open"></BrandState>
                <div className="flex items-center">
                  <p className="mx-2">4.9</p>
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

        <div className="grid h-screen grid-cols-3 mx-12 py-4 ">
          {/* col 1 */}
          <div className="grid col-span-2 ">
            <div className="w-full">
              <Title className="text-4xl font-bold" title="About"></Title>
              <hr className="h-1 my-2 bg-black" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem architecto harum eveniet. Assumenda, veritatis
                accusantium voluptatum dignissimos minus iure, quaerat
                consequatur facere at, quidem beatae eius magni dolorem
                asperiores aliquid.
              </p>
            </div>
          </div>
          {/* col 2 */}
          <div className="grid col-span-1 p-2 ">
            {/* row 1 : info */}
            <div className="h-530px w-full border-2 p-4 border-black ">
              <Heading value1="Info"></Heading>

              <div className="flex flex-col gap-20 px-12 py-10">
                {/* <div className="flex">
                  <i className="text-4xl mx-4">
                    <TbWorld />
                  </i>
                  <a
                    className="text-lg font-bold underline text-slate-600 hover:text-blue-900"
                    href=""
                  >
                    Phonesta (phonsta.vercel.app)
                  </a>
                </div> */}
              </div>
            </div>

            {/* row 2 : Rating */}
            {/* <div className="h-530px w-full bg-blue-400"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandScreen;
