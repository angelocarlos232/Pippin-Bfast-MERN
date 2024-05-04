import React, { useState } from "react";
import styled from "styled-components";
import LogoImage from "./logo.png";
import AuthImage from "./AuthImage.jpg";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Logo = styled.img`
  display: flex;

  width: 70px;
  z-index: 10;
`;
const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
const TextButton = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`;

const BiggerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;



const Authentication = () => {
  const [login, setLogin] = useState(false);
  return (
    <BiggerContainer>
    <Container>
      <Left>
        
        <Image src={AuthImage} />
      </Left>
      <Right>
        {!login ? (
          <>
            <Logo src={LogoImage} />
            <LoginPage />
            <Text>
              Don't have an account?{" "}
              <TextButton onClick={() => setLogin(true)}>Sign Up</TextButton>
            </Text>
          </>
        ) : (
          <>
            <Logo src={LogoImage} />
            <SignupPage />
            <Text>
              Already have an account?{" "}
              <TextButton onClick={() => setLogin(false)}>Sign In</TextButton>
            </Text>
          </>
        )}
      </Right>
    </Container>
    </BiggerContainer>
  );
};

export default Authentication;
