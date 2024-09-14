import { useState, useEffect } from "react";
import { vector } from "../assets";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Message() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0, transition: { duration: 1 } }}
          exit={{ x: -500, transition: { duration: 0.5 } }}
          className="z-50 my-10 lg:my-0  w-[400px] relative overflow-hidden drop-shadow-[0px_0px_10px_rgba(255,255,255,0.7)]">
          <div className="relative">
            <img src={vector} className="w-[250px]" alt="" />
          </div>
          <motion.div className="absolute font-bold bg-white w-[200px] text-black px-5 py-2 rounded-lg top-0 right-0">
            Hello! if you like our project please like in GitHub{" "}
            <Link to="https://github.com/hkosaimi/words" className="underline text-rose-500">
              hkosaimi
            </Link>
            <button
              onClick={(e) => setShow(!show)}
              className="absolute hidden lg:block bg-zinc-100 px-[4px] rounded-full top-0 right-1">
              X
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Message;
