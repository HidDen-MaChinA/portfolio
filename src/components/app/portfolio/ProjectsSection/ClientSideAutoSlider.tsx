"use client";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styled, { keyframes, css, Interpolation, ExecutionContext, FastOmit } from "styled-components";
import ComponentStyle from "styled-components/dist/models/ComponentStyle";

const GoingRightAnimation = styled.div`
    animation-name: ${(props:any) => (keyframes `${props.animation}`)};
    animation-duration: ${(props:any) => (css`${props.duration}`)};
    animation-iteration-count: infinite;
    &:hover{
      animation-play-state: paused;
    };
  `

export function ClientSideAutoSlider(props: {
  children?: ReactNode;
  itemNumber: number;
  eachWidth?: number;
  animationDuration?: string;
}) {
  const {children, animationDuration, eachWidth, itemNumber} = props;
  const width =  eachWidth || 100
  const goRight = `
    0%{translate: 0px;}
    50%{translate: ${(itemNumber - 2) *width * -1}px;}
    100%{translate: 0px;}
  `;
  ;
    return (
      <GoingRightAnimation animation={goRight} duration={animationDuration} style={{animationPlayState: itemNumber < 2 ? "paused" : "running"}} >
        <div className={`flex gap-1 duration-[3s]`}>{children}</div>
      </GoingRightAnimation>
    );
}
