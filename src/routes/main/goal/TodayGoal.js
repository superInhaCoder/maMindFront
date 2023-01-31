import { Accordion, Tabs } from "@mantine/core";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { customAxios } from "../../../config/api";
import {
  todayGoalDepressState,
  todayGoalStressState,
  todayGoalUnRestState,
  todayGoalWorryState,
} from "../../../state/PageData";

export const CategoryBox = styled.div`
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
  font-size: 9px;
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
  const [todayGoalDepress, setTodayGoalDepress] = useRecoilState(
    todayGoalDepressState
  );
  const [todayRestGoal, setTodayRestGoal] =
    useRecoilState(todayGoalUnRestState);
  const [todayWorryGoal, setTodayWorryGoal] =
    useRecoilState(todayGoalWorryState);
  const [todayStressGoal, setTodayStressGoal] =
    useRecoilState(todayGoalStressState);

  useEffect(() => {
    customAxios
      .post("/goallist", { category: 1 })
      .then((res) => {
        setTodayGoalDepress(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    customAxios
      .post("/goallist", { category: 2 })
      .then((res) => {
        setTodayRestGoal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    customAxios
      .post("/goallist", { category: 3 })
      .then((res) => {
        setTodayWorryGoal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    customAxios
      .post("/goallist", { category: 4 })
      .then((res) => {
        setTodayStressGoal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Contents = ({ category }) => {
    if (category === 1)
      return (
        <>
          {todayGoalDepress &&
            todayGoalDepress.map((goal) =>
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
                  category={category}
                  setTodayGoalDepress={setTodayGoalDepress}
                  setTodayRestGoal={setTodayRestGoal}
                  setTodayWorryGoal={setTodayWorryGoal}
                  setTodayStressGoal={setTodayStressGoal}
                />
              )
            )}
        </>
      );
    else if (category === 2)
      return (
        <>
          {todayRestGoal &&
            todayRestGoal.map((goal) =>
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
                  category={category}
                  setTodayGoalDepress={setTodayGoalDepress}
                  setTodayRestGoal={setTodayRestGoal}
                  setTodayWorryGoal={setTodayWorryGoal}
                  setTodayStressGoal={setTodayStressGoal}
                />
              )
            )}
        </>
      );
    else if (category === 3)
      return (
        <>
          {todayWorryGoal &&
            todayWorryGoal.map((goal) =>
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
                  category={category}
                  setTodayGoalDepress={setTodayGoalDepress}
                  setTodayRestGoal={setTodayRestGoal}
                  setTodayWorryGoal={setTodayWorryGoal}
                  setTodayStressGoal={setTodayStressGoal}
                />
              )
            )}
        </>
      );
    else if (category === 4)
      return (
        <>
          {todayStressGoal &&
            todayStressGoal.map((goal) =>
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
                  category={category}
                  setTodayGoalDepress={setTodayGoalDepress}
                  setTodayRestGoal={setTodayRestGoal}
                  setTodayWorryGoal={setTodayWorryGoal}
                  setTodayStressGoal={setTodayStressGoal}
                />
              )
            )}
        </>
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
          <Accordion
            variant='separated'
            style={{ marginLeft: "7%", marginRight: "7%" }}
          >
            <Contents category={1} />
          </Accordion>
        </Tabs.Panel>

        <Tabs.Panel value='불안' pt='xs'>
          <Accordion
            variant='separated'
            style={{ marginLeft: "7%", marginRight: "7%" }}
          >
            <Contents category={2} />
          </Accordion>
        </Tabs.Panel>

        <Tabs.Panel value='걱정' pt='xs'>
          <Accordion
            variant='separated'
            style={{ marginLeft: "7%", marginRight: "7%" }}
          >
            <Contents category={3} />
          </Accordion>
        </Tabs.Panel>
        <Tabs.Panel value='스트레스' pt='xs'>
          <Accordion
            variant='separated'
            style={{ marginLeft: "7%", marginRight: "7%" }}
          >
            <Contents category={4} />
          </Accordion>
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

export const Card = ({
  value,
  level,
  title,
  category,
  subTitle,
  contentTitle1,
  contentTitle2,
  contentTitle3,
  goalId,
  setTodayGoalDepress,
  setTodayRestGoal,
  setTodayWorryGoal,
  setTodayStressGoal,
  color,
  isButton = true,
}) => {
  return (
    <Accordion.Item
      value={value}
      style={{
        borderColor: "#D2CBCB",
        borderRadius: "14px",
        borderWidth: 2,
        marginBottom: 20,
        backgroundColor: color,
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
        <Tag title={contentTitle1} time={10} />
        <Tag title={contentTitle2} time={10} />
        <Tag title={contentTitle3} time={10} />
        {isButton && (
          <TagButton
            onClick={() => {
              customAxios
                .post("/user/goal", { goal_id: goalId, category: category })
                .then((res) => {
                  console.log(res.data);
                  if (category === 1) setTodayGoalDepress(res.data);
                  else if (category === 2) setTodayRestGoal(res.data);
                  else if (category === 3) setTodayWorryGoal(res.data);
                  else if (category === 4) setTodayStressGoal(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            목표 도전하기
          </TagButton>
        )}
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default TodayGoal;
