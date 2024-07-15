/* eslint-disable */
// import HomeImg from "../assets/home.jpg";
// import RevRateLogo from "../assets/logo1.png";
import RevRateLogo from "../assets/logo.svg";
import gmailImage from "../assets/gmail.png";
import apple_logo from "../assets/apple-logo.png";
import facebook from "../assets/facebook.png";
import homeImage from "../assets/home.jpg";
import PrimaryButton from "../Componants/PrimaryButton";
import SignupScreen from "./SignupScreen";
import Links from "../Componants/Links";
import TextInput from "../Componants/TextInput";
import { Link } from "react-router-dom";
export default function LoginScreen() {
  return (
    <>
      <div className="grid max-w-full min-h-screen  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center ">
        <div className="home__data max-w-full">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-32 w-auto"
              src={RevRateLogo}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-orange-500 hover:text-orange-500">
              LOGIN
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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

              <PrimaryButton name="LOGIN"></PrimaryButton>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't hava an account ?<Link to={'/signup'}><Links value="sign up"></Links></Link>
            </p>
            <div className="flex justify-center items-center">
              <div className="w-12 h-0.5 bg-slate-400"></div>
              <p className="m-3 text-slate-600">or login with</p>
              <div className="w-12 h-0.5 bg-slate-400"></div>
            </div>

            <div className="bg-white">
              <div className="mx-auto px-6 lg:px-8">
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 justify-center items-center gap-x-8 gap-y-10">
                  <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 cursor-pointer"
                    src={gmailImage}
                    alt="Transistor"
                    width={158}
                    height={48}
                  />
                  <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 cursor-pointer"
                    src={facebook}
                    alt="Reform"
                    width={158}
                    height={48}
                  />
                  <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 cursor-pointer"
                    src={apple_logo}
                    alt="Tuple"
                    width={158}
                    height={48}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="home__img max-h-full"
          style={{
            backgroundImage: `url(${homeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  );
}
