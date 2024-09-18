import { Form, InputField } from "@sinskiy/ui";
import Section from "../components/Section";
import Oauth from "./Oauth";

export default function Login() {
  return (
    <Section label="login" centered={true}>
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
          autoComplete="current-password"
          required
        />
      </Form>
      <Oauth />
      {/* TODO: add "or sign up" */}
    </Section>
  );
}
