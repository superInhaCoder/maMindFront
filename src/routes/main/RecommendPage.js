import { Button, Container, Stack, Center, Group } from "@mantine/core";
import React from "react";
import {
  BrandGoogle,
  BrandKickstarter,
  Checks,
  X,
  ChartDots2,
} from "tabler-icons-react";
import { useNavigate } from "react-router-dom";

const RecommendPage = () => {
  const navigate = useNavigate();

  let testCard = (tag, description, title, color) => {
    return (
      <Stack
        spacing={0}
        className={`mb-3 cursor-pointer p-4 bg-[${color}] rounded-xl`}
      >
        <Stack align="center" className="mb-4 h-6 w-20 rounded-xl bg-white">
          <p className="text-xs text-center">{tag}</p>
        </Stack>
        <p className="text-sm">{description}</p>
        <p className="text-xl font-bold">{title}</p>
      </Stack>
    );
  };
  return (
    <>
      <Container className=" animate-fadeLessUp bg-white h-[100vh]" size={1200}>
        <Stack className="bg-[#CAC9FF]" />
        <Stack className="bg-[#9795E7]" />
        <Stack className="mx-2 h-[100vh]" spacing={0}>
          <p className="my-4 text-xl font-bold">😢 #지금 나의 우울을 위해</p>
          <Stack
            onClick={() => {
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
          {testCard(
            "START-UP",
            "유독 우울했던 오늘 하루를 위해",
            "MBTI 우울증 마주하기 검사",
            "#9795E7"
          )}
          <p className="my-4 text-xl font-bold">😵‍💫 #나의 불안 진단하기</p>
          {testCard(
            "2nd-Test",
            "유독 우울했던 오늘 하루를 위해",
            "자존감 검사",
            "#CAC9FF"
          )}
          {testCard(
            "START-UP",
            "내일을 향한 발걸음",
            "불안환경 발견 심리 검사",
            "#9795E7"
          )}
          <p className="my-4 text-xl font-bold">🐡 #나의 스트레스 진단하기</p>
          <Group
            position="center"
            className="flex items-center justify-center cursor-pointer h-16 w-16 rounded-full bg-[#CAC9FF] shadow-lg fixed right-6 bottom-10"
          >
            <ChartDots2 />
          </Group>
        </Stack>
      </Container>
    </>
  );
};

export default RecommendPage;
