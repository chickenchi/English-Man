import React, { SetStateAction, useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import styled, { createGlobalStyle } from "styled-components";
import { jaccardSimilarity } from "../../components/functions/JaccardSimilarity";

import { useRecoilState } from "recoil";
import { modalState } from "../../Atom";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../commonFunctions/LocalStorage";

// 전역 스타일을 설정합니다.
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }

  .ReactModal__Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7); /* 오버레이 배경색 */
    z-index: 9998; /* 모달보다 아래에 위치 */
  }
`;

// 모달 스타일을 위한 Styled component
const StyledModal = styled(Modal)`
  &.ReactModal__Content {
    position: relative;
    top: 50%;
    left: 50%;

    background-color: rgb(250, 250, 250);

    max-width: 550px;
    width: 100%;
    height: 500px;

    padding: 30px;

    border-radius: 5px;

    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    flex-direction: column;

    z-index: 9999;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const SearchDiv = styled.div`
  width: 90%;
  height: 35px;

  margin-bottom: 20px;

  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  background-color: rgb(255, 255, 255);

  padding: 10px;

  width: 87%;
  height: 100%;

  margin: 0 10px;

  border: none;
  border-radius: 5px;

  color: rgb(80, 80, 80);
  font-size: 11pt;
`;

const SearchButton = styled.button`
  background-color: rgb(215, 215, 215);

  margin-right: 10px;

  width: 15%;
  height: 100%;

  border: none;
  border-radius: 5px;
`;

const RecentSearchesButton = styled.img`
  width: 30px;
  height: 30px;
`;

const SubjectList = styled.div`
  background-color: rgb(238, 238, 238);

  width: 90%;
  height: 300px;

  padding: 10px;

  border-radius: 5px;

  overflow-x: auto;
  overflow-y: none;
`;

const SubjectItem = styled.button<{ element: boolean }>`
  position: relative;

  background-color: ${({ element }) =>
    element ? "rgb(225, 225, 225)" : "rgba(255, 255, 255, 0)"};

  border: none;

  width: 100%;
  height: 30px;

  margin-bottom: 6px;

  padding-left: 10px;

  display: flex;
  align-items: center;

  font-size: 12pt;

  &:hover {
    background-color: rgb(230, 230, 230);
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Close = styled.button`
  width: 60px;
  height: 35px;

  margin-right: 10px;

  border: none;
  border-radius: 5px;
`;

interface SubjectModalProps {
  setSubjectChange: (e: any) => void;
}

function SettingPopup() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  return (
    <>
      <GlobalStyle />
      <StyledModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
      >
        <Title>단어 주제 변경</Title>

        <SearchDiv></SearchDiv>

        <ButtonContainer>
          <Close
            onClick={() => {
              setIsOpen(false);
            }}
          >
            선택
          </Close>

          <Close onClick={() => setIsOpen(false)}>닫기</Close>
        </ButtonContainer>
      </StyledModal>
    </>
  );
}

export default SettingPopup;
