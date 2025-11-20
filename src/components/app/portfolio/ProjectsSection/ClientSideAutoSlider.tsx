"use client";
import { ReactNode } from "react";
import styled, { keyframes, css } from "styled-components";

export function ClientSideAutoSlider(props: {
  children?: ReactNode;
  itemNumber: number;
  eachWidth?: number;
  animationDuration?: string;
}) {
  const {children, animationDuration, eachWidth, itemNumber} = props;
  const width =  eachWidth || 100
  const goRight = keyframes`
    0%{translate: 0px;}
    50%{translate: ${(itemNumber - 2) *width * -1}px;}
    100%{translate: 0px;}
  `;

  const GoingRightAnimation = styled.div`
    animation: ${goRight} ${animationDuration || "10s"} infinite;
    &:hover{
      animation-play-state: paused;
    };
  `;
  GoingRightAnimation.componentStyle
    return (
      <GoingRightAnimation style={{animationPlayState: itemNumber < 2 ? "paused" : "running"}} >
        <div className={`flex gap-1 duration-[3s]`}>{children}</div>
      </GoingRightAnimation>
    );
}
