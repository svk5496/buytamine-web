import styled from "styled-components";
import Header from "./header/Header";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Content = styled.main`
  max-width: 1000px;
  margin: 0px auto;
  width: 100%;
`;

function Layout({ children }) {
  const isMobile = useMediaQuery({
    query: "(max-width:600px)",
  });
  return (
    <>
      {isMobile ? null : (
        <div>
          <Header />
          <Content>{children}</Content>
        </div>
      )}
    </>
  );
}

export default Layout;
