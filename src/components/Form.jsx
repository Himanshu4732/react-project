import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Cards from "./Cards";

function Form({ formData, setformData, setShow }) {
  const [desc, setdesc] = useState("");
  const [Size, setSize] = useState("");
  const [Tag, setTag] = useState(false);
  const [TagContent, setTagContent] = useState("");
  const [TagColor, setTagColor] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form...");
     const Data = {
      description: desc,
      size: Size,
      tag: { isopen: Tag, tagContent: TagContent, tagColor: TagColor },
    };
    console.log("Form data:", Data);
    setformData([...formData, Data]);

    console.log(formData)
    setdesc("");
    setSize("");
    setTag(false);
    setTagContent("");
    setFormSubmitted(true);
    setShow(false);
  };



  return (
    <>
      <div className="w-full h-screen absolute top-0 left-0 z-7 bg-zinc-600/60">
        <div className="absolute flex flex-col justify-center items-center px-3 py-8 rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 h-3/4 bg-zinc-900 z-10 text-white">
          <IoMdClose
            className="absolute top-7 right-7 text-red-600 cursor-pointer"
            size="2rem"
            onClick={() => 
                setShow(false)
            }
          />
          <h1 className="font-semibold text-3xl font-sans py-3 pb-5">
            NEW DOCUMENT
          </h1>
          <form className="w-4/5" onSubmit={handleSubmit}>
            <div className="py-2">
              <label>Description:</label>
              <input
                required
                type="text"
                value={desc}
                className="w-full text-black rounded-lg p-2 "
                placeholder="Enter your description"
                onChange={(e) => setdesc(e.target.value)}
              />
            </div>
            <div className="py-2">
              <label>File Size:</label>
              <input
                required
                type="number"
                value={Size}
                className="w-full text-black rounded-lg p-2"
                placeholder="Enter your filesize"
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            <div className="py-2">
              <label>Tags:</label>
              <input
                type="checkbox"
                value={Tag}
                className="checked:bg-green-500"
                onChange={(e) => setTag(e.target.checked)}
              />
            </div>
            <div className="py-2">
              <label>Tags Color:</label>
              <div className="flex gap-10">
                <div>
                  <label htmlFor="tag" className="px-3 text-blue-700">
                    Blue(
                  </label>
                  <input
                    type="checkbox"
                    value="blue"
                    className="checked:bg-blue-500"
                    onClick={(e) => setTagColor(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="tag" className="px-3 text-green-600 ">
                    Green(
                  </label>
                  <input
                    type="checkbox"
                    value="green"
                    className="checked:bg-green-600"
                    onClick={(e) => setTagColor(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="py-2">
              <label htmlFor="tagValue">Tag Value:-</label>
              <input
                required
                type="text"
                value={TagContent}
                className="w-full text-black rounded-lg p-2"
                placeholder="Enter tag value "
                onChange={(e) => setTagContent(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-center py-2">
              <button
                type="submit"
                className=" px-4 py-3 bg-zinc-950 transi active:bg-zinc-800 font-semibold text-zinc-300 rounded-lg"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
