import "./App.css";
// import { Button } from "tailwind/react";
import { useState } from "react";
import "./App.scss";

import LifeCycleClass from "./components/LifeCycleClass";
import LifeCycleFunc from "./components/LifeCycleFunc";
import PracLifeCycle01 from "./components/PracLifeCycle01";

function App() {
  const [number, setNumber] = useState(0);
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      <div className="box-border">
        <button
          className="items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          Plus
        </button>
        {/* <Button varient="filled">filled</Button> */}
        <button type="button" onClick={() => setIsShow(!isShow)}>
          {isShow ? "Off" : "On"}
        </button>
        {/* {isShow && <LifeCycleFunc number={number} />} */}
        {/* {isShow && <LifeCycleClass number={number} />} */}
        <PracLifeCycle01></PracLifeCycle01>
      </div>
    </>
  );
}

export default App;
