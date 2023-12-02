import React from "react";
import { useState, useRef } from "react";
import { Button, Form, Container, Row, Col, Stack } from "react-bootstrap";

function Prac01() {
  const nameInput = useRef();
  const emailInput = useRef();

  const focusInput = (value) => {
    if (value === "userName") nameInput.current.focus();
    else if (value === "userEmail") emailInput.current.focus();
  };

  const users = [
    { id: 1, userName: "코디", userEmail: "codi@gmail.com" },
    { id: 2, userName: "테스터", userEmail: "test2@gmail.com" },
    { id: 3, userName: "테스터", userEmail: "test3@gmail.com" },
    { id: 4, userName: "안녕맨", userEmail: "test4@gmail.com" },
  ];
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userList, setUserList] = useState(users);

  const clickSubmit = () => {
    if (userName === "") focusInput("userName");
    else if (userEmail === "") focusInput("userEmail");
    else {
      const newUser = {
        id: userList.length + 1,
        userName: userName,
        userEmail: userEmail,
      };
      // const newUserList = [...users, newUser];
      const newUserList = userList.concat(newUser);
      setUserList(newUserList);
    }
  };
  const keySubmit = (e) => {
    if (e.key === "Enter") clickSubmit();
  };
  const deleteUser = (id) => {
    const newUserList = userList.filter((el) => el.id !== id);
    setUserList(newUserList);
  };

  // 검색 부분
  const searchedUsers = [];
  const [searchValue, setSearchValue] = useState("");
  const [searchCat, setSearchCat] = useState("name");
  const [searchList, setSearchList] = useState(searchedUsers);

  const searchUsers = () => {
    let newUserList = [];
    if (searchCat === "name") {
      newUserList = userList.filter((el) => {
        return searchValue === el.userName;
      });
      setSearchList(newUserList);
    } else if (searchCat === "id") {
      newUserList = userList.filter((el) => {
        return Number(searchValue) === el.id;
      });
      setSearchList(newUserList);
    }
  };

  const searchAll = () => {
    setSearchList(userList);
  };

  return (
    <>
      <Stack gap={2}>
        <div>Prac01</div>
        <Stack gap={2}>
          <Form.Control
            ref={nameInput}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="이름"
          />
          <Form.Control
            ref={emailInput}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="이메일"
            onKeyDown={keySubmit}
          />
          <Button varinat="primary" type="button" onClick={clickSubmit}>
            등록
          </Button>
        </Stack>

        <Row>
          <Col>
            {/* 드랍다운 메뉴 고르기 */}
            <select
              onChange={(e) => {
                setSearchCat(e.target.value);
              }}
            >
              <option value="name">작성자</option>
              <option value="id">번호</option>
            </select>
          </Col>
          <Col>
            <input
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            ></input>
          </Col>
          <Col>
            <Button variant="secondary" onClick={searchUsers}>
              검색
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" onClick={searchAll}>
              전체
            </Button>
          </Col>
        </Row>

        <Container>
          <Row>
            <Col>번호</Col>
            <Col>이름</Col>
            <Col>이메일</Col>
          </Row>
          {userList.map((el) => {
            return (
              <Row
                onDoubleClick={(el) => {
                  deleteUser(el.id);
                }}
                key={el.id}
              >
                <Col>{el.id}</Col>
                <Col>{el.userName}</Col>
                <Col>{el.userEmail}</Col>
              </Row>
            );
          })}
        </Container>

        <Container>
          <Row>
            <Col>번호</Col>
            <Col>이름</Col>
            <Col>이메일</Col>
          </Row>
          {searchList.map((el) => {
            return (
              <Row key={el.id}>
                <Col>{el.id}</Col>
                <Col>{el.userName}</Col>
                <Col>{el.userEmail}</Col>
              </Row>
            );
          })}
        </Container>
      </Stack>
    </>
  );
}

export default Prac01;
