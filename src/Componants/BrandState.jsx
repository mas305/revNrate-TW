/* eslint-disable */
import classNames from "classnames";

function BrandState({ className, value }) {
  return (
    <div
      className={classNames(
        "w-full flex justify-center text-green-600 font-bold",
        className
      )}
    >
      <p>{value}</p>
    </div>
  );
}

export default BrandState;
