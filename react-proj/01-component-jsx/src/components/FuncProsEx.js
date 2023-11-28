// function FuncProsEx(props) {
//   const { title, content } = props;
//   return (
//     <>
//       <div>FuncProsEx ( Props )</div>
//       <div>
//         제목은 {props.title}, 내용은 {props.content}
//       </div>
//       <div>
//         object destruct test: title= {title}, content= {content}
//       </div>
//     </>
//   );
// }

// prototype을 이용해 어떤 타입의 props가 넘어올지 명시
// 유연한 js의 특징으로 생기는 예기치 못한 오류 방지
import PropTypes from "prop-types";

function FuncProsEx({ title, content, number }) {
  console.log(typeof number);
  return (
    <>
      <div>FuncProsEx ( Props )</div>
      <div>
        object destruct test: title= {title}, content= {content}, number={" "}
        {number}
      </div>
    </>
  );
}

FuncProsEx.defaultProps = {
  title: "코딩온",
};

FuncProsEx.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  number: PropTypes.number,
};

export default FuncProsEx;
