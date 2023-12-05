import React, { useEffect, useState } from "react";
import PostList from "./PostList";
import GetPostList from "./GetPostList";

function PracLifeCycle01() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {}, []);
  return (
    <>
      <div className="flex gap-2 items-center">
        <div className="text-2xl">mount button</div>
        <button
          type="button"
          className="inline-block rounded uppercase bg-blue-500 px-6 pb-2 pt-2.5 text-xl font-medium leading-normal text-white transition duration-150 ease-in-out
        shadow-[0_4px_9px_-4px_#3b71ca]  
        hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
        focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 
        active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
        dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
        dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
        dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          {isActive ? "Off" : "On"}
        </button>
      </div>
      {/* {isActive && <PostList />} */}
      {isActive && <GetPostList />}
    </>
  );
}

export default PracLifeCycle01;
