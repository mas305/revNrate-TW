/* eslint-disable */
// import HomeImg from "../assets/home.jpg";
import RevRateLogo from "../assets/logo1.png";
import gmailImage from "../assets/gmail.png";
import apple_logo from "../assets/apple-logo.png";
import facebook from "../assets/facebook.png";
import homeImage from "../assets/home.jpg";
import PrimaryButton from "../Componants/PrimaryButton";
import Links from "../Componants/Links";
import TextInput from "../Componants/TextInput";
import { Link } from "react-router-dom";
export default function SignupScreen() {
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
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              SIGN UP
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="user__name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  User name
                </label>
                <TextInput
                  id="user__name"
                  name="name"
                  type="text"
                  required
                ></TextInput>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                ></TextInput>
                {/* <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div> */}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  required
                ></TextInput>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="phone__number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                </div>
                <TextInput
                  id="phone__number"
                  name="phone__number"
                  type="number"
                  autoComplete="current-password"
                ></TextInput>
              </div>

              <PrimaryButton name="SIGN UP"></PrimaryButton>
              <p className="mt-10 text-center text-sm  text-gray-500">
                Already hava an account ?<Link to={'/login'}><Links value="login.."></Links></Link>
              </p>
            </form>
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
