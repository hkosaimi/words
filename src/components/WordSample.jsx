import React from "react";
import { car, music, cinema, cosmology } from "../assets";
import { motion } from "framer-motion";

function WordSample() {
  return (
    <div className="flex mb-5 lg:mb-0 px-5 flex-col overflow-hidden lg:flex-row lg:fixed bottom-0 lg:items-end gap-10 lg:gap-5 w-full mt-20 lg:px-10">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        className="lg:w-[30%] relative  h-[500px] rounded-2xl">
        <img src={car} alt="car" className="object-cover w-full h-full rounded-2xl" />
        <div className="absolute flex flex-col justify-center gap-5 inset-0 bg-black/50 rounded-2xl p-10">
          <h1 className="text-3xl font-bold">Car</h1>
          <p className="text-xl  text-white/70 font-bold ">
            A wheeled vehicle that moves independently, with at least three wheels, powered
            mechanically, steered by a driver and mostly for personal transportation.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        className=" lg:w-[20%] relative h-[300px] bg-sky-500 rounded-lg">
        <img src={cinema} alt="car" className="object-cover rounded-lg w-full h-full" />
        <div className="absolute rounded-lg inset-0 bg-black/50 flex flex-col justify-center gap-5 px-10 ">
          <h1 className="text-3xl font-bold">Cinema</h1>
          <p className="text-lg  text-white/70 font-bold ">A movie theatre, a movie house</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        className="lg:w-[20%] relative h-[300px] bg-sky-500">
        <img src={cosmology} alt="car" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center gap-5 px-10 ">
          <h1 className="text-3xl font-bold">Cosmology</h1>
          <p className="text-lg  text-white/70 font-bold ">
            The study of the physical universe, its structure, dynamics, origin and evolution, and
            fate
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        className="  lg:w-[30%] relative  h-[500px] ">
        <img src={music} alt="car" className="object-cover  w-full h-full" />
        <div className="absolute inset-0  bg-black/50 flex flex-col justify-center gap-5 px-10">
          <h1 className="text-3xl font-bold">Music</h1>
          <p className="text-lg  text-white/70 font-bold ">
            A series of sounds organized in time, employing melody, harmony, tempo etc. usually to
            convey a mood
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default WordSample;
