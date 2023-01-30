import { atom } from "recoil";

// 신규 가입한 유저인지 여부
export const newUserState = atom({
  key: "NewUser",
  default: false,
});
