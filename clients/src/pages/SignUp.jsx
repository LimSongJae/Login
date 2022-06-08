import React from "react";
import styled from "styled-components";

const SignUp = () => {
  return (
    <Container>
      <Header>Sign Up</Header>
      <IdBox>
        ID
        <ID placeholder="ID"></ID>
        <Condition>※ 4 - 12자의 영문 대소문자의 숫자로만 입력하세요</Condition>
      </IdBox>
      <PasswordBox>
        PassWord
        <Password placeholder="PassWord"></Password>
        <Condition>
          ※ 4 - 12자의 한 개 이상의 특수기호를 포함하여 입력하세요
        </Condition>
      </PasswordBox>
      <NicknameBox>
        NickName
        <Nickname placeholder="NickName"></Nickname>
        <Condition>※ 2-10자 이내로 첫 글자는 문자로 시작하세요</Condition>
      </NicknameBox>
      <EmailBox>
        Email
        <Email placeholder="Email"></Email>
        <Condition>※ 이메일 형식에 맞게 입력하세요</Condition>
      </EmailBox>
      <AgeBox>
        Age
        <Age placeholder="Age"></Age>
        <ImportCondition>※ 숫자만 입력하세요</ImportCondition>
      </AgeBox>
      <GenderBox>
        Gender
        <RadioBox>
          <input name="sex" type="radio" value="man" />남
          <input name="sex" type="radio" value="girl" />여
        </RadioBox>
      </GenderBox>
      <JoinBtn>가입</JoinBtn>
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
