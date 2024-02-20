import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  console.log("Data in Cards component:", data); // Log data to ensure it's correctly received

  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.2 }}
      dragConstraints={reference}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
      className="relative w-52 h-72 rounded-[35px] border-slate-600 border bg-zinc-900/90 px-6 py-7 text-white overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm w-full h-28 font-semibold mt-5 leading-tight overflow-auto no-scrollbar">
        {data.description}
      </p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-center px-5 py-3 mb-3">
          <div className="flex items-center justify-between  w-full">
            <h5>{data.size}MB</h5>
            {data.tag ? (
              <IoIosCloseCircle className="cursor-pointer" size="1.2rem" />
            ) : (
              <LuDownload className="cursor-pointer" size="1.2rem" />
            )}
          </div>
        </div>
        {data.tag.isopen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold cursor-pointer">
              {data.tag.tagContent}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
