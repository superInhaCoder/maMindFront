import React, { useEffect, useLayoutEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import BottomNavComponent from "../../components/pageForm/BottomNavComponent";
import { bottomMenuState } from "../../state/CommonData";
import { GOAL } from "../../utils/status";

const TopNavContainer = styled.div`
  height: 116px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  background-color: pink;
`;

const GoalPage = () => {
  const [currentMenu, setCurrentMenu] = useRecoilState(bottomMenuState);
  useLayoutEffect(() => {
    setCurrentMenu(GOAL);
  }, []);
  return (
    <BottomNavComponent>
      <TopNavContainer>
        <div>오늘의 목표</div>
        <div>|</div>
        <div>내 목표</div>
      </TopNavContainer>
    </BottomNavComponent>
  );
};

export default GoalPage;
