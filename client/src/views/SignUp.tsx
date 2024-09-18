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

export default function SignUp() {
  return (
    <Section>
      <h1 className="main-heading">sign up</h1>
      <Form>
        <InputField
          label="email"
          type="email"
          placeholder="john doe"
          required
        />
        <InputField label="password" type="password" required />
        <InputField
          label="confirm password"
          id="confirm-password"
          type="password"
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
