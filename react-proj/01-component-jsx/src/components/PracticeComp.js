export default function PracticeComp() {
  let name = "레그";
  let animal = "개";
  let a = 5;
  let b = 1;
  let title = "title";
  return (
    <>
      <h2>
        제 반려 동물의 이름은 {name}입니다.
        <br />
        {name}는 {animal}입니다.
      </h2>
      <h2>{3 + 5 === 8 ? "정답!" : "오답."}</h2>
      <h2>{a > b && "a가 b보다 큽니다."}</h2>
      <div className="input-wrapper">
        <p>{title}</p>
        <div>
          아이디: <input />
        </div>
        <div>
          비밀번호: <input />
        </div>
      </div>
    </>
  );
}
