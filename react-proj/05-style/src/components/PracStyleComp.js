import React from "react";
import Styled from "styled-components";

const Body = Styled.div`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "100px"};
  background-color: ${(props) => props.color || "lightgrey"};
  top: ${(props) => props.top || "10%"};
  left: ${(props) => props.left || "10%"};
  border-radius: 50%;
  position: absolute;
  z-index: ${(props) => props.zIndex || 0};
  transform: scale(${(props) => props.scale || "100%"});
`;

function PracStyleComp() {
  return (
    <>
      <div>PracStyleComp</div>
      <Body color="rgb(0, 0, 166)" top="100px" left="100px">
        <Body color="white" scale="50%" top="-10px" left="-10px">
          <Body color="black" scale="70%" top="-10px" left="-10px" />
        </Body>
      </Body>
      <Body color="rgb(36, 61, 206)" top="150px" left="160px" />
      <Body color="rgb(52, 118, 231)" top="190px" left="200px" />
      <Body color="rgb(47, 146, 233)" top="240px" left="220px" />
      <Body color="rgb(140, 191, 253)" top="280px" left="280px" zIndex="10" />
    </>
  );
}

export default PracStyleComp;
