import "./App.css";
import CssModule from "./components/CssModule";
import OriginCss from "./components/OriginCss";
import PracScssComp from "./components/PracScssComp";
import PracStyleComp from "./components/PracStyleComp";
import SassComponent from "./components/SassComponent";

import StyledComponent from "./components/StyledComponent";

function App() {
  return (
    <>
      <div className="App"></div>
      {/* <OriginCss></OriginCss> */}
      <hr />
      {/* <CssModule></CssModule> */}
      <hr />
      {/* <SassComponent></SassComponent> */}
      {/* <StyledComponent /> */}
      <PracStyleComp />
      <PracScssComp />
    </>
  );
}

export default App;
