"use client";

import { FC } from "react";
import styled from "@emotion/styled";
import MainFrontDesk from "@/src/domain/home/components/organisms/MainFrontDesk";

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
`;

interface Props {}

const MainTemplate: FC<Props> = ({}) => {
  return (
    <Container>
      <MainFrontDesk />
    </Container>
  );
};

export default MainTemplate;
