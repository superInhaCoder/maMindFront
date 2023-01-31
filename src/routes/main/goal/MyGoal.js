import { Accordion } from "@mantine/core";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EmptyBox } from "../../../components/Component";
import { Card } from "./TodayGoal";
import { useRecoilState } from "recoil";
import {
  myGoalState,
  todayGoalDepressState,
  todayGoalStressState,
  todayGoalUnRestState,
  todayGoalWorryState,
} from "../../../state/PageData";
import { customAxios } from "../../../config/api";

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

  const [myGoalStress, setMyGoalStress] = useRecoilState(myGoalState);

  useEffect(() => {
    customAxios
      .get("/user/goal")
      .then((res) => {
        console.log(res.data);
        setMyGoalStress(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Contents = () => {
    return (
      <Accordion
        variant='separated'
        style={{ marginLeft: "7%", marginRight: "7%" }}
      >
        {myGoalStress.map((goal) =>
          goal.now === 1 ? (
            <></>
          ) : (
            <Card
              value={String(goal.id)}
              level={goal.step}
              title={goal.subject}
              subTitle={goal.content}
              contentTitle1={goal.mission1}
              contentTitle2={goal.mission2}
              contentTitle3={goal.mission3}
              goalId={goal.id}
            />
          )
        )}
      </Accordion>
    );
  };

  return (
    <Body>
      <Title>현재 내 목표</Title>
      <Accordion
        variant='separated'
        style={{ marginLeft: "7%", marginRight: "7%" }}
      >
        {myGoalStress.map(
          (goal) =>
            !goal?.success && (
              <Card
                value={String(goal.id)}
                level={goal.step}
                title={goal.subject}
                subTitle={goal.content}
                contentTitle1={goal.mission1}
                contentTitle2={goal.mission2}
                contentTitle3={goal.mission3}
                goalId={goal.id}
              />
            )
        )}
      </Accordion>
      <EmptyBox height={1} />
      <Title>오늘 완료된 목표</Title>
      <Accordion
        variant='separated'
        style={{ marginLeft: "7%", marginRight: "7%" }}
      >
        {myGoalStress.map((goal) => {
          goal?.success && (
            <Card
              value={String(goal.id)}
              level={goal.step}
              title={goal.subject}
              subTitle={goal.content}
              contentTitle1={goal.mission1}
              contentTitle2={goal.mission2}
              contentTitle3={goal.mission3}
              goalId={goal.id}
            />
          );
        })}
      </Accordion>
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
