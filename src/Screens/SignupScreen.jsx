/* eslint-disable */
// import HomeImg from "../assets/home.jpg";
import RevRateLogo from "../assets/logo.svg";
import gmailImage from "../assets/gmail.png";
import apple_logo from "../assets/apple-logo.png";
import facebook from "../assets/facebook.png";
import homeImage from "../assets/home.jpg";
import brand1 from "../assets/image1.jpg";
import PrimaryButton from "../Componants/PrimaryButton";
import Links from "../Componants/Links";
import TextInput from "../Componants/TextInput";
import { Link } from "react-router-dom";
export default function SignupScreen() {
  return (
    <>
      <div className="grid max-w-full min-h-screen grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center ">
        <div className="home__data flex flex-col items-center justify-center max-w-full mx-12 my-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-32 w-auto"
              src={RevRateLogo}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-orange-500 hover:text-orange-500">
              SIGN UP
            </h2>
          </div>

          <div className="mt-10 w-full lg:px-12">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-orange-500"
                >
                  Email address
                </label>

                <TextInput
                  id="email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                ></TextInput>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-orange-500"
                  >
                    Username
                  </label>
                  <div className="text-sm"></div>
                </div>
                <TextInput
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  required
                ></TextInput>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-orange-500"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-gray-600 hover:text-gray-800"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                ></TextInput>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-orange-500"
                  >
                    Phone Number
                  </label>
                </div>
                <TextInput
                  id="phone"
                  name="phone"
                  type="Number"
                  placeholder="Enter your phone number"
                  required
                ></TextInput>
              </div>
              <PrimaryButton name="SIGN UP"></PrimaryButton>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account ?
              <Link to="/login">
                <Links value="Login" />
              </Link>
            </p>
          </div>
        </div>
        <div
          className="home__img hidden sm:flex max-h-full"
          style={{
            backgroundImage: `url(${brand1})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        ></div>
      </div>
    </>
  );
}
