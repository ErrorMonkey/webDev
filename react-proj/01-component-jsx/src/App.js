import "./App.css";
import "./components/FuncComponent";
// import FuncComponent from "./components/FuncComponent";
// import ClassComponent from "./components/ClassComponent";
// import FuncProsEx from "./components/FuncProsEx";
// import Section from "./components/Section";
// import ClassPropsEx from "./components/ClassPropsEx";
// import PracticeComp from "./components/PracticeComp";
// import PracticeComp2 from "./components/PracticeComp2";
import PracProps1 from "./components/PracProps1";
import PracProps2 from "./components/PracProps2";
import PracProps3 from "./components/PracProps3";

function App() {
  const valid = () => {
    console.log("콘솔 띄우기 성공!");
  };

  return (
    <div className="App">
      {/* <FuncComponent /> */}
      {/* <ClassComponent /> */}
      {/* <PracticeComp /> */}
      {/* <FuncProsEx content="리액트 프롭스" number={5} />
      <FuncProsEx />
      <ClassPropsEx title="SeSAC Class" content="클래스 프롭스" />

      <Section title="SeSAC 영역">
        <div>SeSAC 영역의 content입니다.</div>
      </Section>
      <Section title="코딩온 영역">
        <h5>신기하네</h5>
      </Section> */}
      {/* <PracticeComp2 age="20" gender="남성">
        <div>리더</div>
      </PracticeComp2>
      <PracticeComp2 name="홍길동" age="15" gender="남성">
        <div>크루</div>
      </PracticeComp2>
      <PracticeComp2 name="성춘향" age="15" gender="여성">
        <div>크루</div>
      </PracticeComp2> */}
      <PracProps1 food="라면" />
      <PracProps1 />
      <PracProps2
        title="나의 하루는 어쩌구 저쩌구"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      />
      <PracProps3 valid={valid} />
    </div>
  );
}

export default App;
