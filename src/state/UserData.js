import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// 신규 가입한 유저인지 여부
export const newUserState = atom({
  key: "NewUser",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
