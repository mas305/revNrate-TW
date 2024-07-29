/* eslint-disable */
import React, { useState } from "react";

import brand1 from "../assets/image1.jpg";

import Header from "../Componants/Header";
import Heading from "../Componants/Headnig";
import Title from "../Componants/Title";
import Footer from "../Componants/Footer";

import Stars from "../Componants/Stars";
import PrimaryButton from "../Componants/PrimaryButton";
import useBrands from "../Context/BrandsContext";

function AddReviewScreen() {
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const { allBrands, brandLoading } = useBrands();


  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPhoto(null);
      setPhotoPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Photo:", photo);
  };
  return (
    <div className="bg-white">
      <Header></Header>

      <div className="mx-24 mt-24 ">
        <div className="w-full py-12 px-36 h-60 ">
          <div
            className="w-full h-full rounded-2xl text-center flex justify-center items-center text-4xl font-bold"
            style={{
              backgroundImage: `url(${brand1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p>Share Your Experience</p>
          </div>
        </div>

        <hr className="h-0.5 my-2  bg-black" />

        {/* Content */}
        <div className="w-full h-full ">
          <div className="flex flex-col justify-center gap-8">
            <Title
              className="text-3xl font-semibold mt-9"
              title="which product would you like to review ? "
            ></Title>
            {/* product */}
            <div className="flex items-center gap-12">
              {/* <label className="text-3xl   " for="cars">Choose a car:</label> */}
              <select
                className="w-1/3 h-16 border-2 border-black text-xl p-4 rounded-lg"
                id="cars"
                name="carlist"
                form="carform"
              >
                <option value="volvo">Burger</option>
                <option value="saab">Pizza</option>
                <option value="opel">Broast</option>
                <option value="audi">Fish</option>
              </select>
            </div>
            {/* rate */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12  ">
              {/* col 1 */}
              <div className=" flex flex-col gap-8">
                <Heading className="text-start" value1="Quality"></Heading>
                <Stars></Stars>
              </div>

              {/* col 2 */}
              <div className=" flex flex-col gap-8">
                <Heading className="text-start" value1="Price"></Heading>
                <Stars></Stars>
              </div>

              {/* col 3 */}
              <div className=" flex flex-col gap-8">
                <Heading
                  className="text-start"
                  value1="Customer Service"
                ></Heading>
                <Stars></Stars>
              </div>

              {/* col 4 */}
              <div className=" flex flex-col gap-8">
                <Heading
                  className="text-start"
                  value1="Satisfaction Level"
                ></Heading>
                <Stars></Stars>
              </div>
            </div>

            {/* Recommend */}
            <div className="">
              <form action="/action_page.php">
                <Title
                  className="text-3xl font-semibold mt-9"
                  title="Would you recommend the product to your friends?"
                ></Title>
                <input
                  className="w-4 h-4"
                  type="radio"
                  id="OfCourse"
                  name="fav_language"
                  value="Of course!"
                />
                <label className="text-xl mx-3" htmlFor="OfCourse">
                  Of Course!
                </label>
                <br />
                <input
                  className="w-4 h-4"
                  type="radio"
                  id="never"
                  name="fav_language"
                  value="never"
                />
                <label className="text-xl mx-3" htmlFor="never">
                  Never
                </label>
                <br />
                <input
                  className="w-4 h-4"
                  type="radio"
                  id="maybe"
                  name="fav_language"
                  value="Maybe."
                />
                <label className="text-xl mx-3" htmlFor="maybe">
                  Maybe.
                </label>
              </form>
            </div>

            {/* Review */}
            <div>
              <Title
                className="text-3xl font-semibold mt-9"
                title="Review "
              ></Title>
              <form action="/action_page.php">
                <textarea
                  className="bg-orange-100 w-full p-4 rounded-xl mt-4"
                  id="w3review"
                  name="w3review"
                  rows="4"
                  maxLength={200}
                  placeholder="Write your opinion.."
                  cols="50"
                />
              </form>
            </div>
            {/* photo &  submit  */}
            <div className="flex flex-col items-center justify-center p-4">
              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <Title
                  className="text-3xl font-semibold mt-9"
                  title="Upload Photo"
                ></Title>
                <input
                  type="file"
                  id="photoUpload"
                  name="photoUpload"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="my-4"
                />
                {photoPreview && (
                  <div className="mb-4">
                    <img
                      src={photoPreview}
                      alt="Selected"
                      className="rounded-xl w-full h-auto"
                    />
                  </div>
                )}
                <div className="flex justify-center w-full">
                  <PrimaryButton
                    className="w-1/2 mt-8 text-xl font-bold"
                    name="Submit Review"
                  ></PrimaryButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default AddReviewScreen;
