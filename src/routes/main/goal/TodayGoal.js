import { Accordion, Tabs } from "@mantine/core";
import React from "react";
import styled from "styled-components";

const CategoryBox = styled.div`
  margin-left: 8%;
  margin-top: 5px;
  margin-bottom: 15px;
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

const SubTitle = styled.div`
  font-size: 13px;
  font-weight: 400;
  margin-top: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 5px;
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

function TodayGoal() {
  const Contents = () => {
    return (
      <Accordion
        variant='separated'
        style={{ marginLeft: "7%", marginRight: "7%" }}
      >
        <Card
          value='a'
          level='BEGINNER'
          title='미라클 모닝 30분'
          subTitle={"유독 우울했던 오늘을 위해"}
        />
        <Card
          value='b'
          level='BEGINNER'
          title='미라클 모닝 30분'
          subTitle={"유독 우울했던 오늘을 위해"}
        />
        <Card
          value='c'
          level='BEGINNER'
          title='미라클 모닝 30분'
          subTitle={"유독 우울했던 오늘을 위해"}
        />
        <Card
          value='d'
          level='BEGINNER'
          title='미라클 모닝 30분'
          subTitle={"유독 우울했던 오늘을 위해"}
        />
      </Accordion>
    );
  };

  return (
    <div>
      <Tabs color='violet.5' variant='pills' radius='xl' defaultValue='우울'>
        <CategoryBox>
          <Tabs.List>
            <Tabs.Tab
              value='우울'
              style={{
                fontWeight: 16,
                fontWeight: 700,
                border: "2px solid #C1C1C1",
                padding: "8px 12px",
                marginRight: 10,
              }}
            >
              우울
            </Tabs.Tab>
            <Tabs.Tab
              value='불안'
              style={{
                fontWeight: 16,
                fontWeight: 700,
                border: "2px solid #C1C1C1",
                padding: "8px 12px",
                marginRight: 10,
              }}
            >
              불안
            </Tabs.Tab>
            <Tabs.Tab
              value='걱정'
              style={{
                fontWeight: 16,
                fontWeight: 700,
                border: "2px solid #C1C1C1",
                padding: "8px 12px",
                marginRight: 10,
              }}
            >
              걱정
            </Tabs.Tab>
            <Tabs.Tab
              value='스트레스'
              style={{
                fontWeight: 16,
                fontWeight: 700,
                border: "2px solid #C1C1C1",
                padding: "8px 12px",
                marginRight: 10,
              }}
            >
              스트레스
            </Tabs.Tab>
          </Tabs.List>
        </CategoryBox>

        <Tabs.Panel value='우울' pt='xs'>
          <Contents />
        </Tabs.Panel>

        <Tabs.Panel value='불안' pt='xs'>
          <Contents />
        </Tabs.Panel>

        <Tabs.Panel value='걱정' pt='xs'>
          <Contents />
        </Tabs.Panel>
        <Tabs.Panel value='스트레스' pt='xs'>
          <Contents />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export const Tag = ({ title, time }) => {
  return (
    <TagBox>
      <Row>
        <div>{title}</div>
        <Time>{time}분</Time>
      </Row>
    </TagBox>
  );
};

export const Card = ({ value, level, title, subTitle }) => {
  return (
    <Accordion.Item
      value={value}
      style={{
        borderColor: "#D2CBCB",
        borderRadius: "14px",
        borderWidth: 2,
        marginBottom: 20,
      }}
    >
      <Accordion.Control
        style={{
          backgroundColor: "#CAC9FF",
          borderRadius: "12px",
          borderColor: "#D2CBCB",
          borderWidth: 2,
          padding: "10px 15px",
        }}
      >
        <LevelBox>{level}</LevelBox>
        <SubTitle>{subTitle} </SubTitle>
        <Title>{title}</Title>
      </Accordion.Control>
      <Accordion.Panel
        style={{
          borderRadius: 12,
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

export default TodayGoal;
