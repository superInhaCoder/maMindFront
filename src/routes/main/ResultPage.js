import {
  Button,
  Container,
  Stack,
  Center,
  Group,
  Progress,
} from "@mantine/core";
import React from "react";
import {
  BrandGoogle,
  BrandKickstarter,
  Checks,
  X,
  ChartDots2,
  Search,
  ChevronLeft,
} from "tabler-icons-react";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const navigate = useNavigate();

  let testCard = (tag, description, title, color) => {
    return (
      <Stack
        spacing={0}
        className={`mb-3 cursor-pointer p-4 bg-[${color}] rounded-xl`}
      >
        <Stack
          align="center"
          justify="center"
          className="mb-4 h-6 w-20 rounded-xl bg-white"
        >
          <p className="text-xs text-center">{tag}</p>
        </Stack>
        <p className="text-sm">{description}</p>
        <p className="text-xl font-bold">{title}</p>
      </Stack>
    );
  };
  return (
    <>
      <div
        className="bg-white h-[90px] shadow-sm sticky top-0 z-50 flex justify-between items-center p-5 md:p-10"
        style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}
      >
        <Center className="w-full">
          <span className="text-[20px] font-semibold text-center mt-8">
            우울증 마주하기 검사
          </span>
        </Center>
      </div>
      <Stack className="h-[263px] bg-[#866EF4]">
        <Center className="my-auto">
          <img src="/result/result.svg" width={253} height={176} />
        </Center>
      </Stack>
      <Stack className="-mt-4 bg-white rounded-t-xl w-full">
        <Container className=" w-full animate-fadeLessUp " size={1200}>
          <Stack className="bg-[#CAC9FF]" />
          <Stack className="bg-[#9795E7]" />
          <Stack className="bg-[#85F3CC]" />
          <Stack className="bg-[#5BFFC5]" />
          <Stack className="bg-[#FFE287]" />
          <Stack className="bg-[#FFD75A]" />
          <Stack className="w-full mx-2" spacing={0}>
            <p className="my-4 text-lg font-semibold">
              우울증 자가 진단 테스트 결과
            </p>
            <Stack className="w-[19px] h-[5px] bg-[#9795E7]" />
            <Group className="mb-4" position="apart">
              <span className=" text-[24px] font-bold">나의 우울증 지수</span>
              <span className="mr-4 text-[30px] font-bold text-[#FFD75A]">
                {localStorage.getItem("score")}점
              </span>
            </Group>
            <p className="my-4 text-lg font-bold">
              요즘 우는 날이 많아지진 않았나요?
            </p>
            <p className="my-4 text-[16px]">
              최근 환경의 변화가 생긴것 같은데요.
              <br />한 때 지나가는 감정이라고 생각했지만 그렇지 않을 수 있어요.
              지나가는 감정들을 무시하고 돌려보내다 보면 언젠가 폭풍우처럼 몰려
              오는 경우가 있는 것 같습니다. <br />
              <br />
              상황을 온전하게 인지한다면 불안과 우울이 어디서 오는 것인지 알 수
              있을거에요. 함께 헤쳐나갈 수 있게 목표와 상황을 같이 떠올려
              봅시다.
            </p>
          </Stack>
          <Stack className="p-4 bg-[#F0F0F0] rounded-xl">
            <span className=" text-[24px] font-semibold">
              <span className="text-[#866EF4]">20대 남성</span> 풀무지님의
              <br />
              심리 상태는 평균보다 <br />
              <span className="text-[#866EF4]">9%</span> 안정적입니다.
            </span>
            <Stack mt={30} spacing={8}>
              <Stack spacing={4}>
                <Group position="apart">
                  <span className="text-[13px] font-bold">불안 지표</span>
                  <span className="text-[13px] font-bold">표준 이상</span>
                </Group>
                <Progress size={24} color="orange.4" value={75} />
              </Stack>
              <Stack spacing={4}>
                <Group position="apart">
                  <span className="text-[13px] font-bold">트라우마 지표</span>
                  <span className="text-[13px] font-bold">표준</span>
                </Group>
                <Progress size={24} color="green.3" value={50} />
              </Stack>
              <Stack spacing={4}>
                <Group position="apart">
                  <span className="text-[13px] font-bold">부정적 사고</span>
                  <span className="text-[13px] font-bold">표준 이하</span>
                </Group>
                <Progress size={24} color="violet" value={25} />
              </Stack>
            </Stack>
          </Stack>
          <p className="text-center text-[14px] mt-8 mb-[100px]">
            우울증 마주하기 검사를 바탕으로 <br /> 목표 설정 및 상담 솔루션을
            제공합니다.
          </p>
          <Stack className="sticky bottom-8">
            <Button
              onClick={() => {
                navigate("/consult");
              }}
              className="shadow-xl"
              size="xl"
              radius="md"
              color="gray"
            >
              상담 문의하기
            </Button>
            <Button
              onClick={() => {
                navigate("/recommend");
              }}
              className="shadow-xl"
              size="xl"
              radius="md"
              color="violet"
            >
              검사 완료
            </Button>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default ResultPage;
