import {
  AiFillGithub,
  AiOutlineUser,
  AiOutlineDownload,
  AiOutlineArrowRight,
  AiOutlinePushpin,
  AiFillChrome,
} from "react-icons/ai";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FaReact, FaDocker } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import MyPictureBig from "./assets/my-picture-1.png";
import MyAvatar from "./assets/my-picture-2.png";
import ExtensionImg1 from "./assets/coursera-extension-1.png";
import ExtensionImg2 from "./assets/coursera-extension-2.png";
import ExtensionImg3 from "./assets/coursera-extension-3.png";
import ProjectImg1 from "./assets/project-1.gif";
import ProjectImg2 from "./assets/project-2.gif";
import ProjectImg3 from "./assets/project-3.jpg";
import HomeFooter from "./blogs/home-footer";
import { Link } from "react-router-dom";
import { useState } from "react";
function Home() {
  const [isHoverTank, setHoverTank] = useState(false);
  const [isHoverEx, setHoverEx] = useState(false);
  return (
    <>
      <div
        id="home"
        className="snap-start grid grid-cols-1 md:grid-cols-2 mt-16"
      >
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
            <div className="font-serif font-extrabold text-8xl my-10">
              Hồ Tiến Đạt
            </div>
            <div className="flex gap-5 flex-col sm:flex-row w-10/12">
              <a
                target="_blank"
                href="https://firebasestorage.googleapis.com/v0/b/hotiendat-blog.appspot.com/o/CV-Ho-Tien-Dat.pdf?alt=media"
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
          className="font-montserrat text-4xl font-bold pt-32"
        >
          Things I focus on...
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-2 xl:gap-32 w-9/12 ">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 rounded-md m-5 shadow-md flex flex-col items-center">
            <div className="bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-400 rounded-full flex items-center justify-center w-32 h-32">
              <FaReact className="text-6xl " />
            </div>
            <div className="text-3xl p-7 font-montserrat font-semibold">
              ReactJs
            </div>
            <div className="text-center text-lg ml-5 mr-5 mb-5 font-karla">
              I liked Reactjs because of its component-based concept so I use it
              the most to build frontend for my projects.
            </div>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 rounded-md m-5 shadow-md flex flex-col items-center">
            <div className="bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-400 rounded-full flex items-center justify-center w-32 h-32">
              <SiDotnet className="text-6xl " />
            </div>
            <div className="text-3xl p-7 font-montserrat font-semibold">
              DotNet
            </div>

            <div className="text-center text-lg ml-5 mr-5 mb-5 font-karla">
              I'm more backend focus and love to work with DotNet as well as
              other backend tasks.
            </div>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 rounded-md m-5 shadow-md flex flex-col items-center">
            <div className="bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-400 rounded-full flex items-center justify-center w-32 h-32">
              <FaDocker className="text-6xl " />
            </div>
            <div className="text-3xl p-7 font-montserrat font-semibold">
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
                I'm Ho Tien Dat, a graduate software developer student from
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
                I also love doing open-source development, one of them is a
                published extension on Chrome web store made with Javascript
                with over 40.000+ users. It gives me a wonderful feeling of joy
                which I cannot explain in words.
              </p>
            </div>
          </div>
        </div>
        <div
          id="projects"
          className="flex font-montserrat text-4xl font-bold pt-5 justify-center items-center -skew-y-3"
        >
          <div>Personal project</div>
          <AiOutlinePushpin className="text-5xl ml-3" />
        </div>
        <div className="bg-amber-300 w-full mt-5 -skew-y-3 overflow-hidden">
          <div className="mx-auto max-w-7xl skew-y-3">
            <div className="flex justify-center pt-32 pb-10 gap-10">
              <div className="bg-gray-900 pb-5 h-[650px] w-[400px] text-white flex flex-col justify-end items-center hover:shadow-black hover:shadow-lg transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 shadow-md shadow-black">
                <img src={ProjectImg3} className="h-full object-cover" />
                <div className="text-2xl p-5 font-bold">
                  Personal blog management
                </div>
                <div className="text-md pb-5">A Fullstack Web App</div>
                <div className="p-5 text-xl">
                  (.NET, SQL Server, ReactJS, Docker)
                </div>
                <div className="flex gap-5">
                  <Link
                    to="blog"
                    className="text-2xl px-4 py-2 border-2 border-white hover:text-black hover:bg-white transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-125"
                  >
                    VISIT
                  </Link>
                  <a
                    href="https://github.com/HT-Dat/blogsite_client"
                    onClick={() => {
                      window.open("https://github.com/HT-Dat/blogsite_server");
                    }}
                    // onclick="window.open('https://github.com/HT-Dat/blogsite_client'); return true;"
                    // href="https://github.com/HT-Dat/blogsite_server"
                    className="text-2xl px-4 py-2 border-2 border-white hover:text-black hover:bg-white transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-125"
                  >
                    CODE
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div
                  onMouseOver={() => {
                    setHoverTank(true);
                  }}
                  onMouseOut={() => {
                    setHoverTank(false);
                  }}
                  className="w-80 h-96 bg-slate-200 hover:shadow-black hover:shadow-lg transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 shadow-md shadow-black/40"
                >
                  <img
                    src={ProjectImg2}
                    className="absolute hover:opacity-0 object-cover w-80 h-96 z-10 -hue-rotate-90 rotate-180"
                  />
                  <img
                    src={ProjectImg1}
                    className="object-cover h-full -hue-rotate-90 overflow-hidden rotate-180"
                  />
                  <div className="relative -top-20 z-30 h-0">
                    <div className="h-20 text-xl bg-gray-900 font-bold text-white flex items-center justify-center">
                      FLAT STEEL
                    </div>
                  </div>
                  <div
                    className={
                      "bg-gray-900 w-80 text-white shadow-lg " +
                      (isHoverTank ? "opacity-100" : "opacity-0")
                    }
                  >
                    <div className="flex flex-col gap-3 p-3 items-center">
                      <div className="text-center">
                        A multiplayer Unity game that can co-op up to 4 players
                        at the same time
                      </div>
                      <div className="flex gap-5">
                        <Link
                          to="https://github.com/HT-Dat/Unity-Flat-Steel"
                          className=" flex items-center justify-center text-lg px-3 py-1 border-2 border-white hover:text-black hover:bg-white transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-125"
                        >
                          Code <AiFillGithub className="text-2xl ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="w-80 h-96 hover:shadow-black hover:shadow-lg transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 shadow-md shadow-black/40"
                  onMouseOver={() => {
                    setHoverEx(true);
                  }}
                  onMouseOut={() => {
                    setHoverEx(false);
                  }}
                >
                  <img
                    src={ExtensionImg3}
                    className="absolute w-12 h-12 mt-8"
                  />
                  <img src={ExtensionImg2} />
                  <div className="text-xl font-bold flex justify-center items-center h-20 p-1 bg-gray-900 text-white w-full">
                    Coursera Get Shareable Link
                  </div>
                  <div
                    className={
                      "bg-gray-900 w-80 text-white shadow-lg " +
                      (isHoverEx ? "opacity-100" : "opacity-0")
                    }
                  >
                    <div className="flex flex-col gap-3 px-3 pb-3 items-center">
                      <div className="">
                        A simple yet useful extension for Coursera learners to
                        get links to your submission. Currently, the extension
                        is having 40.000+ users and keeps growing
                      </div>
                      <div className="flex gap-5">
                        <Link
                          to="https://chrome.google.com/webstore/detail/coursera-get-shareable-li/fbplppipepefackdlimggnjogpdamlhn"
                          className=" flex items-center justify-center text-lg px-1 py-1 border-2 border-white hover:text-black hover:bg-white transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-125"
                        >
                          Web store <AiFillChrome className="text-2xl ml-2" />
                        </Link>
                        <Link
                          to="https://github.com/HT-Dat/chrome-extension-coursera-getter"
                          className=" flex items-center justify-center text-lg px-1 py-1 border-2 border-white hover:text-black hover:bg-white transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-125"
                        >
                          Code <AiFillGithub className="text-2xl ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 h-60 w-[700px] text-xl text-justify font-karla">
                  <p className="flex h-full items-end">
                    As a passionate developer, I am continuously working on
                    various personal projects that allow me to explore new
                    technologies, hone my skills, and express my creativity. By
                    delving into my personal projects, you will gain insight
                    into my interests, my approach to problem-solving, and my
                    commitment to creating engaging and innovative applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-0">
            <div className="relative bg-white skew-y-6 h-96 w-full -top-72 -z-10"></div>
          </div>
        </div>

        <div className="w-full relative top-20">
          <HomeFooter />
        </div>
      </div>
    </>
  );
}

export default Home;
{
  /* <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
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
                <img
                  src={ExtensionImg3}
                  alt=""
                  className="hidden w-full h-52 object-contain rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
                />
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                  40,000+ users
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
              <div className="font-karla mt-4 leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 ">
                <p>
                  Made with Javascript, Coursera Get Shareable Link is a simple
                  yet useful extension for Coursera learners to get links to
                  your submission. This help speed up the grading process since
                  you can invite a mentor or other people to grade your
                  submission.
                </p>
                <p className="pt-2">
                  Currently, the extension is getting 40.000+ users and keeps
                  growing
                </p>
              </div> */
}
