import React, { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useSetRecoilState } from "recoil";
import { newUserState } from "../state/UserData";
import { customAxios } from "../config/api";

const GoogleLoginComponent = () => {
  const setNewUserState = useSetRecoilState(newUserState);

  const googleLoginSuccess = (credentialResponse) => {
    customAxios
      .post(`/login/google`, {
        token: credentialResponse.credential,
      })
      .then((res) => {
        console.log(res);

        customAxios.defaults.headers.common[
          "Authorization"
        ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1NjYxOTI5LCJpYXQiOjE2NzUwNTcxMjksImp0aSI6ImM1Y2U3MjFmM2ZjYjQ3NjY4ODY5Y2FiZmJiNDcwMGJhIiwiaWQiOiJlODNiMzIwZi1hZmZmLTQ4MzgtYmEzNy1iODk3NDNmNmNiODkifQ.I9zQT4Le41kTcbNN3ePrKv7e7Rks5O7bKNklP3_9Ju0`;
        // `Bearer ${res.data.access}`;

        setNewUserState(res.data.newUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={googleLoginSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleLoginComponent;
