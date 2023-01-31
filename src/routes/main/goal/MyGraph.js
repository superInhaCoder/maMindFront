import { Group, Progress, Stack } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ChevronLeft, Sum } from "tabler-icons-react";
import { EmptyBox } from "../../../components/Component";
import { customAxios } from "../../../config/api";
import { myGraphState } from "../../../state/PageData";
import { Body } from "../GoalPage";
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

const SmallTextBox = styled.div`
  height: 20px;
  display: flex;
  flex: 1;
`;

const CardBox = styled.div`
  height: 70px;
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 20px;
  margin: 5px -10px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 0 0;
`;

const IconBox = styled.div`
  width: 39px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
`;

const SpaceBetween = styled.div`
  width: 100vw;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`;

const Button = styled.button`
  min-height: 55px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin: 10px 9%;
  padding: 10px 7%;
  background-color: #e3ddff;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  font-family: HanSanMedium;
`;

function MyGraph() {
  const navigate = useNavigate();

  const [myGraph, setMyGraph] = useRecoilState(myGraphState);
  const [graphSum, setGraphSum] = useState(0);

  useEffect(() => {
    customAxios
      .get("/user/goal/cal")
      .then((res) => {
        console.log(res.data);
        setMyGraph(res.data);
        setGraphSum(graphSum + res.data.우울);
        setGraphSum(graphSum + res.data.스트레스);
        setGraphSum(graphSum + res.data.불안);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Body>
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
        <EmptyBox height={30} />
        <MidText>목표 비율</MidText>
        <Progress
          sections={[
            { value: (myGraph.우울 / graphSum) * 100, color: "#866EF4" },
            { value: (myGraph.스트레스 / graphSum) * 100, color: "#1AFFAD" },
            { value: (myGraph.불안 / graphSum) * 100, color: "#FFC81A" },
          ]}
        />
        <SmallTextBox>
          <SpaceBetween>
            <IconBox color={"#f4f4f4"} />
            <SmallText style={{ width: "100px" }}>검사 내용</SmallText>
            <SmallText
              style={{
                width: "40px",
                textAlign: "right",
              }}
            >
              달성율
            </SmallText>
            <SmallText
              style={{
                width: "60px",
                textAlign: "right",
              }}
            >
              목표 횟수
            </SmallText>
          </SpaceBetween>
        </SmallTextBox>
        <CardBox>
          <IconBox color={"#866EF4"}>
            <img src='icon/emoji_01.svg' />
          </IconBox>
          <SpaceBetween style={{ lineHeight: "70px" }}>
            <MidText style={{ width: "110px" }}>우울증 관련 목표</MidText>
            <MidText style={{ width: "40px" }}>
              {(myGraph.우울 / graphSum) * 100}%
            </MidText>
            <MidText color={"#866EF4"}>{myGraph.우울}회</MidText>
          </SpaceBetween>
        </CardBox>
        <CardBox>
          <IconBox color={"#1AFFAD"}>
            <img src='icon/emoji_02.svg' />
          </IconBox>
          <SpaceBetween style={{ lineHeight: "70px" }}>
            <MidText style={{ width: "110px" }}>불안 관련 목표</MidText>
            <MidText style={{ width: "40px" }}>
              {(myGraph.불안 / graphSum) * 100}%
            </MidText>
            <MidText color={"#2DDF9F"}>{myGraph.불안}회</MidText>
          </SpaceBetween>
        </CardBox>
        <CardBox>
          <IconBox color={"#FFC81A"}>
            <img src='icon/emoji_03.svg' />
          </IconBox>
          <SpaceBetween style={{ lineHeight: "70px" }}>
            <MidText style={{ width: "110px" }}>스트레스 관련 목표</MidText>
            <MidText style={{ width: "40px" }}>
              {(myGraph.스트레스 / graphSum) * 100}%
            </MidText>
            <MidText color={"#FD5252"}>{myGraph.스트레스}회</MidText>
          </SpaceBetween>
        </CardBox>
      </Paper>
      <Button>
        <img src='icon/history.svg' />
        지난 나의 목표 확인하기
        <div />
      </Button>
    </Body>
  );
}

export default MyGraph;
