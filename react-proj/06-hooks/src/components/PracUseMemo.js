import React, { useState, useMemo } from "react";

function PracUseMemo() {
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isToggle, setIsToggle] = useState(true);

  const toggle = () => {
    console.log("toggle");
    setIsToggle(!isToggle);
  };

  const searchTextNumber = useMemo(() => {
    console.log("useMemo");
    if (text === "") return 0;
    let textNumber = 0;
    let textArr = text.split(" ");
    for (let i = 0; i < textArr.length; i++) {
      if (textArr[i] === searchText) textNumber += 1;
    }
    return textNumber;
  }, [searchText, text]);

  return (
    <>
      <div>PracUseMemo</div>
      <input onChange={(e) => setText(e.target.value)} value={text} />
      <input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <h3>
        {searchText}의 빈도수: {searchTextNumber}
      </h3>
      <button onClick={() => toggle()}>{toggle ? "true" : "false"}</button>
    </>
  );
}

export default PracUseMemo;
