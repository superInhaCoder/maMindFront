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
        ] = `Bearer ${res.data.access}`;

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
