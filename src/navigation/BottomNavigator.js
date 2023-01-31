import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { bottomMenuState } from "../state/CommonData";
import { useRecoilState } from "recoil";
import { CONSULT, GOAL, TEST } from "../utils/status";
import { HeartPlus } from "tabler-icons-react";

const NavContainer = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  border-top: #e9e9e9 1px solid;
`;

const ButtonBox = styled.button`
  height: 86px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BottomNav = () => {
  const [currentMenu, setCurrentMenu] = useRecoilState(bottomMenuState);
  const navigate = useNavigate();
  return (
    <>
      <NavContainer>
        {currentMenu === TEST ? (
          // <HeartPlus color='black' />
          <ButtonBox>
            <img src='icon/test_tab_black.svg' />
          </ButtonBox>
        ) : (
          <ButtonBox
            onClick={() => {
              navigate("/recommend");
              setCurrentMenu(TEST);
            }}
          >
            <img src='icon/test_tab_gray.svg' />
          </ButtonBox>
          // <HeartPlus
          //   color='gray'
          //   onClick={() => {
          //     navigate("/test");
          //     setCurrentMenu(TEST);
          //   }}
          // />
        )}
        {currentMenu === GOAL ? (
          <ButtonBox>
            <img src='icon/goal_tab_black.svg' />
          </ButtonBox>
        ) : (
          <ButtonBox
            onClick={() => {
              navigate("/goal");
              setCurrentMenu(GOAL);
            }}
          >
            <img src='icon/goal_tab_gray.svg' />
          </ButtonBox>
        )}
        {currentMenu === CONSULT ? (
          <ButtonBox>
            <img src='icon/counsel_tab_black.svg' />
          </ButtonBox>
        ) : (
          <ButtonBox
            onClick={() => {
              navigate("/consult");
              setCurrentMenu(CONSULT);
            }}
          >
            <img src='icon/counsel_tab_gray.svg' />
          </ButtonBox>
        )}
      </NavContainer>
    </>
  );
};

export default BottomNav;
