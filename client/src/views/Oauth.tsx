import { Button } from "@sinskiy/ui";
import styled from "styled-components";
import Hr from "../components/Hr";
import GithubIcon from "../icons/GithubIcon";
import GoogleIcon from "../icons/GoogleIcon";

const Styled = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export default function Oauth() {
  const imgProps = {
    alt: "",
    width: 24,
    height: 24,
  };
  return (
    <>
      <Hr>or</Hr>
      <Styled>
        <Button themeColor="primary-container" aria-label="sign in with google">
          <GithubIcon {...imgProps} />
        </Button>
        <Button themeColor="primary-container" aria-label="sign in with google">
          <GoogleIcon {...imgProps} />
        </Button>
      </Styled>
    </>
  );
}
