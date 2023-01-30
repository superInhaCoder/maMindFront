import { Accordion } from "@mantine/core";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EmptyBox } from "../../../components/Component";
import { Card } from "./TodayGoal";

const Body = styled.div`
  /* display: flex;
  flex-direction: column;
  flex: 1; */
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  margin: 18px 7%;
  margin-top: 22px;
  font-weight: 700;
  font-size: 18px;
`;

function MyGoal() {
  const navigate = useNavigate();

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
      </Accordion>
    );
  };

  return (
    <Body>
      <Title>현재 내 목표</Title>
      <Contents />
      <EmptyBox height={1} />
      <Title>오늘 완료된 목표</Title>
      <Contents />
      <img
        src='icon/graph_float_button.svg'
        style={{ position: "fixed", bottom: 109, right: 29 }}
        onClick={() => {
          navigate("/my-graph");
        }}
      />
    </Body>
  );
}

export default MyGoal;
