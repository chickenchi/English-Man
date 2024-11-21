import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const Header = styled.div`
  background-color: rgb(250, 250, 250);
  width: 100%;
  height: 88%;

  font-family: "Pretendard";
`;

const Title = styled.h1`
  font-size: 30px;
`;

const Main = () => {
  return (
    <Header className="Header">
      <Title>English Man</Title>
    </Header>
  );
};

export default Main;
