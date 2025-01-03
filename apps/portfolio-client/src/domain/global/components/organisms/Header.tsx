"use client";

import { FC } from "react";
import styled from "@emotion/styled";

const Container = styled.header`
  display: flex;
  min-height: 40px;
`;

interface Props {}

const Header: FC<Props> = ({}) => {
  return <Container></Container>;
};

export default Header;
