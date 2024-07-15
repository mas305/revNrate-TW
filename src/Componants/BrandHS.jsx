/* eslint-disable */
import RevRateLogo from "../assets/logo.svg";

function BrnadHS(props) {
  return (
    <div
      className="flex w-60 mx-2 rounded-lg"
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}

export default BrnadHS;
