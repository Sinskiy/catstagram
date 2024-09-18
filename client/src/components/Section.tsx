import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface SectionProps {
  children: ReactNode;
  label?: string;
  centered?: boolean;
}

const Styled = styled.section<{ $centered?: boolean }>`
  ${(props) =>
    props.$centered &&
    css`
      max-width: 360px;
      margin: auto;
    `}
`;

export default function Section({
  children,
  label,
  centered = false,
}: SectionProps) {
  return (
    <Styled $centered={centered}>
      {label && <h1 className="main-heading">{label}</h1>}
      {children}
    </Styled>
  );
}
