"use client";

import { FC, ReactNode, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";

const Container = styled.div<{ height: number; containerStyle?: SerializedStyles }>`
  position: relative;
  height: calc(${(props) => props.height + "vw"});

  ${(props) => props.containerStyle && props.containerStyle};
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  max-height: 100vh;
  overflow: hidden;
`;

const HorizontalyWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  & > * {
    width: 100vw;
    flex-shrink: 0;
  }
`;

interface Props {
  containerStyle?: SerializedStyles;
  children: ReactNode | ReactNode[];
}

const JoouiHorizontallyContainer: FC<Props> = ({ containerStyle, children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const [totalHeight, setTotalHeight] = useState<number>(0);

  const childrens = Array.isArray(children) ? children : [children];

  const handleScroll = () => {
    if (!scrollContainerRef.current || !containerRef.current) return;

    const currentY = window.scrollY;
    const firstScreenHeight = scrollContainerRef.current.getBoundingClientRect().width * 0.25;

    const scrollLeftPosition = currentY - firstScreenHeight;

    scrollContainerRef.current.scrollLeft = scrollLeftPosition;
  };

  useEffect(() => {
    setTotalHeight((childrens.length - 1) * 100);

    const isSingleSlide = childrens.length === 1;
    if (isSingleSlide) return;

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [childrens.length]);

  return (
    <Container ref={containerRef} height={totalHeight}>
      <StickyWrapper>
        <HorizontalyWrapper ref={scrollContainerRef}>{children}</HorizontalyWrapper>
      </StickyWrapper>
    </Container>
  );
};

export default JoouiHorizontallyContainer;
