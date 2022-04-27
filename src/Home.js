import React from "react";
import { AiOutlineDownload, AiOutlineArrowRight } from "react-icons/ai";
import { FaReact, FaDocker } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import MyPictureBig from "./assets/my-picture-1.png";
import MyAvatar from "./assets/my-picture-2.png";
function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll ">
      <div className="snap-start grid grid-cols-2 h-screen">
        <div className="grid content-center ">
          <div className="ml-20">
            <div className="text-amber-400 font-bold text-2xl">
              WEB DEVELOPER
            </div>
            <div className="font-extrabold font-serif text-8xl mt-10 mb-10">
              I'm Ho Tien Dat
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
      <div className="snap-start flex flex-col justify-center items-center">
        <div className="font-sans text-4xl font-bold pt-14 text-sky-900">
          Things I focus on...
        </div>
        <div className="grid grid-cols-3 gap-32 w-9/12 ">
          <div className="rounded-xl m-5 shadow-md flex flex-col items-center">
            <div className="bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-400 rounded-full flex items-center justify-center w-32 h-32">
              <FaReact className="text-6xl text-sky-900" />
            </div>
            <div className="text-3xl p-7 text-sky-900">ReactJs</div>
            <div className="text-center text-lg ml-5 mr-5 mb-5">
              I liked Reactjs because of its component-based concept so I use it
              the most to build frontend for my projects.
            </div>
          </div>
          <div className="rounded-xl m-5 shadow-md flex flex-col items-center">
            <div className="bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-400 rounded-full flex items-center justify-center w-32 h-32">
              <SiDotnet className="text-6xl text-sky-900" />
            </div>
            <div className="text-3xl p-7 text-sky-900">DotNet</div>

            <div className="text-center text-lg ml-5 mr-5 mb-5">
              I'm more backend focus and love to work with DotNet as well as
              other backend tasks.
            </div>
          </div>
          <div className="rounded-xl m-5 shadow-md flex flex-col items-center">
            <div className="bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-400 rounded-full flex items-center justify-center w-32 h-32">
              <FaDocker className="text-6xl text-sky-900" />
            </div>
            <div className="text-3xl p-7 text-sky-900">Docker</div>
            <div className="text-center text-lg ml-5 mr-5 mb-5">
              Helping me pack, ship, and run my application anywhere, I fell in
              love with Docker immediately and Dockerizing everything if
              possible.
            </div>
          </div>
        </div>
        <div className="bg-amber-300 h-96 w-screen -skew-y-3 mt-20 mb-20">
          <div className="flex items-center justify-center skew-y-3 h-full">
            <div className="border-4 bg-white rounded-full w-60 h-60 overflow-hidden">
              <img src={MyAvatar} className="object-center" />
            </div>
            <div className="w-7/12 pl-20 text-lg">
              <p className="pb-5">
                Hi, I'm Hồ Tiến Đạt, an undergraduate developer student from
                Vietnam. I have been working on web development for 3 years now,
                while still studying at university. Had my own project, coded
                mostly in Javascript and C#.
              </p>
              <p>
                Having finished the internship program at FPT Retail company
                with flying colors (9.8 in 10 total). In my short time there, I
                have already contributed to building a system that helps
                business analysts to send, distributing documents, procedures to
                employees at the shop
              </p>
              <p>
                I also love doing open source development, one of my them is a
                published extension on chrome web store made by Javascript with
                over 20k+ users. It gives me a wonderful feeling of achievement
                and joy which I cannot explain in words.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-amber-300 h-96 skew-y-3"></div>
      </div>

      {/* <div className="relative bg-amber-300 h-screen rotate-6 scale-125 w-screen overflow-hidden"></div> */}
    </div>
  );
}
export default Home;
