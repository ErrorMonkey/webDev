import React, { useState } from "react";

function Prac06() {
  const [index, setIndex] = useState("");
  const [bgColor, setBgColor] = useState("bg-slate-200");
  const [color, setColor] = useState("text-black");
  const [text, setText] = useState("");

  const imgArr = [
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg",
    "https://media.prospectmagazine.co.uk/prod/images/gm_preview/f60b0f018103-pepedankmeems420blazeitohbabyatripledankaestheticafkeepit100.jpg",
    "https://cdn.dribbble.com/userupload/8830283/file/still-fa8b62e03a6c5f5174b7600981ae7b0c.png?resize=400x300&vertical=center",
  ];
  const changeImg = (e) => {
    setIndex(e.target.value);
  };
  const changeBgColor = (e) => {
    setBgColor(e.target.value);
  };
  const changeColor = (e) => {
    setColor(e.target.value);
  };
  const changeText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div>Prac06</div>
      <div className="flex justify-center gap-2">
        <div>
          <label for="img">페페</label>
          <select name="img" value={index} onChange={changeImg}>
            <option value="0">머엉</option>
            <option value="1">묘함</option>
            <option value="2">나이스</option>
          </select>
        </div>
        <div>
          <label for="bgColor">배경색</label>
          <select name="bgColor" onChange={changeBgColor}>
            <option value="bg-gray-300">회색</option>
            <option value="bg-red-300">빨간색</option>
            <option value="bg-blue-300">파란색</option>
            <option value="bg-slate-700">검정색</option>
          </select>
        </div>

        <div>
          <label for="color">글자색</label>
          <select name="color" onChange={changeColor}>
            <option value="text-gray-500">회색</option>
            <option value="text-red-500">빨간색</option>
            <option value="text-blue-500">파란색</option>
            <option value="text-black">검정색</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col items-center mt-2">
        <input type="text" className="w-[10em]" onChange={changeText} />
        <img className="max-w-xs" src={imgArr[index]} alt="" />
        <div
          className={`${color} ${bgColor} p-2 mt-2 rounded-xl font-black text-xl`}
        >
          {text}
        </div>
      </div>
    </>
  );
}

export default Prac06;
