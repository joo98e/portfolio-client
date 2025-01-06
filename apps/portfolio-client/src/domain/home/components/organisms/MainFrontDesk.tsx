import { FC } from "react";
import styled from "@emotion/styled";
import JoouiHorizontallyContainer from "@joo98e/ui-react/src/ui/Horizontally/components/organisms/JoouiHorizontallyContainer";
import JoouiTypography from "@joo98e/ui-react/src/ui/Typography/components/JoouiTypography";

const Container = styled.div`
  position: relative;
`;

const MainContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  height: 100%;
  padding: 0.5rem;
  box-sizing: border-box;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    background: url("/images/front-desk/profile-1.jpeg") center bottom no-repeat;
    background-size: cover;
    opacity: 0.5;
  }
`;

const Slide = styled.div<{
  bg: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${(props) => props.bg || "#ccc"};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: ${(props) => props.bg || "#ccc"};
  }
`;

interface Props {}

const MainFrontDesk: FC<Props> = ({}) => {
  return (
    <Container>
      <JoouiHorizontallyContainer>
        <Slide bg="darkslategray">
          <JoouiTypography size={"h1"}>A</JoouiTypography>
        </Slide>
        <Slide bg="skyblue">
          <JoouiTypography size={"h1"}>B</JoouiTypography>
        </Slide>
        <Slide bg="darkolivegreen">
          <JoouiTypography size={"h1"}>C</JoouiTypography>
        </Slide>
        <Slide bg="gray">
          <JoouiTypography size={"h1"}>D</JoouiTypography>
        </Slide>

        <MainContent>
          <JoouiTypography size={"h1"}>Frontend Developer</JoouiTypography>
          <JoouiTypography size={"h1"}>Joo98e</JoouiTypography>
        </MainContent>
      </JoouiHorizontallyContainer>
    </Container>
  );
};

export default MainFrontDesk;
