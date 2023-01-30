import React from "react";
import {
  Button,
  Container,
  Stack,
  Center,
  Slider,
  Progress,
  Loader,
} from "@mantine/core";
import {
  BrandGoogle,
  BrandKickstarter,
  Checks,
  X,
  ChevronRight,
  CircleCheck,
  Router,
} from "tabler-icons-react";
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TrialPage = () => {
  const [step, setStep] = useState(0);
  const [problemIdx, setProblemIdx] = useState(0);

  const navigate = useNavigate();

  const testDemo = [
    {
      image: "/trial/test1.svg",
      title: "나의 일상 속 우울함의 정도는 어느정도 인가요?",
      left: "우울함",
      right: "안정됨",
    },
    {
      image: "/trial/test2.svg",
      title: "나의 일상 속 불안함의 정도는 어느정도 인가요?",
      left: "불안함",
      right: "안정됨",
    },
    {
      image: "/trial/test3.svg",
      title: "나의 자존감은 얼마나 떨어진 상태인가요?",
      left: "낮음",
      right: "높음",
    },
    {
      image: "/trial/test4.svg",
      title: "오늘 같은 날 산책 나갈 기분일까요?",
      left: "낮음",
      right: "높음",
    },
  ];

  return (
    <Container className="bg-white h-[100vh]" size={1200}>
      <Stack className="mx-2 h-[100vh]" spacing={0}>
        {step === 0 ? (
          <>
            <Center className="mt-20">
              <img src="/onboarding_logo.svg" height={26} width={86} />
            </Center>
            <Stack className="mt-12">
              <p className="m-0 p-0 font-bold text-xl animate-fadeLessUp text-center">
                홀로 이겨내기 위한
              </p>
              <p className="p-0 font-bold text-2xl animate-fadeLessUp text-center">
                나의 감정 마주하기 테스트
              </p>
            </Stack>
            <Center className="mt-12">
              <img src="/mind_login.svg" width={253} height={176} />
            </Center>

            <Stack className="mt-6" spacing={0}>
              <p className="text-md text-center">
                요즘 파도처럼 출렁이는 내 감정
              </p>
              <p className="text-md text-center">간단한 테스트로 알아보기.</p>
            </Stack>
            <Stack className="mt-32">
              <Button
                onClick={() => {
                  setStep(1);
                }}
                rightIcon={<ChevronRight />}
                size="xl"
                radius="md"
                color="violet"
              >
                테스트 시작하기
              </Button>
            </Stack>
          </>
        ) : (
          <></>
        )}
        {step === 1 ? (
          <>
            <Stack className="mt-12">
              <p className="p-0 text-xl text-center">내 감정 마주하기 테스트</p>
              <Progress
                value={((problemIdx + 1) * 100) / testDemo.length}
                size="xl"
                color="violet"
                className="mx-6"
              ></Progress>
            </Stack>
            <Center className="mt-12">
              <img
                src={(testDemo[problemIdx] || { image: "" }).image}
                width={240}
                height={168}
              />
            </Center>

            <Stack className="mt-6" spacing={0}>
              <p className="text-center text-violet-500 text-2xl font-bold">
                Q. {problemIdx + 1}{" "}
              </p>
              <p className="mt-4 text-md text-center font-bold text-lg animate-fadeLessUp">
                {(testDemo[problemIdx] || { title: "" }).title}
              </p>
            </Stack>
            <Slider
              defaultValue={50}
              size="xl"
              className="mt-10"
              step={25}
              showLabelOnHover={false}
              color="violet"
              marks={[
                {
                  value: 0,
                  label: `매우 ${(testDemo[problemIdx] || { left: "" }).left}`,
                },
                {
                  value: 25,
                  label: `다소 ${(testDemo[problemIdx] || { left: "" }).left}`,
                },
                { value: 50, label: "보통" },
                {
                  value: 75,
                  label: `다소 ${
                    (testDemo[problemIdx] || { right: "" }).right
                  }`,
                },
                {
                  value: 100,
                  label: `매우 ${
                    (testDemo[problemIdx] || { right: "" }).right
                  }`,
                },
              ]}
            />
            <Stack className="mt-32">
              <Button
                className="shadow-xl"
                onClick={() => {
                  if (problemIdx === testDemo.length - 1) {
                    setStep(2);
                    setTimeout(() => {
                      setStep(3);
                      setTimeout(() => {
                        navigate("/recommend");
                      }, 600);
                    }, 1000);
                  } else setProblemIdx(problemIdx + 1);
                }}
                size="xl"
                radius="md"
                color="violet"
              >
                {problemIdx === testDemo.length - 1 ? "완료하기" : "계속하기"}
              </Button>
            </Stack>
          </>
        ) : (
          <></>
        )}
        {step >= 2 ? (
          <Stack className="flex items-center justify-center h-[100vh]">
            <Stack>
              <Center>
                <img src="/onboarding_logo.svg" width={145} height={44} />
              </Center>
              <Center>
                {step === 2 ? (
                  <Loader className="my-8" color="violet" size="md" />
                ) : (
                  <CircleCheck size={32} color="purple" />
                )}
              </Center>
              <p className="text-center text-md ">
                최근 감정을 마주하는 중입니다.
              </p>
            </Stack>
          </Stack>
        ) : (
          <></>
        )}
      </Stack>
    </Container>
  );
};

export default TrialPage;
