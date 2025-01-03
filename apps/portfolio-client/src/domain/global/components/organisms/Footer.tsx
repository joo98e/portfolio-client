"use client";

import { FC } from "react";
import styled from "@emotion/styled";

const Container = styled.footer`
  display: flex;
  min-height: 40px;
`;

interface Props {}

const Footer: FC<Props> = ({}) => {
  return <Container></Container>;
};

export default Footer;
