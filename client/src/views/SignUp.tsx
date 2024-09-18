import { Form, InputField } from "@sinskiy/ui";
import Section from "../components/Section";
import Oauth from "./Oauth";

export default function SignUp() {
  return (
    <Section label="sign up" centered={true}>
      <Form>
        <InputField
          label="email"
          type="email"
          placeholder="sinskiy@proton.me"
          autoComplete="email"
          required
        />
        <InputField
          label="password"
          type="password"
          autoComplete="new-password"
          required
        />
        <InputField
          label="confirm password"
          id="confirm-password"
          type="password"
          autoComplete="new-password"
          required
        />
      </Form>
      <Oauth />
    </Section>
  );
}
