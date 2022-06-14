import React, { useState } from "react";
import styled from "styled-components";

const SignUp = () => {
  // 회원가입 요청 정보
  const [inputValue, setInputValue] = useState({
    id: "",
    pw: "",
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  // inputValue 비구조화
  const { id, pw, name, email, age, gender } = inputValue;
  const [checkBoxClicked, setCheckBoxClicked] = useState(false);

  // inputValue값 변경 핸들러
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // 각 회원가입 정보들 조건
  const limitNum = /[0-9]/gi;
  const limitABC = /[a-z]/gi;
  const idLimitNum = limitNum.test(id) && limitABC.test(id);
  const idLength = id.length < 4 || id.length > 12;
  const pwLength = pw.length < 4 || pw.length > 20;
  const pwIncludeSymbol = pw.search(/[~!@#$%";'^,&*()_+|</>=>`?:{[\}]/g) > 0;
  const nicknameLength = name.length < 2 || name.length > 10;
  const nicknameABC =
    name.search(/[0-9]/gi) +
    name.search(/[~!@#$%";'^,&*()_+|</>=>`?:{[\}]/g) +
    name.search(/[a-z]/gi);
  const emailCheck = email.includes("@") && email.includes(".com");
  const limitAge = /[^0-9]/g;
  const ageCheck = limitAge.test(age);

  // 회원가입 요청
  function join() {
    if (idLength || !idLimitNum) {
      return alert("4 - 12자의 영문 대소문자와 숫자로만 입력하세요");
    }
    if (pwLength || !pwIncludeSymbol) {
      return alert(" 4 - 20자의 한 개 이상의 특수기호를 포함하여 입력하세요");
    }
    if (nicknameLength || nicknameABC > 0) {
      return alert("2-10자 이내 한글로 작성하세요");
    }
    if (!emailCheck) {
      return alert("이메일 형식에 맞게 입력하세요");
    }
    if (ageCheck) {
      return alert("숫자만 입력하세요");
    }
    if (checkBoxClicked === false) {
      return alert("성별을 선택해주세요");
    }

    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(new Error("에러 발생"));
      });
  }

  return (
    <Container>
      <Header>Sign Up</Header>
      <IdBox>
        ID
        <ID placeholder="ID" name="id" onChange={handleInput} />
        <Condition>※ 4 - 12자의 영문 대소문자와 숫자로만 입력하세요</Condition>
      </IdBox>
      <PasswordBox>
        PassWord
        <Password placeholder="PassWord" name="pw" onChange={handleInput} />
        <Condition>
          ※ 4 - 20자의 한 개 이상의 특수기호를 포함하여 입력하세요
        </Condition>
      </PasswordBox>
      <NicknameBox>
        NickName
        <Nickname placeholder="NickName" name="name" onChange={handleInput} />
        <Condition>※ 2-10자 이내 한글로 작성하세요</Condition>
      </NicknameBox>
      <EmailBox>
        Email
        <Email placeholder="Email" name="email" onChange={handleInput} />
        <Condition>※ 이메일 형식에 맞게 입력하세요</Condition>
      </EmailBox>
      <AgeBox>
        Age
        <Age placeholder="Age" name="age" onChange={handleInput} />
        <ImportCondition>※ 숫자만 입력하세요</ImportCondition>
      </AgeBox>
      <GenderBox>
        Gender
        <RadioBox>
          <input
            type="radio"
            value="남"
            name="gender"
            onChange={handleInput}
            onClick={() => {
              setCheckBoxClicked(!checkBoxClicked);
            }}
          />
          남
          <input
            type="radio"
            value="여"
            name="gender"
            onChange={handleInput}
            onClick={() => {
              setCheckBoxClicked(!checkBoxClicked);
            }}
          />
          여
        </RadioBox>
      </GenderBox>
      <JoinBtn onClick={join}>가입</JoinBtn>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  width: 830px;
  height: 830px;
  margin: 50px auto 100px auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Header = styled.div`
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 30px;
`;

const IdBox = styled.div`
  font-size: 24px;
  display: flex;
  text-align: start;
  flex-direction: column;
  margin-bottom: 16px;
`;

const PasswordBox = styled.div`
  font-size: 24px;
  display: flex;
  text-align: start;
  margin-bottom: 16px;
  flex-direction: column;
`;

const EmailBox = styled.div`
  font-size: 24px;
  display: flex;
  text-align: start;
  margin-bottom: 16px;
  flex-direction: column;
`;

const NicknameBox = styled.div`
  font-size: 24px;
  display: flex;
  text-align: start;
  margin-bottom: 16px;
  flex-direction: column;
`;

const AgeBox = styled.div`
  font-size: 24px;
  display: flex;
  text-align: start;
  margin-bottom: 16px;
  flex-direction: column;
`;

const GenderBox = styled.div`
  font-size: 24px;
  display: flex;
  text-align: start;
  margin-bottom: 16px;
  flex-direction: column;
`;

const ID = styled.input`
  font-size: 16px;
  padding: 5px 5px;
  margin: 5px 0;
`;

const Password = styled.input`
  font-size: 16px;
  margin: 5px 0;
  padding: 5px 5px;
`;

const Nickname = styled.input`
  font-size: 16px;
  margin: 5px 0;
  padding: 5px 5px;
`;

const Email = styled.input`
  font-size: 16px;
  margin: 5px 0;
  padding: 5px 5px;
`;

const Age = styled.input`
  font-size: 16px;
  margin: 5px 0;
  padding: 5px 5px;
`;

const JoinBtn = styled.button`
  width: 158px;
  height: 76px;
  font-size: 32px;
  color: white;
  background-color: black;
  border-radius: 20px;
  margin: 0 auto;
`;

const Condition = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const ImportCondition = styled(Condition)`
  color: red;
`;

const RadioBox = styled.div`
  margin: 3px 0;
`;
