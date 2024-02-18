import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Cards({ data }) {
  console.log("Data in Cards component:", data); // Log data to ensure it's correctly received

  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 7 }}
      className="relative w-52 h-72 rounded-[35px] border-slate-600 border bg-zinc-900/90 px-8 py-10 text-white overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm font-semibold mt-5 leading-tight">
        {data.description}
      </p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-center px-8 py-3 mb-3">
          <div className="flex items-center justify-between mb-5 w-full">
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
