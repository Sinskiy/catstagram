import { Button } from "@sinskiy/ui";
import styled from "styled-components";
import Hr from "../components/Hr";

const Styled = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export default function Oauth() {
  return (
    <>
      <Hr>or</Hr>
      <Styled>
        <Button themeColor="primary-container">Continue with Google</Button>
        <Button themeColor="primary-container">Continue with GitHub</Button>
      </Styled>
    </>
  );
}
