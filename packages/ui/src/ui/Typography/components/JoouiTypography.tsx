"use client";

import { FC } from "react";
import typographyLevels, {
  CommonTypographyKey,
  CommonTypographySpec,
} from "@joo98e/common/src/typography/typography";
import styled from "@emotion/styled";

const Span = styled.span<CommonTypographySpec>``;

type HTMLTagName = keyof HTMLElementTagNameMap;

interface Props {
  as?: HTMLTagName;
  size: CommonTypographyKey;
  children: string;
}

const JoouiTypography: FC<Props> = ({ as, size, children }) => {
  const spec = typographyLevels[size];

  const getHtmlTagName = (): HTMLTagName => {
    if (as) return as;

    switch (true) {
      case size === "h1":
      case size === "h2":
      case size === "h3":
      case size === "h4":
      case size === "h5":
      case size === "h6":
        return size;

      case size.includes("caption"):
        return "caption";

      default:
        return "p";
    }
  };

  return (
    <Span
      as={getHtmlTagName()}
      fontSize={spec.fontSize}
      fontWeight={spec.fontWeight}
      lineHeight={spec.lineHeight}
    >
      {children}
    </Span>
  );
};

export default JoouiTypography;
