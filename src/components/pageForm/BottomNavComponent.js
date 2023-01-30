import React from "react";
import styled from "styled-components";
import BottomNav from "../../navigation/BottomNavigator";

const Body = styled.div`
  display: flex;
  flex: 1;
`;

const BottomNavContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

function BottomNavComponent({ children }) {
  return (
    <Body>
      {children}
      <BottomNavContainer>
        <BottomNav />
      </BottomNavContainer>
    </Body>
  );
}

export default BottomNavComponent;
