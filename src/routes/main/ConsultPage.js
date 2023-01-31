import { Carousel } from "@mantine/carousel";
import { Accordion, Tabs } from "@mantine/core";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import BottomNavComponent from "../../components/pageForm/BottomNavComponent";
import { bottomMenuState } from "../../state/CommonData";
import { CONSULT } from "../../utils/status";
import { Card, CategoryBox, Row } from "./goal/TodayGoal";
import { Bar, SpaceBetween, TopNavContainer } from "./GoalPage";

function ConsultPage() {
  const [currentMenu, setCurrentMenu] = useRecoilState(bottomMenuState);
  const [activeTab, setActiveTab] = useState("today");

  useLayoutEffect(() => {
    setCurrentMenu(CONSULT);
  }, []);

  const CardBox = styled.div`
    width: 222px;
    height: 264;
    border-radius: 12px;
    background-color: ${(props) => props.color};
  `;

  return (
    <BottomNavComponent>
      <Tabs value={activeTab} variant='pills' onTabChange={setActiveTab}>
        <TopNavContainer>
          <SpaceBetween>
            <div
              style={{
                padding: 0,
                paddingRight: 7,
                backgroundColor: "#FFFFFF",
                color: activeTab === "today" ? "#130F0F" : "#8D8D8D",
                fontWeight: 700,
                fontSize: 20,
              }}
            >
              상담하기
            </div>

            <img src={"icon/search_icon.svg"} width={30} height={30} />
          </SpaceBetween>
        </TopNavContainer>
        <Carousel
          slideSize='70%'
          height={200}
          slideGap='lg'
          controlsOffset='xl'
          controlSize={27}
          withControls={false}
        >
          <CardBox color={"#AAF7DB"}></CardBox>
        </Carousel>
        <div>
          <Tabs
            color='violet.5'
            variant='pills'
            radius='xl'
            defaultValue='우울'
          >
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
                <Card
                  value='c'
                  level='BEGINNER'
                  title='미라클 모닝 30분'
                  subTitle={"유독 우울했던 오늘을 위해"}
                />
              </Accordion>
            </Tabs.Panel>

            <Tabs.Panel value='불안' pt='xs'>
              <Accordion
                variant='separated'
                style={{ marginLeft: "7%", marginRight: "7%" }}
              >
                <Card
                  value='c'
                  level='BEGINNER'
                  title='미라클 모닝 30분'
                  subTitle={"유독 우울했던 오늘을 위해"}
                />
              </Accordion>
            </Tabs.Panel>

            <Tabs.Panel value='걱정' pt='xs'>
              <Accordion
                variant='separated'
                style={{ marginLeft: "7%", marginRight: "7%" }}
              >
                <Card
                  value='c'
                  level='BEGINNER'
                  title='미라클 모닝 30분'
                  subTitle={"유독 우울했던 오늘을 위해"}
                />
              </Accordion>
            </Tabs.Panel>
            <Tabs.Panel value='스트레스' pt='xs'>
              <Accordion
                variant='separated'
                style={{ marginLeft: "7%", marginRight: "7%" }}
              >
                <Card
                  value='c'
                  level='BEGINNER'
                  title='미라클 모닝 30분'
                  subTitle={"유독 우울했던 오늘을 위해"}
                />
              </Accordion>
            </Tabs.Panel>
          </Tabs>
        </div>
      </Tabs>
    </BottomNavComponent>
  );
}

export default ConsultPage;
