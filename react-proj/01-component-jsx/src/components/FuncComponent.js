import image from "../logo.svg";

const FuncComponent = () => {
  const text = "hello?";
  const name = "lily";
  const style = {
    fontSize: "32px",
    backgroundColor: "darkorange",
  };

  const ifRenderTest = () => {
    if (name === "lily") {
      return "안녕하세요!";
    } else if (name === "richard") {
      return "안녕하세요...";
    } else {
      return "누구세요?";
    }
  };

  return (
    <>
      {/* {1. 하나의 태그로 감싸고 return} */}
      <div>함수형 컴포넌트입니다.</div>
      <div>함수형 컴포넌트입니다.</div>

      {/* 2. js 문법 사용 가능 */}
      <h3>코딩온 {text}</h3>

      {/* 2. js 문법 사용 가능(삼항 연산자로 간단한 조건 렌더링)  */}
      <h4>{name === "lily" ? "안녕하세요" : "누구세요?"}</h4>

      {/* 2-1. 복잡한 조건은 위에서 함수로 만들어 사용 */}
      <h4>{ifRenderTest()}</h4>

      {/* 2-2. 조건 렌더링 (&&) */}
      <h5>{name === "lily" && "안녕하세요"}</h5>

      {/* 3. inline style 적용 방법 */}
      <div style={{ fontSize: "20px" }}>hello</div>
      <div style={style}>world</div>

      {/* 4. class와 onclick을 jsx에서 사용하기 */}
      <div className="test-css">jsx에서 css 사용하기 (className)</div>
      {/* html에서는 함수를 '호출', jsx에서는 함수를 '선언' */}
      <button onClick={() => console.log("hello")}>jsx onclick</button>

      {/* 5. 종료 태그 필수 */}
      <br />
      {/* 기본 경로가 public 안이다 */}
      <img src="/logo192.png" alt="" />

      {/* src 내부의 이미지 사용할 경우 => 위에서 이미지를 import 해오기 */}
      <img src={image} alt="" />
    </>
  );
};

export default FuncComponent;
