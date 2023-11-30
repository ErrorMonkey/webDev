import React, { useState } from "react";

function Prac05() {
  const [active, setActive] = useState(true);

  const changeActive = () => {
    active !== true ? setActive(true) : setActive(false);
  };

  return (
    <>
      <div className="p-5 bg-stone-200">
        <div className="">Prac05</div>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-xl"
          onClick={changeActive}
        >
          {active === true ? "보여라" : "사라져라"}
        </button>
        <div className={`${active === true && "hidden"} text-xl font-black`}>
          안녕하세요
        </div>
      </div>
    </>
  );
}

export default Prac05;
