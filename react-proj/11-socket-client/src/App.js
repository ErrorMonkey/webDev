import './App.css';
import Chatting1 from './components/Chatting1';
import Chatting2 from './components/Chatting2';
import Chatting3 from './components/Chatting3';
import Chatting4 from './components/Chatting4';

// import Practice1 from './components/Practice1';

function App() {
  return (
    <>
      <div className="App">
        {/* 실습 1 */}
        {/* <Practice1></Practice1> */}

        {/* 실습 2, 3번 */}
        {/* <Chatting1 /> */}

        {/* <Chatting2 /> */}

        {/* 실습 4,5번 */}
        {/* <Chatting3 /> */}

        {/* room 구현 */}
        <Chatting4 />
      </div>
    </>
  );
}

export default App;
