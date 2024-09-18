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
          placeholder="john doe"
          required
        />
        <InputField label="password" type="password" required />
      </Form>
      <Oauth />
      {/* TODO: add "or sign up" */}
    </Section>
  );
}
