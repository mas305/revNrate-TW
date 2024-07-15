/* eslint-disable */

export default function Links(props) {
  return (
    <a
      href="{SignupScreen}"
      className="font-semibold leading-6 px-1 text-orange-500 hover:text-orange-600 cursor-pointer"
    >
      {props.value}
    </a>
  );
}
