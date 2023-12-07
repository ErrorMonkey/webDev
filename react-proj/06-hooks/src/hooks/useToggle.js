import { useState } from "react";
// 자주 쓰이는 toggle 기능, true => false, false => true
export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
  // 객체 구조 분해로 넘길 수도 있음
  // 객체 구조를 받을 때는 받는 곳에서도 이름이 같아야 함
  // return { value, toggle };
}
