import { useState, useEffect } from "react";
import Layout from "../Layout";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { WordSample } from "../components/index";

function Home() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [inputWord, setInputWord] = useState("");
  const [loading, setLoading] = useState(false);

  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  /*   console.log(data[0].meanings[0].definitions[0].definition); */
  const handleSubmit = async () => {
    if (!inputWord) {
      return toast.error("Please enter a word");
    }
    try {
      setLoading(true);
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`);
      const data = await res.json();
      setData(data);
      setLoading(false);
      setError("");
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const mouse = (e) => {
    setCoordinates({ x: e.clientX, y: e.clientY });
  };

  const parent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
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
  const definition = data && data[0].meanings[0].definitions[0].definition;

  return (
    <>
      {loading && (
        <div className="size-20 bg-rose-500 absolute top-1/2 left-1/2 animate-spin "></div>
      )}
      <Layout>
        <div className="">
          <div onMouseMove={(e) => mouse(e)} className="container mx-auto text-center mt-28 ">
            <div className="flex gap-5 justify-center items-center px-10  relative">
              <input
                value={inputWord}
                onChange={(e) => setInputWord(e.target.value)}
                type="text"
                placeholder="Enter any word"
                className="px-10 py-5 text-xl rounded-full w-full lg:w-1/2 text-black outline-0  shadow-[0px_0px_5px_rgb(255,255,255)] focus:shadow-[0px_0px_15px_rgb(255,255,255)]"
                onKeyDown={handleKeyDown}
              />
            </div>
            <div>
              {Array.isArray(data) && (
                <div className="flex justify-center items-center  mt-20 flex-col px-5 text-2xl ">
                  <motion.div
                    key={definition}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    className="text-center lg:w-1/2 flex justify-center items-center">
                    {definition}
                  </motion.div>
                </div>
              )}
            </div>
            {!Array.isArray(data) && (
              <div className="flex mt-20 flex-col text-2xl">
                <h1>{data?.title}</h1>
                <p>{data?.message}</p>
              </div>
            )}
          </div>
          <WordSample />
        </div>
      </Layout>
    </>
  );
}

export default Home;
