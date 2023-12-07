import "./App.css";
import UseMemoEx from "./components/UseMemoEx";
import UseCallbackEx from "./components/UseCallbackEx";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import { useState } from "react";
import UseReducer from "./components/UseReducer";
import CustomHooksEx from "./components/CustomHooksEx";
import PracUseMemo from "./components/PracUseMemo";

function App() {
  const [postId, setPostId] = useState(0);

  return (
    <>
      <UseMemoEx></UseMemoEx>
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={postId} />
      <button onClick={() => setPostId(postId + 1)}>+1</button>
      <hr />
      <UseReducer />
      <hr />
      <CustomHooksEx />
      <hr />
      <PracUseMemo />
    </>
  );
}

export default App;
