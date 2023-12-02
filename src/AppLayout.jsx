import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";

// const AppWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   background-color: #ffffff;
// `;

const StyledAppLayout = styled.div`
  width: var(--initial-width);
  justify-content: center;
`;

function AppLayout() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <StyledAppLayout>
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <Outlet />
        <Footer />
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
