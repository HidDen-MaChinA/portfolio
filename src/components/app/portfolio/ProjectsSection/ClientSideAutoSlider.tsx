"use client";
import { ReactNode } from "react";
import styled, { keyframes, css } from "styled-components";

export function ClientSideAutoSlider(props: {
  children?: ReactNode;
  itemNumber: number;
  eachWidth?: number;
}) {
  const {children, eachWidth, itemNumber} = props;
  const width =  eachWidth || 100
  const goRight = keyframes`
    0%{translate: 0px;}
    50%{translate: ${(props.itemNumber - 2) *width * -1}px;}
    100%{translate: 0px;}
  `;

  const GoingRightAnimation = styled.div`
    transition-duration: 4s;
    animation: ${goRight} 6s infinite;
  `;
  if (props.itemNumber < 2) {
    return <div className={`flex gap-1 duration-[3s]`}>{props.children}</div>;
  } else {
    return (
      <GoingRightAnimation>
        <div className={`flex gap-1 duration-[3s]`}>{props.children}</div>
      </GoingRightAnimation>
    );
  }
}
