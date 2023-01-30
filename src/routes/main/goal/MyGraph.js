import { Group, Progress, Stack } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ChevronLeft } from "tabler-icons-react";
import { SpaceBetween } from "../GoalPage";
import { Row } from "./TodayGoal";

const TopNav = styled.div`
  width: 100%;
  height: 116px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 25px;
  background-color: #f4f4f4;
`;

const Title = styled.div`
  font-family: HanSanMedium;
  font-size: 20px;
`;

const Paper = styled.div`
  height: 503px;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 20px 5%;
  padding: 25px;
  background-color: #f4f4f4;
`;

const SubTitleP = styled.div`
  color: #866ef4;
  font-size: 24px;
`;

const SubTitle = styled.div`
  font-size: 24px;
  font-family: HanSanMedium;
`;

const SubTitleB = styled.div`
  font-size: 24px;
`;

const MidText = styled.div`
  margin-top: 20px;
  margin-bottom: 8px;
  font-size: 13px;
  font-family: HanSanBold;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

const SmallText = styled.div`
  margin-top: 10px;
  font-size: 10px;
  font-family: HanSanMedium;
`;

const CardBox = styled.div`
  height: 70px;
  display: flex;
  flex: 1;
  align-items: center;
  padding: 15px;
  margin: 5px -10px;
  border-radius: 10px;
  background-color: #ffffff;
`;

const IconBox = styled.div`
  width: 39px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.color};
`;

function MyGraph() {
  const navigate = useNavigate();
  return (
    <div>
      <TopNav
        onClick={() => {
          navigate(-1);
        }}
      >
        <ChevronLeft />
        <Title>나의 목표 분석</Title>
        <ChevronLeft color='#f4f4f4' />
      </TopNav>
      <Paper>
        <Group spacing='xs'>
          <SubTitleP>20대 여성 </SubTitleP>
          <SubTitle>풀무지님의</SubTitle>
        </Group>
        <SubTitle>목표 달성율은 평균보다</SubTitle>{" "}
        <Group spacing='xs'>
          <SubTitleP>9% </SubTitleP>
          <SubTitleB>높습니다.</SubTitleB>
        </Group>
        <MidText>목표 비율</MidText>
        <Progress
          sections={[
            { value: 40, color: "#866EF4" },
            { value: 25, color: "#1AFFAD" },
            { value: 35, color: "#FFC81A" },
          ]}
        />
        <Row>
          <SmallText>검사 내용</SmallText>
          <SmallText>달성율</SmallText>
          <SmallText>목표 횟수</SmallText>
        </Row>
        <CardBox>
          <SpaceBetween>
            <IconBox color={"#866EF4"}>
              <img src='icon/emoji_01.svg' />
            </IconBox>
            <MidText>우울증 관련 목표</MidText>
            <MidText>50%</MidText>
            <MidText color={"#866EF4"}>2회</MidText>
          </SpaceBetween>
        </CardBox>
        <CardBox>
          <SpaceBetween>
            <IconBox color={"#1AFFAD"}>
              <img src='icon/emoji_02.svg' />
            </IconBox>
            <MidText>우울증 관련 목표</MidText>
            <MidText>50%</MidText>
            <MidText color={"#1AFFAD"}>2회</MidText>
          </SpaceBetween>
        </CardBox>
        <CardBox>
          <SpaceBetween style={{ lineHeight: "70px" }}>
            <IconBox color={"#FFC81A"}>
              <img src='icon/emoji_03.svg' />
            </IconBox>
            <MidText>우울증 관련 목표</MidText>
            <MidText>50%</MidText>
            <MidText color={"#FFC81A"}>2회</MidText>
          </SpaceBetween>
        </CardBox>
      </Paper>
    </div>
  );
}

export default MyGraph;
