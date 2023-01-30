import React, { useEffect, useLayoutEffect } from "react";
import { useRecoilState } from "recoil";
import BottomNavComponent from "../../components/pageForm/BottomNavComponent";
import { bottomMenuState } from "../../state/CommonData";
import { CONSULT } from "../../utils/status";

function ConsultPage() {
  const [currentMenu, setCurrentMenu] = useRecoilState(bottomMenuState);
  useLayoutEffect(() => {
    setCurrentMenu(CONSULT);
  }, []);
  return <BottomNavComponent>ConsultPage</BottomNavComponent>;
}

export default ConsultPage;
