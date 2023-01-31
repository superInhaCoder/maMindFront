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
  Star,
} from "tabler-icons-react";
import { useNavigate } from "react-router-dom";

const ConsultResultPage = () => {
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
          <img src="/lee_sa_rang.svg" width={253} height={176} />
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
              심리 상담 경험 최근 3개월 300회
            </p>
            <Stack className="w-[19px] h-[5px] bg-[#9795E7]" />
            <Group className="mb-4" position="apart">
              <span className=" text-[24px] font-bold">이 사랑 상담사님</span>
              <Group className="mr-6">
                <Star color="orange" />
                <span className="text-lg">4.65</span>
              </Group>
            </Group>
            <p className="my-4 text-lg font-bold">
              우울증 전문 상담사 이사랑 상담사님
            </p>
            <p className="my-4 text-[16px] font-normal">
              안녕하세요. 여러분의 잃어버린 감정을 찾아 떠나는 여정가 이사랑
              상담사 입니다.
              <br /> 내면 깊숙히 여행할 수 있는 지도를 같이 그려보아요. 상담을
              진행하면서 자신의 내면을 더 깊숙하게 바라보는 시간을 가집니다.
              더욱더 내재화된 경험과 몰입도 있는 상담을 제공합니다. 저와
              함께한다면 마음껏 당신이라는 도화지를 자랑 할 수 있을 겁니다.
            </p>
          </Stack>
          <Stack className="p-4 bg-[#F0F0F0] rounded-xl">
            <span className=" text-[24px] font-semibold">
              <span className="text-[#866EF4]">20대 남성</span> 풀무지님의
              <br />
              리뷰 점수는 <br />
              평균<span className="text-[#866EF4]">4.78 </span>입니다.
            </span>
            <Stack className="h-6 w-16 bg-yellow-200 rounded-xl">
              <span className="text-center">BEST</span>
            </Stack>
            <p className="my-4 text-[16px] font-normal">
              혼자 견디기 힘들고 도움이 필요하다고 생각했을 때 선생님의 도움을
              받고 있습니다. 새로운 경로 를 제공 받는 느낌이라 더욱 신뢰하게
              됩니다.
            </p>
          </Stack>
          <p className=" text-[20px] mt-8">마마인드 활동 내역</p>
          <p className="text-center text-violet-500 text-[24px] mt-[10px]">
            2,000 회 이상 활동 이력
            <br /> 우수 후기 상담사 선정
          </p>
          <p className=" text-[20px] mb-4 mt-8 ">상담사 공인 자격</p>
          <p className="ml-8 text-[20px] ">전문문학 치료사</p>
          <p className="ml-8 text-[20px] font-light ">상담 경력 5년 이상</p>
          <p className="ml-8 text-[20px] font-light">
            문학 치료학과 문학치료박사 졸업
          </p>
          <p className="ml-8 text-[20px] font-light ">
            현재) 맘마인드 전속 상담사
          </p>
          <p className="ml-8 text-[20px] font-light ">
            현재) 청소년교육원 집단 상담
          </p>
          <Stack className="h-36"></Stack>
          <Stack className="sticky bottom-8">
            <Button
              onClick={() => {
                navigate("/consult");
              }}
              className="shadow-xl"
              size="xl"
              radius="md"
              color="violet"
            >
              전문가와 문답하기
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
              전화 상담하기
            </Button>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default ConsultResultPage;
