import { Button, Container, Stack, Center } from "@mantine/core";
import React from "react";
import GoogleLoginComponent from "../components/GoogleLogin";
import { BrandGoogle, BrandKickstarter, Checks, X } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container className="bg-white h-[100vh]" size={1200}>
        <Stack className="mx-2 h-[100vh]" spacing={0}>
          <Stack className="mt-16">
            <p className="m-0 p-0 font-bold text-xl">홀로 이겨내기 위한</p>
            <p className="p-0 font-bold text-2xl">나의 마음 전환 서비스</p>
          </Stack>
          <Center className="mt-6">
            <img src="/mind_login.svg" width={297} height={206} />
          </Center>
          <Stack spacing={0} className="ml-4 mt-2">
            <p className="text-md">
              <strong>&quot;mamind&quot;</strong>와 함께
            </p>
            <p className="text-md">점진적인 나의 삶을 위해</p>
          </Stack>
          <Stack className="mt-36">
            <GoogleLoginComponent />
            <Button
              onClick={() => {
                navigate("/trial");
              }}
              size="lg"
              radius="md"
              color="gray"
              leftIcon={<BrandGoogle />}
            >
              Google 계정으로 로그인
            </Button>
            <Button
              onClick={() => {
                navigate("/trial");
              }}
              size="lg"
              radius="md"
              color="yellow"
              leftIcon={<BrandKickstarter />}
            >
              카카오톡으로 로그인
            </Button>
          </Stack>
          <p className="mt-4 text-md text-gray-500 text-center">
            아직 계정이 없으신가요?
          </p>
        </Stack>
      </Container>
    </>
  );
};

export default LoginPage;
