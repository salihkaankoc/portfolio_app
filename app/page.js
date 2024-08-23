"use client"
import Image from "next/image";
import { FaFolderOpen } from "react-icons/fa";
import { FaLocationPin, FaUser } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
import { FaShoppingBasket } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { motion } from 'framer-motion';
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri";
import { SiDart } from "react-icons/si";
import { PiBowlFoodBold } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaLanguage } from "react-icons/fa6";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaClock } from "react-icons/fa";
import { SiQuizlet } from "react-icons/si";
import { IoLanguageSharp } from "react-icons/io5";
import { GiHabitatDome } from "react-icons/gi";
import { IoMail } from "react-icons/io5";
import { GiCargoShip } from "react-icons/gi";
import { SiAudiotechnica } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import pp from '../public/images/profilephoto.jpeg';
import { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedCounter from "./components/Counter";
// AnimatedBorderDiv bileşenini tanımlayın
const AnimatedBorderDiv = ({ children }) => {
  return (
    <motion.div
      className="relative w-full h-full border border-slate-600 rounded-lg"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
    >
      <div className="absolute inset-0 border-4 border-red-500 rounded-lg animate-spin-snake"></div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
export default function Home() {

  const titles = ["Full-Stack Developer", "Frontend Developer", "Backend Developer", "Flutter Developer"];
  const [titleIndex, setTitleIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [titles.length]);

  const sections = [
    { icon: <IoLocationSharp />, desc: 'Istanbul' },
    { icon: <FaLanguage />, desc: 'Turkish & English' },
    { icon: <PiBagSimpleFill />, desc: 'Software Developer' },
    { icon: <FaClock />, desc: 'GMT +03' },
    { icon: <FaCode />, desc: 'Coding' },

  ];
  return (
    <div className="w-full max-sm:m-0 h-screen bg-black flex items-center justify-center">
      <div className="w-full  max-sm:flex-col max-md:flex-col flex max-sm:ml-4 max-sm:mr-4 max-sm:ml-0 max-md:ml-0 ml-5 h-screen pt-5 pb-5">
        <div className="w-1/2 max-sm:w-full max-md:w-full flex font-poppins flex-col">
          <div className="flex w-full h-88 justify-between items-center">
            <div className="w-72  h-48 m-1 flex flex-col items-center justify-center rounded-lg bg-gradient-to-b from-slate-700 to-black border border-slate-600">
              <div className="flex">
                <AnimatedCounter endValue={60}/>
                <h3 className="text-violet-600 font-semibold text-4xl">+</h3>
              </div>
              <div className="w-4/5 mt-2 border border-slate-600 h-8 rounded-lg flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <FaFolderOpen className="text-violet-600" />
                  <h3 className="text-slate-300 ml-1 text-xs">Projects</h3>
                </div>
              </div>
            </div>
            <div className="w-72 h-48 m-1 flex flex-col items-center justify-center rounded-lg bg-gradient-to-b from-slate-700 to-black border border-slate-600">
              <div className="flex">
              <AnimatedCounter endValue={200}/>
                <h3 className="text-violet-600 font-semibold text-4xl">+</h3>
              </div>
              <div className="w-4/5 mt-2 max-sm:w-full border border-slate-600 h-8 rounded-lg flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <FaUser className="text-violet-600" />
                  <h3 className="text-slate-300 ml-1 text-xs">Happy Clients</h3>
                </div>
              </div>
            </div>
            <div className="w-72 h-48 m-1 flex flex-col items-center justify-center rounded-lg bg-gradient-to-b from-slate-700 to-black border border-slate-600">
              <div className="flex">
              <AnimatedCounter endValue={4}/>
                <h3 className="text-violet-600 font-semibold text-4xl">+</h3>
              </div>
              <div className="w-4/5 mt-2 border border-slate-600 h-8 rounded-lg flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <FaCode className="text-violet-600" />
                  <h3 className="text-slate-300 ml-1 text-xs">Experience</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-poppins w-full h-88 mt-2  rounded-lg bg-gradient-to-b from-slate-700 to-black border border-slate-600">
            <div className="flex h-full justify-end">
              <div className="w-40 h-10 cursor-pointer hover:scale-105 bg-slate-800 text-white m-4 rounded-lg flex items-center justify-center">
                <a href="/cv.pdf" download="cv">Download</a>
                <MdSaveAlt className="text-white ml-1 text-sm" />
              </div>
            </div>
            <div className="flex w-full ml-5 items-center">
              <div className="w-24 h-24 rounded-lg object-cover">
                <Image key="pp" className="rounded-lg" src={pp} objectFit="cover" />
              </div>
              <div className="flex  m-2 font-poppins flex-col">
                <div className="w-[150px] pl-2 pr-2 border border-slate-600 h-8 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 rounded-lg bg-green-400"></div>
                  <h3 className="text-white ml-1 text-sm">Available to work</h3>
                </div>
                <h1 className="text-white mt-2 text-md">Salih Kaan Koç</h1>
                <div className="flex mt-2 items-center">
                  <h1 className="text-white  text-md">I'am a</h1>
                  <h1 className="text-violet-600 font-semibold text-md ml-1">{titles[titleIndex]}</h1>
                </div>

              </div>

            </div>
            <div className="flex grid grid-cols-3 max-sm:grid-cols-2 pl-5 pr-5 w-full font-poppins justify-between gap-2">
              {sections.map((sec, i) => (
                <div key={i} className="w-full border border-slate-600 h-8 rounded-lg flex items-center justify-center">
                  <div className="text-violet-600">{sec.icon}</div>
                  <h3 className="text-white ml-1 text-sm">{sec.desc}</h3>
                </div>
              ))}
            </div>
            <div className="flex pb-5 items-center justify-center">
              <a href="salihkaaankoc@gmail.com" className="w-11/12 h-10 cursor-pointer hover:scale-105 bg-slate-800 text-white mt-5 rounded-lg flex items-center justify-center">
                <IoMail className="text-white text-sm" />
                <h3 className="ml-1">Email me</h3>
              </a>
            </div>

          </div>
        </div>
        <div className="w-1/2 max-md:w-full max-md:flex-col max-md:ml-0 max-sm:w-full pt-1 ml-2 max-sm:ml-0 font-poppins max-sm:flex-col flex">
          <div className="w-2/4 max-md:mt-5  max-md:w-full max-sm:mt-5 max-sm:w-full  pt-10 h-[450px] rounded-lg bg-gradient-to-b from-slate-700 to-black border border-slate-600">
            <div className="flex mt-2 items-center justify-center">
              <PiBagSimpleFill className="text-violet-600" />
              <h3 className="text-center ml-2 text-slate-300">My Projects</h3>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-5">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <SiQuizlet className="text-white" />
                </div>
                <h3 className="text-white text-xs">Quizzr - A quiz app for Android</h3>
              </div>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-2">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <IoLanguageSharp className="text-white" />
                </div>
                <h3 className="text-white text-xs">Worditory - English learning application</h3>
              </div>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-2">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <GiHabitatDome className="text-white" />
                </div>
                <h3 className="text-white text-xs">Habit Together - An online habit tracking app</h3>
              </div>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-2">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <GiCargoShip className="text-white" />
                </div>
                <h3 className="text-white text-xs">Pikargom - Ship to all over the world!</h3>
              </div>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-2">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <SiFuturelearn className="text-white" />
                </div>
                <h3 className="text-white text-xs">Youthink - Learning management system</h3>
              </div>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-2">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <FaShoppingBasket className="text-white" />
                </div>
                <h3 className="text-white text-xs">Mopaş - E-Commerce app</h3>
              </div>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-2">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <PiBowlFoodBold className="text-white" />
                </div>
                <h3 className="text-white text-xs">Sofist - City & restaurant guide</h3>
              </div>
            </div>
          </div>
          <div className="w-2/5  max-md:w-full  max-md:mt-5 max-sm:w-full    max-sm:mt-5 pt-10 rounded-lg h-[600px] ml-2 bg-gradient-to-b from-slate-700 to-black border border-slate-600">
            <div className="flex mt-2 items-center justify-center">
              <SiAudiotechnica className="text-violet-600" />
              <h3 className="text-center ml-2 text-slate-300">Technologies</h3>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-5">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <FaHtml5 className="text-orange-500" />
                </div>
                <h3 className="text-white text-xs">HTML</h3>
              </div>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-2">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <FaCss3Alt className="text-blue-500" />
                </div>
                <h3 className="text-white text-xs">CSS</h3>
              </div>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-2">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <IoLogoJavascript className="text-yellow-500" />
                </div>
                <h3 className="text-white text-xs">Javascript</h3>
              </div>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-2">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <FaReact className="text-blue-400" />
                </div>
                <h3 className="text-white text-xs">React</h3>
              </div>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-2">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <RiTailwindCssFill className="text-blue-400" />
                </div>
                <h3 className="text-white text-xs">Tailwind CSS</h3>
              </div>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-2">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <FaNodeJs className="text-green-400" />
                </div>
                <h3 className="text-white text-xs">Node.js</h3>
              </div>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-2">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <GrMysql className="text-blue-700" />
                </div>
                <h3 className="text-white text-xs">MySQL</h3>
              </div>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-2">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <DiMongodb className="text-green-700" />
                </div>
                <h3 className="text-white text-xs">MongoDB</h3>
              </div>
            </div>
            <div className="flex-col pl-5 pr-5 items-center justify-center font-poppins mt-2">
              <div className="h-10 flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <RiFlutterFill className="text-blue-400" />
                </div>
                <h3 className="text-white text-xs">Flutter</h3>
              </div>
            </div>
            <div className="flex-col max-sm:pb-20 pl-5 pr-5 items-center justify-center font-poppins mt-2">
              <div className="h-10  flex items-center pl-2 pr-2 w-full border border-slate-600 rounded-lg">
                <div className="rounded-lg w-8 h-8 flex items-center justify-center">
                  <SiDart className="text-blue-400" />
                </div>
                <h3 className="text-white text-xs">Dart</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="fixed w-full flex justify-center bottom-0">
        <div className="w-1/5 max-md:w-3/4 max-sm:w-3/4 max-sm:pl-12 max-sm:pr-12 pl-5 pr-5 h-12 flex items-center justify-between rounded-lg bg-gradient-to-b from-slate-700 to-black border border-slate-600">
          <Link target="_blank" href="https://instagram.com/salihkaankoc" >
            <div className="flex hover:scale-105 cursor-pointer items-center justify-center rounded-lg w-8 h-8 border border-slate-700">
              <FaInstagram className="text-violet-600" />
            </div>
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/salih-kaan-ko%C3%A7/" >
            <div className="flex hover:scale-105 cursor-pointer items-center justify-center rounded-lg w-8 h-8 border border-slate-700">
              <FaLinkedin className="text-violet-600" />
            </div>
          </Link>
          <Link target="_blank" href="https://github.com/salihkaankoc" >
            <div className="flex hover:scale-105 cursor-pointer items-center justify-center rounded-lg w-8 h-8 border border-slate-700">
              <FaGithub className="text-violet-600" />
            </div>
          </Link>
          <Link target="_blank" href="https://medium.com/@salihkaaankoc" >
            <div className="flex hover:scale-105 cursor-pointer items-center justify-center rounded-lg w-8 h-8 border border-slate-700">
              <FaMediumM className="text-violet-600" />
            </div>
          </Link>
          <Link target="_blank" href="https://www.youtube.com/@codingCoo" >
            <div className="flex hover:scale-105 cursor-pointer items-center justify-center rounded-lg w-8 h-8 border border-slate-700">
              <FaYoutube className="text-violet-600" />
            </div>
          </Link>
        </div>
      </div>

    </div>
  );
}
