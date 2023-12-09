import React from "react";
// css의 네이밍 중복을 방지
// css in js (이 외 style-jsx)
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color || "lightgrey"};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

function StyledComponent() {
  return (
    <>
      <div>StyledComponent</div>
      <Container>
        <Box color="crimson" />
        <Box color="darkorange" />
        <Box color="lime" />
        <Box />
        <Box />
        <Box />
        <Box />
      </Container>
    </>
  );
}

export default StyledComponent;
