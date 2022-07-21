import Header from "../components/Header";
import ContentStyle from "../components/ContentStyle";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Home = () => {
  const requestContent = useSelector((state) => state.content.content);

  return (
    <>
      <Header />
      <ContentBox>
        {requestContent &&
          requestContent.map((el) => (
            <ContentStyle key={Date.now() + Math.random() * 100} props={el} />
          ))}
      </ContentBox>
    </>
  );
};

export default Home;

export const ContentBox = styled.div`
  margin: auto;
  margin-top: 10rem;
  width: 70vw;
  height: 80vh;
`;
