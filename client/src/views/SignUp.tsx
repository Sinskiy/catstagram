// UI: types
// UI: input font-size
// @ts-expect-error lib
import { Button, Form, InputField } from "@sinskiy/ui";
import Hr from "../components/Hr";
import styled from "styled-components";

const Section = styled.section`
  max-width: 480px;
  margin: auto;
`;

const Oauth = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

// TODO: move to styled-components
export default function SignUp() {
  return (
    <Section>
      <h1 className="main-heading">sign up</h1>
      {/* UI: don't display errors if empty */}
      <Form>
        {/* UI: remove width: 100% */}
        {/* UI: investigate placeholder color */}
        <InputField
          label="email"
          type="email"
          placeholder="john doe"
          style={{ width: "auto" }}
          required
        />
        <InputField
          label="password"
          type="password"
          style={{ width: "auto" }}
          required
        />
        <InputField
          label="confirm password"
          id="confirm-password"
          type="password"
          style={{ width: "auto" }}
          required
        />
      </Form>
      <Hr>or</Hr>
      <Oauth>
        <Button themeColor="primary-container">Continue with Google</Button>
        <Button themeColor="primary-container">Continue with GitHub</Button>
      </Oauth>
    </Section>
  );
}
