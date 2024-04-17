import "./Glimses.css";

import { motion } from "framer-motion";
import { fadeIn } from "./Varient";

import image1 from "../assets/gallery/1.jpg";
import vid1 from "../assets/KULL FINAL.mp4";
import vid2 from "../assets/Raahgir - Made with Clipchamp.mp4";
import vid3 from "../assets/SINGER TRYY REEL END.mp4";
import vid4 from "../assets/Standup_22- Made with Clipchamp.mp4";
import image8 from "../assets/gallery/8.jpg";
import image9 from "../assets/gallery/9.jpg";

import image11 from "../assets/gallery/11.jpg";

import image19 from "../assets/gallery/19.jpg";
import image22 from "../assets/gallery/22.jpg";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

function Gallery() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [pathname]);
  return (
    <main className="pt-28 bg-white dark:bg-black">
      <div className="gallary pb-8 flex justify-center items-center">
        <div className="containerr w-[80%]">
          <div>
            <h1 className="text-3xl md:text-5xl text-center font-bold text-black dark:text-white">
              Photo <span className="text-[#4d55ba]">Gallery</span>
            </h1>
          </div>
          <div className="grid-wrapper mt-10">
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="tall"
            >
              <img src={image1} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="big"
            >
              <img src={image1} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className=""
            >
              <img src={image22} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="tall"
            >
              <video src={vid4} alt="speaker" autoPlay loop muted loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="tall"
            >
              <video src={vid3} alt="speaker"  autoPlay loop muted loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className=""
            >
              <img src={image9} alt="speaker" loading="lazy" />
            </motion.div>

            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="tall"
            >
              <video src={vid2} alt="speaker"  autoPlay loop muted loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className="big"
            >
              <img src={image11} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className=""
            >
              <video src={vid1}  autoPlay loop muted alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className=""
            >
              <img src={image8} alt="speaker" loading="lazy" />
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView={"show"}
              className=""
            >
              <img src={image19} alt="speaker" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Gallery;
