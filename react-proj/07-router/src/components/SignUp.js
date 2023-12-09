import React from "react";
import { useForm, useWatch } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log("성공", data);
  };
  const onInvalid = (err) => {
    console.log("실패", err);
  };

  const genderValid = register("gender", { required: "성별은 필수값입니다." });

  // register("ID") => {name: id}

  console.log(watch("ID"));

  return (
    <>
      <h4>react hook form 테스트</h4>
      {/* handleSubmit(onValid[, onInvalid]) */}
      {/* onValid: 폼을 정상적으로 제출할 수 있는 상태에서 실행할 함수 */}
      {/* onInvalid: 선택사항 폼 제출이 이상할 때 실행할 함수 */}
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="text"
          placeholder="아이디"
          {...register("ID", {
            required: "아이디는 필수값입니다.",
          })}
        />
        {errors.ID?.message}
        <br />
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수값입니다.",
            // minLength: 2,
            minLength: {
              value: 2,
              message: "이름은 두 글자 이상 입력해야합니다.",
            },
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="text"
          placeholder="이메일"
          {...register("email", {
            required: "이메일은 필수값입니다.",
            // pattern: {
            //   value:
            //     /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
            //   message: "올바른 형태의 이메일을 입력해주세요.",
            // },
            validate: (v) => {
              return v.includes("gmail.com") || "gmail로만 가입 가능합니다.";
            },
          })}
        />
        {errors.email?.message}
        <br />
        <label htmlFor="gender-man">
          <input type="radio" id="gender-man" value="남" {...genderValid} />남
        </label>
        <label htmlFor="gender-woman">
          <input type="radio" id="gender-woman" value="여" {...genderValid} />여
        </label>
        <br />
        {errors.gender?.message}
        <br />
        <select {...register("option", { required: "옵션은 필수값입니다." })}>
          <option value="">옵션</option>
          <option value="option-1">옵션1</option>
          <option value="option-2">옵션2</option>
          <option value="option-3">옵션3</option>
        </select>
        <br />
        <button type="submit">회원가입</button>
      </form>
    </>
  );
}
