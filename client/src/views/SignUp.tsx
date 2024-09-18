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
      <Oauth />
    </Section>
  );
}
