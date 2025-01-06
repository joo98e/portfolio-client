import { FC } from "react";
import styled from "@emotion/styled";
import HorizontallyContainer from "@/src/common/components/organisms/HorizontallyContainer";

const Container = styled.div`
  position: relative;
`;

const MainContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Slide = styled.div<{
  bg: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.bg || "#ccc"};
  opacity: 0.5;
`;

interface Props {}

const MainFrontDesk: FC<Props> = ({}) => {
  return (
    <Container>
      <HorizontallyContainer>
        <MainContent>아년ㅇ하세요</MainContent>
        <Slide bg="red">Slide 1</Slide>
        <Slide bg="blue">Slide 2</Slide>
        <Slide bg="green">Slide 3</Slide>
        <Slide bg="yellow">Slide 4</Slide>
        <Slide bg="pink">Slide 5</Slide>
      </HorizontallyContainer>
    </Container>
  );
};

export default MainFrontDesk;
