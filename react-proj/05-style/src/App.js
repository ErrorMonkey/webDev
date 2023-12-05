import "./App.css";
import CssModule from "./components/CssModule";
import OriginCss from "./components/OriginCss";
import SassComponent from "./components/SassComponent";

function App() {
  return (
    <>
      <div className="App"></div>
      <OriginCss></OriginCss>
      <hr />
      <CssModule></CssModule>
      <hr></hr>
      <SassComponent></SassComponent>
    </>
  );
}

export default App;
