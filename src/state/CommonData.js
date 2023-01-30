import { atom } from "recoil";
import { GOAL } from "../utils/status";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// bottom navigation
export const bottomMenuState = atom({
  key: "bottomMenu",
  default: GOAL,
  effects_UNSTABLE: [persistAtom],
});
