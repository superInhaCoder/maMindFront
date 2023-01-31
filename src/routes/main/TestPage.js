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
  Radio,
  SegmentedControl,
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
  Minimize,
} from "tabler-icons-react";
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TEST } from "../../utils/status";
import { useRecoilState } from "recoil";
import BottomNavComponent from "../../components/pageForm/BottomNavComponent";
import { bottomMenuState } from "../../state/CommonData";
import { customAxios } from "../../config/api";

const TestPage = () => {
  let validation = () => {
    let flag = true;
    for (
      let i = sectionIndex * 5;
      i < Math.min((sectionIndex + 1) * 5, testItem.length);
      i++
    ) {
      if (isTouched[i] === false) {
        flag = false;
        return;
      }
    }
    return flag;
  };

  const [testItem, setTestItem] = useState([]);
  const imageList = [
    "/trial/test1.svg",
    "/trial/test2.svg",
    "/trial/test3.svg",
    "/trial/test4.svg",
  ];
  const [answer, setAnswer] = useState([
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  ]);
  const [isTouched, setIsTouched] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

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
    if (
      localStorage.getItem("testType") < 2 &&
      localStorage.getItem("testType") > 4
    )
      return;
    customAxios
      .post("/testitem", { type: 2 })
      .then((res) => {
        setTestItem(res.data);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }, [localStorage.getItem("testType")]);

  return (
    <Container className="bg-white" size={1200}>
      <Stack className="mx-2" spacing={0}>
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
                      if (sectionIndex !== 0) setSectionIndex(sectionIndex - 1);
                    }}
                    size={20}
                    color={sectionIndex === 0 ? "white" : "black"}
                  />
                  <span className="text-[20px]">우울증 마주하기 검사</span>
                  <X
                    onClick={() => {
                      navigate(-1);
                    }}
                    size={20}
                  />
                </Group>
                <Progress
                  className="mb-8"
                  value={((sectionIndex + 1) * 100 * 5) / testItem.length}
                  size="xl"
                  color="violet"
                />
              </Stack>
            </div>

            <Center className="mt-12">
              <img src={imageList[sectionIndex]} width={240} height={168} />
            </Center>
            {testItem.map(({ content }, i) => {
              return (
                <Stack key={i}>
                  {i >= sectionIndex * 5 && i < sectionIndex * 5 + 5 ? (
                    <Stack spacing={0}>
                      <Stack className="mt-6" spacing={0}>
                        <span>
                          <Grid className="w-full" mt={20}>
                            <Grid.Col span="content">
                              <span
                                className={`${
                                  isTouched[i] === false
                                    ? "text-gray-500"
                                    : "text-violet-500"
                                } text-2xl font-bold`}
                              >
                                Q. {i + 1}{" "}
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
                      <SegmentedControl
                        color={isTouched[i] === false ? "gray" : "violet"}
                        size="xl"
                        value={answer[i].toString()}
                        onChange={(value) => {
                          let changedAnswer = answer.map((cur, idx) => {
                            if (idx === i) return parseInt(value);
                            else return cur;
                          });
                          setAnswer(changedAnswer);
                          let changedIsTouched = isTouched.map((cur, idx) => {
                            if (idx === i) {
                              return true;
                            } else return cur;
                          });
                          setIsTouched(changedIsTouched);
                        }}
                        data={[
                          { label: "", value: "1" },
                          { label: "", value: "2" },
                          { label: "", value: "3" },
                          { label: "", value: "4" },
                          { label: "", value: "5" },
                        ]}
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
            <Stack className="h-[120px] w-full" />
            <Stack className="z-50 sticky bottom-8">
              <Button
                className="shadow-xl"
                onClick={() => {
                  if ((sectionIndex + 1) * 5 >= testItem.length) {
                    let sum = 0;
                    for (let j = 0; j < 20; j++) {
                      sum += answer[j];
                    }
                    localStorage.setItem("score", sum);
                    customAxios
                      .post("/user/check", {
                        value: answer,
                        selected_date: "2023-01-31",
                        test_list_id: localStorage.getItem("testType"),
                      })
                      .then((res) => {
                        setTestItem(res.data);
                      })
                      .catch((err) => {
                        alert(err);
                        console.log(err);
                      });
                    setStep(2);
                    setTimeout(() => {
                      setStep(3);
                      setTimeout(() => {
                        navigate("/result");
                      }, 600);
                    }, 1000);
                  } else {
                    setSectionIndex(sectionIndex + 1);
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }, 50);
                  }
                }}
                size="xl"
                radius="md"
                color="violet"
                disabled={!validation()}
              >
                {(sectionIndex + 1) * 5 >= testItem.length
                  ? "완료하기"
                  : "다음문항"}
              </Button>
            </Stack>
          </>
        ) : (
          <></>
        )}
        {step >= 2 ? (
          <Stack className="flex  justify-center">
            <Stack className="mt-[380px]">
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
