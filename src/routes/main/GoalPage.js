import { Accordion, Stack } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
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

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const LevelBox = styled.div`
  width: 63px;
  height: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  text-align: center;
  line-height: 20px;
  font-size: 11px;
  font-weight: 400;
`;

const TagBox = styled.div`
  width: 100%;
  height: 45px;
  border-radius: 10px;
  background-color: #e6e6e6;
  line-height: 45px;
  margin: 12px 0;
  padding-left: 15px;
  font-size: 13px;
  font-weight: 700;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const SubTitle = styled.div`
  font-size: 13px;
  font-weight: 400;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Time = styled.div`
  margin-left: 7px;
  font-size: 10px;
  font-weight: 400;
`;

const TagButton = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 10px;
  background-color: #866ef4;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`;

const GoalPage = () => {
  const [currentMenu, setCurrentMenu] = useRecoilState(bottomMenuState);

  useLayoutEffect(() => {
    setCurrentMenu(GOAL);
  }, []);

  const Tag = ({ title, time }) => {
    return (
      <TagBox>
        <Row>
          <div>{title}</div>
          <Time>{time}분</Time>
        </Row>
      </TagBox>
    );
  };

  const Card = ({ value }) => {
    return (
      <Accordion.Item
        value={value}
        style={{ borderColor: "#D2CBCB", borderRadius: "12px", borderWidth: 2 }}
      >
        <Accordion.Control
          style={{
            backgroundColor: "#CAC9FF",
            borderRadius: "10px",
            borderColor: "#D2CBCB",
            borderWidth: 2,
          }}
        >
          <LevelBox>BEGINNER</LevelBox>
          <SubTitle>유독 우울했던 </SubTitle>
          <Title>미라클 모닝 30분</Title>
        </Accordion.Control>
        <Accordion.Panel
          style={{
            borderRadius: "10px",
          }}
        >
          <Tag title={"잠자리 정리하기"} time={10} />
          <Tag title={"잠자리 정리하기"} time={10} />
          <Tag title={"잠자리 정리하기"} time={10} />
          <TagButton>목표 도전하기</TagButton>
        </Accordion.Panel>
      </Accordion.Item>
    );
  };

  return (
    <BottomNavComponent>
      <Body>
        <TopNavContainer>
          <div>오늘의 목표</div>
          <div>|</div>
          <div>내 목표</div>
        </TopNavContainer>
        <Accordion
          variant='separated'
          style={{ marginLeft: "7%", marginRight: "7%" }}
        >
          <Card value='a' />
          <Card value='b' />
          <Card value='c' />
          <Card value='d' />
        </Accordion>
      </Body>
    </BottomNavComponent>
  );
};

export default GoalPage;
