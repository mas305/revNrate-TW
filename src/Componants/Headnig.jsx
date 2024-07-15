/* eslint-disable */
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function Heading({ className, value1, value2, to, link }) {

  return (
    <div className={classNames("text-center my-8", className)}>
      <h1 className="lg:text-4xl md:text-2xl font-bold tracking-tight text-orange-400 sm:text-6xl">
        {value1}
      </h1>
      <Link to={to}> {value2}</Link>
      {link === "yes" && <span aria-hidden="true"> →</span>}

      {/* <a className="mt-6 text-lg leading-8 text-gray-600 hover:text-blue-500 underline cursor-pointer">
        {value2}
      </a> */}
    </div>
  );
}
