/* eslint-disable */
import classNames from 'classnames';

export default function PrimaryButton({ className, name }) {
  return (
    <div className='w-full'>
      <button
        type="submit"
        className={classNames(
          "flex w-full justify-center rounded-md bg-orange-500 px-3 py-4  leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          className
        )}
      >
        {name}
      </button>
    </div>
  );
}
