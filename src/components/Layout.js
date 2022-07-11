import styled from "styled-components";
import Header from "./home/Header";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Base = styled.div`
  width: 98vw;
  height: 93vh;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.main`
  width: 100%;
  height: 100%;
`;

function Layout({ children }) {
  const isMobile = useMediaQuery({
    query: "(max-width:600px)",
  });
  return (
    <Base>
      {isMobile ? null : (
        <ContentBox>
          <Header />
          <Content>{children}</Content>
        </ContentBox>
      )}
    </Base>
  );
}

export default Layout;
