import { PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1.75rem 0;
  position: relative;
`;

const Line = styled.hr`
  margin: 0;
`;

const Text = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
  background-color: var(--background);
  padding: 0 1rem;
`;

export default function Hr({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <Line />
      <Text>{children}</Text>
    </Wrapper>
  );
}
