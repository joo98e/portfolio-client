"use client";

import { FC } from "react";
import styled from "@emotion/styled";
import HorizontallyContainer from "@/src/common/components/organisms/HorizontallyContainer";

const Container = styled.div`
  height: 400vh;
`;

const Section = styled.div<{
  bg: string;
}>`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.bg || "#fff"};
`;

const Slide = styled.div<{
  bg: string;
}>`
  display: flex;
  flex: 0 0 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.bg || "#ccc"};
  font-size: 2rem;
  color: white;
`;

interface Props {}

const MainPage: FC<Props> = ({}) => {
  return (
    <Container>
      <Section bg="#6c5ce7">Vertical Section 1</Section>

      <HorizontallyContainer>
        <Slide bg="red">Slide 1</Slide>
        <Slide bg="blue">Slide 2</Slide>
        <Slide bg="green">Slide 3</Slide>
        <Slide bg="yellow">Slide 4</Slide>
        <Slide bg="pink">Slide 5</Slide>
      </HorizontallyContainer>

      <Section bg="#fdcb6e">Vertical Section 2</Section>
    </Container>
  );
};

export default MainPage;
