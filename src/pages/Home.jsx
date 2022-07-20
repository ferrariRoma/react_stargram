import Header from "../components/Header";
import ContentStyle from "../components/ContentStyle";
import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Header />
      <ContentBox>
        <ContentStyle />
        <ContentStyle />
        <ContentStyle />
      </ContentBox>
    </>
  );
};

export default Home;

const ContentBox = styled.div`
  margin: auto;
  margin-top: 10rem;
  width: 70vw;
  height: 80vh;
  ${"" /* background-color: blue; */}
`;
