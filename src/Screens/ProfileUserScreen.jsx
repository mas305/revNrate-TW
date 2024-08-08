/* eslint-disable */

import Footer from "../Componants/Footer";
import Header from "../Componants/Header";
import user from "../assets/user.png";
import review from "../assets/review.png";
import followers from "../assets/followers.png";
import heart from "../assets/heart.png";
import ReviewCard from "../Componants/Cards/ReviewCard";

function ProfileUserScreen() {
  return (
    <div className="">
      <Header></Header>

      <div className="flex flex-col justify-center items-center w-full mt-32 gap-y-4">
        <img className="w-60" src={user} alt="" />
        <h3 className="text-3xl font-bold text-orange-500">USER NAME</h3>
        <div className="flex gap-x-4">
          <div className="flex flex-col justify-center items-center">
            <img className="w-20" src={followers} alt="" />
            <h3 className="text-lg font-bold">Followers</h3>
            <h3 className="text-lg">2.1 K</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-20" src={heart} alt="" />
            <h3 className="text-lg font-bold">Likes</h3>
            <h3 className="text-lg ">2.1 K</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-20" src={review} alt="" />
            <h3 className="text-lg font-bold">Reviews</h3>
            <h3 className="text-lg ">100</h3>
          </div>
        </div>
      </div>

      <div className=" grid mt-12 mx-24  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ProfileUserScreen;
