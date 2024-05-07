import React, { useState,useRef } from "react";
import Card from "./Card";

const Foregorund = () => {
    const ref = useRef(null);

  const data = [
    {
      desc: "Hello, This is Dynamic Conditional Data rendering in ReactJs",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor:"blue"},
    },
    {
        desc: "Hello, I have got to improve this app for sure.",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: false, tagTitle: "Download Now", tagColor:"green"},
      },
      {
        desc: "Hello, I Have not used any major hooks or props as of now.",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Commit", tagColor:"purple"},
      },
  ];

  // useState();
  return (
    <div ref = {ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
        {data.map((item,index)=>(
          <Card data={item} refer = {ref}/>  
        ))}
    </div>
  );
};

export default Foregorund;
