import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    const info = {
      id: id,
      pw: password,
    };

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          navigate("/gogo");
        } else {
          alert(res.msg);
        }
      })
      .catch((err) => {
        console.error(new Error("에러 발생"));
      });
  }

  return (
    <Container>
      <Header>LOGIN</Header>
      <IdBox>
        User ID
        <ID placeholder="ID" onChange={(e) => setId(`${e.target.value}`)}></ID>
      </IdBox>
      <PwBox>
        Password
        <PW
          placeholder="Password"
          onChange={(e) => setPassword(`${e.target.value}`)}
        ></PW>
      </PwBox>
      <LoginBtn onClick={login}>로그인</LoginBtn>
      <Footer>
        <Comment1>회원이 아니라면? </Comment1>
        <Comment2 to="/sign-up">회원가입</Comment2>
      </Footer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 830px;
  height: 680px;
  margin: 100px auto 100px auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Header = styled.div`
  font-size: 48px;
  margin-bottom: 40px;
`;

const IdBox = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  font-size: 24px;
`;

const ID = styled.input`
  margin: 16px 0 36px 0;
  font-size: 24px;
  padding: 5px 5px;
`;

const PwBox = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  font-size: 24px;
`;

const PW = styled.input`
  margin: 16px 0 36px 0;
  font-size: 24px;
  padding: 5px 5px;
`;

const LoginBtn = styled.button`
  width: 156px;
  height: 76px;
  font-size: 32px;
  margin: 0 auto;
  background-color: black;
  color: white;
  border-radius: 20px;
  font-weight: 900;
  margin-bottom: 132px;
`;

const Footer = styled.div`
  font-size: 16px;
`;

const Comment1 = styled.span`
  color: rgba(113, 106, 106, 0.23);
  font-weight: 900;
`;

const Comment2 = styled(Link)`
  color: rgba(0, 117, 255, 1);
  font-weight: 900;
  text-decoration: none;
`;
