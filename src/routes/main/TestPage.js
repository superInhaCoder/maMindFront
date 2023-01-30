import React, { useLayoutEffect } from "react";
import {
  Button,
  Container,
  Stack,
  Center,
  Slider,
  Progress,
  Loader,
  Group,
  Grid,
} from "@mantine/core";
import {
  BrandGoogle,
  BrandKickstarter,
  Checks,
  X,
  ChevronRight,
  CircleCheck,
  Router,
  ChevronLeft,
} from "tabler-icons-react";
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TEST } from "../../utils/status";
import { useRecoilState } from "recoil";
import BottomNavComponent from "../../components/pageForm/BottomNavComponent";
import { bottomMenuState } from "../../state/CommonData";
import { customAxios } from "../../config/api";

const TestPage = () => {
  const [testItem, setTestItem] = useState([]);

  const [sectionIndex, setSectionIndex] = useState(0);
  const MARKS = [
    { value: 0, label: "매우 아니다" },
    { value: 25, label: "다소 아니다" },
    { value: 50, label: "보통이다" },
    { value: 75, label: "다소 그렇다" },
    { value: 100, label: "매우 그렇다" },
  ];

  const [step, setStep] = useState(0);
  const [problemIdx, setProblemIdx] = useState(0);
  const [currentMenu, setCurrentMenu] = useRecoilState(bottomMenuState);
  useLayoutEffect(() => {
    setCurrentMenu(TEST);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    customAxios
      .post("/testitem", { type: 2 })
      .then((res) => {
        setTestItem(res.data);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }, []);

  return (
    <Container className="bg-white h-[100vh]" size={1200}>
      <Stack className="mx-2 h-[100vh]" spacing={0}>
        {step === 0 ? (
          <>
            <Stack
              onClick={() => {
                navigate("/recommend");
              }}
              className="mt-20"
            >
              <ChevronLeft />
            </Stack>
            <Stack className="mt-12">
              <p className="m-0 p-0 font-bold text-xl animate-fadeLessUp text-center">
                홀로 이겨내기 위한
              </p>
              <p className="p-0 font-bold text-2xl animate-fadeLessUp text-center">
                우울증 마주하기 테스트
              </p>
            </Stack>
            <Center className="mt-12">
              <img src="/mind_login.svg" width={253} height={176} />
            </Center>

            <Stack className="mt-6" spacing={0}>
              <p className="text-md text-center">
                요즘 파도처럼 출렁이는 내 감정
              </p>
              <p className="text-md text-center">MBTI 우울증 검사로 알아보기</p>
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
            <div className="bg-white h-[120px] sticky top-0 z-50 flex justify-between items-center">
              <Stack className="w-full">
                <Group position="apart" className="mt-8 w-full">
                  <ChevronLeft
                    onClick={() => {
                      navigate(-1);
                    }}
                    size={20}
                  />
                  <span className="text-[20px]">우울증 마주하기 검사</span>
                  <X size={20} />
                </Group>
                <Progress
                  className="mb-8"
                  value={((problemIdx + 1) * 100) / testItem.length}
                  size="xl"
                  color="violet"
                />
              </Stack>
            </div>

            <Center className="mt-12">
              <img src={"test/test1"} width={240} height={168} />
            </Center>
            {testItem.map(({ content }, i) => {
              return (
                <Stack key={i}>
                  {i >= sectionIndex && i < sectionIndex + 5 ? (
                    <Stack spacing={0}>
                      <Stack className="mt-6" spacing={0}>
                        <span>
                          <Grid className="w-full" mt={20}>
                            <Grid.Col span="content">
                              <span className=" text-violet-500 text-2xl font-bold">
                                Q. {problemIdx + parseInt(i) + 1}{" "}
                              </span>
                            </Grid.Col>
                            <Grid.Col span="auto">
                              <span className="mt-4 text-md text-center font-bold text-lg animate-fadeLessUp">
                                {(testItem[i] || { content: "" }).content}
                              </span>
                            </Grid.Col>
                          </Grid>
                        </span>
                      </Stack>
                      <Slider
                        label={(val) =>
                          MARKS.find((mark) => mark.value === val).label
                        }
                        thumbSize={16}
                        defaultValue={50}
                        size="xl"
                        step={25}
                        showLabelOnHover={false}
                        color="violet"
                      />
                      <Group position="apart">
                        <span className="text-md font-bold">매우 아니다</span>
                        <span className="text-md font-bold">매우 그렇다</span>
                      </Group>
                    </Stack>
                  ) : (
                    <></>
                  )}
                </Stack>
              );
            })}
            <Stack className="mt-32">
              <Button
                className="shadow-xl"
                onClick={() => {
                  if (problemIdx === testItem.length - 1) {
                    setStep(2);
                    setTimeout(() => {
                      setStep(3);
                      setTimeout(() => {
                        navigate("/recommend");
                      }, 600);
                    }, 1000);
                  } else {
                    setProblemIdx(problemIdx + 5);
                    window.scrollTo(0, 0);
                  }
                }}
                size="xl"
                radius="md"
                color="violet"
              >
                {problemIdx === testItem.length - 1 ? "완료하기" : "다음문항"}
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

export default TestPage;
