import React from "react";
import {
  AiOutlineDownload,
  AiOutlineArrowRight,
  AiOutlinePushpin,
} from "react-icons/ai";
import { FaReact, FaDocker } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import MyPictureBig from "./assets/my-picture-1.png";
import MyAvatar from "./assets/my-picture-2.png";
import ExtensionImg from "./assets/coursera-extension.png";
import Navbar from "./Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <div className="snap-start grid grid-cols-2 h-screen ">
        <div className="grid content-center font-montserrat">
          <div className="ml-20">
            <div className="text-amber-400 font-extrabold text-2xl">
              WEB DEVELOPER
            </div>
            <div className="text-3xl pt-10">Hello, I'm</div>
            <div className="font-serif font-extrabold text-8xl mb-10">
              Ho Tien Dat
            </div>
            <div className="flex">
              <div className="cursor-pointer shadow-lg flex content-center bg-amber-300 p-5 font-bold">
                <div>DOWNLOAD CV</div>
                <AiOutlineDownload className="h-full ml-1" />
              </div>
              <div className="cursor-pointer bg-white shadow-lg flex items-center ml-10 p-3">
                <AiOutlineArrowRight />
                <div className="ml-1">MORE ABOUT ME</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-amber-300 max-h-screen overflow-hidden">
          <img src={MyPictureBig} className="object-cover h-full min-w-max" />
        </div>
      </div>
      <div className="h-fit snap-start flex flex-col justify-center items-center">
        <div className="font-montserrat text-4xl font-bold pt-32 text-sky-900">
          Things I focus on...
        </div>
        <div className="grid grid-cols-3 gap-32 w-9/12 ">
          <div className="rounded-xl m-5 shadow-md flex flex-col items-center">
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
          <div className="rounded-xl m-5 shadow-md flex flex-col items-center">
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
          <div className="rounded-xl m-5 shadow-md flex flex-col items-center">
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
        <div className="bg-amber-300 h-96 -skew-y-3 mt-20 w-full">
          <div className="flex items-center justify-center skew-y-3 h-full">
            <div className="border-4 bg-white rounded-full w-60 h-60 overflow-hidden">
              <img src={MyAvatar} className="object-center" />
            </div>
            <div className="w-7/12 pl-20 text-lg text-justify font-karla">
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
        <div className="inline-flex font-montserrat text-4xl font-bold pt-5 text-sky-900 justify-center -skew-y-3">
          Personal projects
          <AiOutlinePushpin className="text-5xl ml-3" />
        </div>
        <div className="bg-amber-300 m-5 w-full -skew-y-3 grid grid-rows-1 place-items-center">
          <div className="w-[900px] h-[320px] m-20 skew-y-3">
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
              </div>
            </div>
            <div className="border-2 border-sky-900 overflow-hidden shadow-3xl mt-8 mr-9 mb-9 ml-[450px] absolute aspect-video h-64 bg-sky-900 rounded-lg">
              <img
                src={ExtensionImg}
                className="object-contain h-full w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
