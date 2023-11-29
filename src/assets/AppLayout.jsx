import styled from "styled-components";
import Map from "./components/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Menu from "./components/Menu";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
`;

const StyledAppLayout = styled.div`
  position: relative;
  width: var(--initial-width);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

function AppLayout() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <AppWrapper>
        <StyledAppLayout>
          <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
          <Header showMenu={showMenu} setShowMenu={setShowMenu} />
          <Map />
          <Footer />
        </StyledAppLayout>
      </AppWrapper>
    </>
  );
}

export default AppLayout;
