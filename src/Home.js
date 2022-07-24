import React from "react";
import {
  AiFillGithub,
  AiOutlineUser,
  AiOutlineDownload,
  AiOutlineArrowRight,
  AiOutlinePushpin,
  AiFillChrome,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaReact, FaDocker } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import MyPictureBig from "./assets/my-picture-1.png";
import MyAvatar from "./assets/my-picture-2.png";
import ExtensionImg1 from "./assets/coursera-extension-1.png";
import ExtensionImg2 from "./assets/coursera-extension-2.png";
import ExtensionImg3 from "./assets/coursera-extension-3.png";
import Navbar from "./Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <div id="home" className="snap-start grid grid-cols-1 md:grid-cols-2">
        <div className="grid content-center font-montserrat h-screen">
          <div className="ml-20">
            <div className="text-amber-400 font-extrabold text-2xl">
              WEB DEVELOPER
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.facebook.com/Bolun06/"
                className="p-2 text-3xl text-amber-400 hover:text-black"
              >
                <BsFacebook />
              </a>

              <a
                href="https://github.com/HT-Dat"
                className="p-1 text-4xl text-amber-400 hover:text-black"
              >
                <AiFillGithub />
              </a>
            </div>
            <div className="text-3xl pt-10">Hello, I'm</div>
            <div className="font-serif font-extrabold text-8xl mb-10">
              Ho Tien Dat
            </div>
            <div className="flex gap-5 flex-col sm:flex-row w-10/12">
              <a
                target="_blank"
                href="https://hotiendat.com/public_assets/CV_SE151249_HO%20TIEN%20DAT.pdf"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-amber-200 duration-300 shadow-lg flex content-center bg-amber-300 p-5 font-bold"
              >
                <div>DOWNLOAD CV</div>
                <AiOutlineDownload className="h-full ml-1" />
              </a>
              <div className="cursor-pointer bg-white shadow-lg flex items-center p-3">
                <AiOutlineArrowRight />
                <a href="#focused-things" className="ml-1">
                  MORE ABOUT ME
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-amber-300 max-h-screen overflow-hidden">
          <img src={MyPictureBig} className="object-cover h-full min-w-max" />
        </div>
      </div>
      <div className="h-fit snap-start flex flex-col justify-center items-center">
        <div
          id="focused-things"
          className="font-montserrat text-4xl font-bold pt-32 text-sky-900"
        >
          Things I focus on...
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-2 xl:gap-32 w-9/12 ">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 rounded-xl m-5 shadow-md flex flex-col items-center">
            <div className="bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-400 rounded-full flex items-center justify-center w-32 h-32">
              <FaReact className="text-6xl text-sky-900" />
            </div>
            <div className="text-3xl p-7 text-sky-900 font-montserrat font-semibold">
              ReactJs
            </div>
            <div className="text-center text-lg ml-5 mr-5 mb-5 font-karla">
              I liked Reactjs because of its component-based concept so I use it
              the most to build frontend for my projects.
            </div>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 rounded-xl m-5 shadow-md flex flex-col items-center">
            <div className="bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-400 rounded-full flex items-center justify-center w-32 h-32">
              <SiDotnet className="text-6xl text-sky-900" />
            </div>
            <div className="text-3xl p-7 text-sky-900 font-montserrat font-semibold">
              DotNet
            </div>

            <div className="text-center text-lg ml-5 mr-5 mb-5 font-karla">
              I'm more backend focus and love to work with DotNet as well as
              other backend tasks.
            </div>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 rounded-xl m-5 shadow-md flex flex-col items-center">
            <div className="bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-400 rounded-full flex items-center justify-center w-32 h-32">
              <FaDocker className="text-6xl text-sky-900" />
            </div>
            <div className="text-3xl p-7 text-sky-900 font-montserrat font-semibold">
              Docker
            </div>
            <div className="text-center text-lg ml-5 mr-5 mb-5 font-karla">
              Helping me pack, ship, and run my application anywhere, I fell in
              love with Docker immediately and Dockerizing everything if
              possible.
            </div>
          </div>
        </div>
        <div id="about-me" className="bg-amber-300 -skew-y-3 mt-20 w-full">
          <div className="flex items-center justify-center flex-col md:flex-row skew-y-3 h-full p-10 gap-20">
            <div className="border-4 bg-white rounded-full w-60 h-60 overflow-hidden">
              <img src={MyAvatar} className="object-center" />
            </div>
            <div className="md:w-7/12 w-full text-lg text-justify font-karla">
              <p className="pb-5">
                Hi, I'm Hồ Tiến Đạt, an undergraduate developer student from
                Vietnam. I have been working on web development for 3 years now,
                while still studying at university. Had my own project, coded
                mostly in Javascript and C#.
              </p>
              <p className="pb-5">
                Having finished the internship program at FPT Retail company
                with flying colors (9.8 in 10 total). In my short time there, I
                have already contributed to building a system that helps
                business analysts to send, distributing documents, procedures to
                shop's employees
              </p>
              <p>
                I also love doing open source development, one of my them is a
                published extension on chrome web store made with Javascript
                with over 20k+ users. It gives me a wonderful feeling of
                achievement and joy which I cannot explain in words.
              </p>
            </div>
          </div>
        </div>
        <div
          id="projects"
          className="flex font-montserrat text-4xl font-bold pt-5 text-sky-900 justify-center items-center -skew-y-3"
        >
          <div>Personal project</div>
          <AiOutlinePushpin className="text-5xl ml-3" />
        </div>
        <div className="bg-amber-300 m-5 w-full -skew-y-3 grid grid-rows-1 place-items-center overflow-hidden">
          <div className="h-full w-fit py-6 px-4 bg-none sm:p-6 md:w-fit md:px-40 md:py-10 md:bg-amber-400">
            <div className="skew-y-3 max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
              <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl ">
                  Coursera Get Shareable Link
                </h1>
              </div>
              <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                <img
                  src={ExtensionImg2}
                  alt=""
                  className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                />
                <img
                  src={ExtensionImg1}
                  alt=""
                  className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                />
                {/* <img
                  src={ExtensionImg3}
                  alt=""
                  className="hidden w-full h-52 object-contain rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
                /> */}
              </div>
              <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                <dt className="sr-only">Reviews</dt>
                <dd className="text-indigo-600 flex items-center ">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    aria-hidden="true"
                    className="mr-1 stroke-current"
                  >
                    <path
                      d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>4.9</span>
                </dd>
                <dd className="flex items-center">
                  <svg
                    width="2"
                    height="2"
                    aria-hidden="true"
                    fill="currentColor"
                    className="mx-3 text-slate-300"
                  >
                    <circle cx="1" cy="1" r="1"></circle>
                  </svg>
                  <AiOutlineUser className="text-xl text-indigo-600 text-bold" />
                  30,000+ users
                </dd>
              </dl>
              <div className="flex items-center mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                <a
                  href="https://chrome.google.com/webstore/detail/coursera-get-shareable-li/fbplppipepefackdlimggnjogpdamlhn"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-700 duration-300 bg-sky-900 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg flex w-fit"
                >
                  Web store <AiFillChrome className="text-2xl ml-2" />
                </a>
                <a
                  href="https://github.com/HT-Dat/chrome-extension-coursera-getter"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300 bg-black text-white rounded-full py-2 px-2 ml-2"
                >
                  <AiFillGithub className="text-2xl" />
                </a>
              </div>
              <p className="font-karla mt-4 leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 ">
                Made with Javascript, Coursera Get Shareable Link is a simple
                yet useful extension for Coursera learners to get links to your
                submission. This help speed up the grading process since you can
                invite a mentor or other people to grade your submission.
                <p className="pt-2">
                  Currently, the extension is getting 30.000+ users and keeps
                  growing
                </p>
              </p>
            </div>
          </div>
          {/* <div className="w-[900px] h-[320px] m-20 skew-y-3">
            <div className="absolute w-[500px] h-80 bg-white rounded-lg shadow-3xl">
              <div className="w-10/12 pt-10 pl-10 text-lg font-karla">
                <p className="text-justify">
                  Made with Javascript, Coursera Get Shareable Link is a simple
                  yet useful extension for Coursera learners to get links to
                  your submission. This help speed up the grading process since
                  you can invite a mentor or other people to grade your
                  submission.
                </p>
                <p className="">
                  Currently, the extension is getting 20k+ users and keeps
                  growing
                </p>
                <div className="flex w-full">
                  <a
                    href="https://chrome.google.com/webstore/detail/coursera-get-shareable-li/fbplppipepefackdlimggnjogpdamlhn"
                    target="_blank"
                    className="flex items-center border-yellow-400 border-2 rounded-full h-14 p-5 m-5"
                  >
                    Chrome web store
                    <AiFillChrome className="text-2xl" />
                  </a>
                  <div className="border-yellow-400 border-2 rounded-full h-10"></div>
                </div>
              </div>
            </div>
            <div className="border-2 border-sky-900 overflow-hidden shadow-3xl mt-8 mr-9 mb-9 ml-[450px] absolute aspect-video h-64 bg-sky-900 rounded-lg">
              <img
                src={ExtensionImg}
                className="object-contain h-full w-full rounded-lg"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default Home;
