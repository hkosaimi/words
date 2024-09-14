import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { motion } from "framer-motion";

function Header() {
  const { pathname } = useLocation();

  const arr = ["W", "O", "R", "D", "S"];

  const parent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <div className="flex  justify-around py-5 text-lg lg:text-2xl">
      <div className="  text-center ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={parent}
          style={{ fontFamily: "Zen Tokyo Zoo" }}
          className="flex justify-center">
          {arr.map((x) => (
            <motion.div variants={child}>{x}</motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex  gap-5 lg:gap-10 ">
        <Link
          to="/"
          className={clsx(
            "text-white/70",
            pathname === "/" && " text-white border-b-4 border-red-500"
          )}>
          Home
        </Link>
        <Link
          to="/about"
          className={clsx(
            "text-white/70",
            pathname === "/about" && "text-white border-b-4 border-red-500"
          )}>
          About
        </Link>
        <Link
          to="/contact"
          className={clsx(
            "text-white/70",
            pathname === "/contact" && "text-white border-b-4 border-red-500"
          )}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
