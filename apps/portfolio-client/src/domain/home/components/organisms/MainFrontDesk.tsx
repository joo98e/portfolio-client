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

  width: 100%;
  height: 100%;
  padding: 0.5rem;
  box-sizing: border-box;

  &::before {
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
  background: ${(props) => props.bg || "#ccc"};
  opacity: 0.5;
`;

interface Props {}

const MainFrontDesk: FC<Props> = ({}) => {
  return (
    <Container>
      <JoouiHorizontallyContainer>
        <Slide bg="red">Slide 1</Slide>
        <Slide bg="blue">Slide 2</Slide>
        <Slide bg="green">Slide 3</Slide>
        <Slide bg="yellow">Slide 4</Slide>
        <Slide bg="pink">Slide 5</Slide>

        <MainContent>
          <JoouiTypography size={"h3"}>개발자 정태복</JoouiTypography>
        </MainContent>
      </JoouiHorizontallyContainer>
    </Container>
  );
};

export default MainFrontDesk;