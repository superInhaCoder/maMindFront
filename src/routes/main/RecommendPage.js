import { Button, Container, Stack, Center, Group } from "@mantine/core";
import React from "react";
import {
  BrandGoogle,
  BrandKickstarter,
  Checks,
  X,
  ChartDots2,
  Search,
} from "tabler-icons-react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import BottomNavComponent from "../../components/pageForm/BottomNavComponent";

const RecommendPage = () => {
  const navigate = useNavigate();

  let testCard = (tag, description, title, color) => {
    return (
      <Stack
        spacing={0}
        className={`mb-3 cursor-pointer p-4 bg-[${color}] rounded-xl`}
      >
        <Stack
          align='center'
          justify='center'
          className='mb-4 h-6 w-20 rounded-xl bg-white'
        >
          <p className='text-xs text-center'>{tag}</p>
        </Stack>
        <p className='text-sm'>{description}</p>
        <p className='text-xl font-bold'>{title}</p>
      </Stack>
    );
  };
  return (
    <BottomNavComponent>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          margin: 0,
        }}
      >
        <div
          className='bg-white h-[90px] shadow-sm sticky top-0 z-50 flex justify-between items-center p-5 md:p-10'
          style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}
        >
          <Group className='mx-2 mt-8 h-full w-full' position='apart'>
            <span className='text-[24px] font-bold'>내 감정 마주하기</span>
            <Search size={24} />
          </Group>
        </div>
        <Container
          className=' animate-fadeLessUp bg-white'
          size={1200}
          style={{ marginLeft: "-2px", marginRight: "-2px" }}
        >
          <Stack className='bg-[#CAC9FF]' />
          <Stack className='bg-[#9795E7]' />
          <Stack className='bg-[#85F3CC]' />
          <Stack className='bg-[#5BFFC5]' />
          <Stack className='bg-[#FFE287]' />
          <Stack className='bg-[#FFD75A]' />
          <Stack className='mx-2 h-[100vh]' spacing={0}>
            <p className='my-4 text-xl font-bold'>😢 #지금 나의 우울을 위해</p>
            <Stack
              onClick={() => {
                localStorage.setItem("testType", 2);
                navigate("/test");
              }}
            >
              {testCard(
                "BEGINNER",
                "유독 우울했던 오늘 하루를 위해",
                "우울증 마주하기 검사",
                "#CAC9FF"
              )}
            </Stack>
            <Stack
              onClick={() => {
                localStorage.setItem("testType", 2);
                navigate("/test");
              }}
            >
              {testCard(
                "START-UP",
                "유독 우울했던 오늘 하루를 위해",
                "MBTI 우울증 마주하기 검사",
                "#9795E7"
              )}
            </Stack>
            <p className='my-4 text-xl font-bold'>😵‍💫 #나의 불안 진단하기</p>
            <Stack
              onClick={() => {
                localStorage.setItem("testType", 2);
                navigate("/test");
              }}
            >
              {testCard(
                "2nd-Test",
                "유독 우울했던 오늘 하루를 위해",
                "자존감 검사",
                "#85F3CC"
              )}
            </Stack>
            <Stack
              onClick={() => {
                localStorage.setItem("testType", 2);
                navigate("/test");
              }}
            >
              {testCard(
                "START-UP",
                "내일을 향한 발걸음",
                "불안 환경 발견 심리 검사",
                "#5BFFC5"
              )}
            </Stack>

            <p className='my-4 text-xl font-bold'>🐡 #나의 스트레스 진단하기</p>
            <Stack
              onClick={() => {
                localStorage.setItem("testType", 2);
                navigate("/test");
              }}
            >
              {testCard(
                "START-UP",
                "내일을 향한 발걸음",
                "불안 환경 발견 검사",
                "#FFE287"
              )}
            </Stack>

            <Stack
              onClick={() => {
                localStorage.setItem("testType", 2);
                navigate("/test");
              }}
            >
              {testCard(
                "START-UP",
                "내일을 향한 발걸음",
                "스트레스 환경 발견 테스트",
                "#FFD75A"
              )}
            </Stack>
            <Group
              position='center'
              className='flex items-center justify-center cursor-pointer h-16 w-16 rounded-full bg-white shadow-lg fixed right-6 bottom-10'
            >
              <ChartDots2 />
            </Group>
          </Stack>
        </Container>
      </div>
    </BottomNavComponent>
  );
};

export default RecommendPage;
