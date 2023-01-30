import React, { useEffect, useLayoutEffect } from "react";
import BottomNavComponent from "../../components/pageForm/BottomNavComponent";
import { bottomMenuState } from "../../state/CommonData";
import { TEST } from "../../utils/status";
import { useRecoilState } from "recoil";

const TestPage = () => {
  const [currentMenu, setCurrentMenu] = useRecoilState(bottomMenuState);
  useLayoutEffect(() => {
    setCurrentMenu(TEST)
  }, [])
  
  return <BottomNavComponent>TestPage</BottomNavComponent>;
};

export default TestPage;
