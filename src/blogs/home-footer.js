import { TbLetterZ } from "react-icons/tb";
import { BsLinkedin } from "react-icons/bs";
export default function HomeFooter() {
  return (
    <footer className="sticky bottom-0 left-0 z-20 w-full p-1 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-3">
      <span className="text-sm text-gray-500 sm:text-center ">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          hotiendat
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <div className="mr-4 hover:underline md:mr-6 container mx-auto flex flex-col md:flex-row items-center justify-center text-gray-600 text-sm md:space-x-8 space-y-1 md:space-y-0">
            <a
              href="mailto:hotiendat661@gmail.com"
              className="flex items-center space-x-1"
              target="_blank"
              title="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>hotiendat661@gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <div className="mr-4 hover:underline md:mr-6 container mx-auto flex flex-col md:flex-row items-center justify-center text-gray-600 text-sm md:space-x-8 space-y-1 md:space-y-0">
            <a
              href="https://zalo.me/0862533180"
              className="flex items-center space-x-1"
              target="_blank"
              title="Zalo"
            >
              <TbLetterZ className="text-white bg-gray-600 rounded-sm" />
              <span>zalo.me/0862533180</span>
            </a>
          </div>
        </li>
        <li>
          <div className="mr-4 hover:underline md:mr-6 container mx-auto flex flex-col md:flex-row items-center justify-center text-gray-600 text-sm md:space-x-8 space-y-1 md:space-y-0">
            <a
              href="www.linkedin.com/in/ht-dat/"
              className="flex items-center space-x-1"
              target="_blank"
              title="Zalo"
            >
              <BsLinkedin />
              <span>linkedin.com/in/ht-dat</span>
            </a>
          </div>
        </li>
      </ul>
    </footer>
  );
}
