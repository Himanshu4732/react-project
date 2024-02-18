import React from 'react'

function Background() {
  return (
    <>
    <div className=' w-full h-screen z-[3]'>
    {" "}
    <div className=" w-full absolute top-[5%] py-10 font-semibold text-xl text-zinc-600 flex justify-center">
      Documents
    </div>
    <h1 className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 font-semibold text-[13vw] leading-none tracking-tighter">
      Docs.
    </h1>
  </div>
  </>
  )
}

export default Background