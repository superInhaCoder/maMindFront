import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// 오늘의 목표
// 우울
export const todayGoalDepressState = atom({
  key: "todayGoalDep",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 불안
export const todayGoalUnRestState = atom({
  key: "todayGoalUnRest",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 우울
export const todayGoalWorryState = atom({
  key: "todayGoalWorry",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 스트레스
export const todayGoalStressState = atom({
  key: "todayGoalStress",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 내 목표
export const myGoalState = atom({
  key: "myGoalStress",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 내 그래프
export const myGraphState = atom({
  key: "myGraph",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
