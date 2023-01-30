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
`;

const BottomNav = () => {
  const [currentMenu, setCurrentMenu] = useRecoilState(bottomMenuState);
  const navigate = useNavigate();
  return (
    <>
      <NavContainer>
        {currentMenu === TEST ? (
          // <HeartPlus color='black' />
          <button>
            <img src='icon/test_tab_black.svg' />
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/test");
              setCurrentMenu(TEST);
            }}
          >
            <img src='icon/test_tab_gray.svg' />
          </button>
          // <HeartPlus
          //   color='gray'
          //   onClick={() => {
          //     navigate("/test");
          //     setCurrentMenu(TEST);
          //   }}
          // />
        )}
        {currentMenu === GOAL ? (
          <button>
            <img src='icon/goal_tab_black.svg' />
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/goal");
              setCurrentMenu(GOAL);
            }}
          >
            <img src='icon/goal_tab_gray.svg' />
          </button>
        )}
        {currentMenu === CONSULT ? (
          <button>
            <img src='icon/counsel_tab_black.svg' />
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/consult");
              setCurrentMenu(CONSULT);
            }}
          >
            <img src='icon/counsel_tab_gray.svg' />
          </button>
        )}
      </NavContainer>
    </>
  );
};

export default BottomNav;
