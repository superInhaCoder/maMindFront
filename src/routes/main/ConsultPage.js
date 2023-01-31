import { Carousel } from "@mantine/carousel";
import { Accordion, Center, Group, Tabs } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { EmptyBox } from "../../components/Component";
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

  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const CardBox = styled.div`
    width: 222px;
    height: 264;
    border-radius: 12px;
    background-color: ${(props) => props.color};
  `;

  const SmallText = styled.div`
    margin-left: 8px;
    margin-bottom: 10px;
    font-size: 16px;
    font-family: HanSanBold;
  `;

  const Row = styled.div`
    margin-top: 30px;
    line-height: 36px;
    height: 36px;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  `;

  const navigate = useNavigate();

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
        <Row style={{ marginLeft: "8%" }}>
          <img src='icon/bright _button.svg' />
          <SmallText>최근 상담 이력이 많아진 상담사 입니다.</SmallText>
        </Row>
        <Carousel
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          // dragFree
          // withIndicators
          // height={270}
          // slideSize='70%'
          // slideGap='lg'
          // slidesToScroll={1}
          slideSize='70%'
          height={270}
          slideGap='lg'
          controlsOffset='xl'
          controlSize={27}
        >
          <Carousel.Slide size={"100%"}>
            <Center>
              <img
                src='icon/people_01.svg'
                style={{ height: "264px" }}
                onClick={() => {
                  navigate("/consultResult");
                }}
              />
            </Center>
          </Carousel.Slide>
          <Carousel.Slide size={"100%"}>
            <Center>
              <img
                src='icon/people_02.svg'
                style={{ height: 264 }}
                onClick={() => {
                  navigate("/consultResult");
                }}
              />
            </Center>
          </Carousel.Slide>
        </Carousel>
        <EmptyBox height={"20px"} />
        <div>
          <Tabs
            color='violet.5'
            variant='pills'
            radius='xl'
            defaultValue='맞춤추천'
          >
            <CategoryBox>
              <Tabs.List>
                <Tabs.Tab
                  value='맞춤추천'
                  style={{
                    fontWeight: 16,
                    fontWeight: 700,
                    border: "2px solid #C1C1C1",
                    padding: "8px 12px",
                    marginRight: 10,
                  }}
                >
                  맞춤추천
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

            <Tabs.Panel value='맞춤추천' pt='xs'>
              <img
                src='icon/people_03.svg'
                style={{ margin: "15px auto" }}
                onClick={() => {
                  navigate("/consultResult");
                }}
              />
              <img
                src='icon/people_04.svg'
                style={{ margin: "15px auto" }}
                onClick={() => {
                  navigate("/consultResult");
                }}
              />
            </Tabs.Panel>

            <Tabs.Panel value='불안' pt='xs'>
              <img
                src='icon/people_03.svg'
                style={{ margin: "15px auto" }}
                onClick={() => {
                  navigate("/consultResult");
                }}
              />
              <img
                src='icon/people_04.svg'
                style={{ margin: "15px auto" }}
                onClick={() => {
                  navigate("/consultResult");
                }}
              />
            </Tabs.Panel>

            <Tabs.Panel value='걱정' pt='xs'>
              <img
                src='icon/people_03.svg'
                style={{ margin: "15px auto" }}
                onClick={() => {
                  navigate("/consultResult");
                }}
              />
              <img
                src='icon/people_04.svg'
                style={{ margin: "15px auto" }}
                onClick={() => {
                  navigate("/consultResult");
                }}
              />
            </Tabs.Panel>
            <Tabs.Panel value='스트레스' pt='xs'>
              <img
                src='icon/people_03.svg'
                style={{ margin: "15px auto" }}
                onClick={() => {
                  navigate("/consultResult");
                }}
              />
              <img
                src='icon/people_04.svg'
                style={{ margin: "15px auto" }}
                onClick={() => {
                  navigate("/consultResult");
                }}
              />
            </Tabs.Panel>
          </Tabs>
        </div>
      </Tabs>
    </BottomNavComponent>
  );
}

export default ConsultPage;
