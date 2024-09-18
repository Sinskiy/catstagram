import { Button } from "@sinskiy/ui";
import styled from "styled-components";
import Hr from "../components/Hr";
import GithubIcon from "../icons/GithubIcon";
import GoogleIcon from "../icons/GoogleIcon";
import { ReactElement, SVGAttributes } from "react";

const Styled = styled.div`
  width: 100%;
  display: flex;
  justify-content: stretch;
  gap: 0.5rem;
  & button {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;

export default function Oauth() {
  return (
    <>
      <Hr>or</Hr>
      <Styled>
        <OauthButton Icon={GithubIcon} name="github" />
        <OauthButton Icon={GoogleIcon} name="google" />
      </Styled>
    </>
  );
}

const imgProps = {
  width: 24,
  height: 24,
};

interface OauthButtonProps {
  Icon: ({ ...props }: SVGAttributes<SVGElement>) => ReactElement;
  name: string;
}

function OauthButton({ Icon, name }: OauthButtonProps) {
  return (
    <>
      <Button
        aria-label={`sign in with ${name}`}
        themeColor="primary-container"
      >
        <Icon {...imgProps} />
      </Button>
    </>
  );
}
