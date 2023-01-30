import { Accordion, Stack, Tabs } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { BorderRadius } from "tabler-icons-react";
import BottomNavComponent from "../../components/pageForm/BottomNavComponent";
import { bottomMenuState } from "../../state/CommonData";
import { GOAL } from "../../utils/status";
import TodayGoal, { Row } from "./goal/TodayGoal";

const TopNavContainer = styled.div`
  height: 116px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;
  border-bottom: #e8e8e8 2px solid;
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Bar = styled.div`
  height: 22.5px;
  width: 2px;
  background-color: black;
`;

const SpaceBetween = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
`;

const GoalPage = () => {
  const [currentMenu, setCurrentMenu] = useRecoilState(bottomMenuState);
  const [activeTab, setActiveTab] = useState("today");

  useLayoutEffect(() => {
    setCurrentMenu(GOAL);
  }, []);

  return (
    <BottomNavComponent>
      <Body>
        <Tabs value={activeTab} variant='pills' onTabChange={setActiveTab}>
          <TopNavContainer>
            <Tabs.List>
              <SpaceBetween>
                <Row>
                  <Tabs.Tab
                    value='today'
                    style={{
                      padding: 0,
                      paddingRight: 7,
                      backgroundColor: "#FFFFFF",
                      color: activeTab === "today" ? "#130F0F" : "#8D8D8D",
                      fontWeight: 700,
                      fontSize: 20,
                    }}
                  >
                    오늘의 목표
                  </Tabs.Tab>
                  <Bar />
                  <Tabs.Tab
                    value='my'
                    style={{
                      padding: 0,
                      paddingLeft: 7,
                      backgroundColor: "#FFFFFF",
                      color: activeTab === "my" ? "#130F0F" : "#8D8D8D",
                      fontWeight: 700,
                      fontSize: 20,
                    }}
                  >
                    내 목표
                  </Tabs.Tab>
                </Row>
                <img src={"icon/search_icon.svg"} width={30} height={30} />
              </SpaceBetween>
            </Tabs.List>
          </TopNavContainer>

          <Tabs.Panel value='today' pt='xs'>
            <TodayGoal />
          </Tabs.Panel>

          <Tabs.Panel value='my' pt='xs'>
            Messages tab content
          </Tabs.Panel>
        </Tabs>
      </Body>
    </BottomNavComponent>
  );
};

export default GoalPage;
