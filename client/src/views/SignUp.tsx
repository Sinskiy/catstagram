// UI: types
// UI: input font-size
// @ts-expect-error lib
import { Button, Form, InputField } from "@sinskiy/ui";
import Hr from "../components/Hr";

// TODO: move to styled-components
export default function SignUp() {
  return (
    <section style={{ maxWidth: 480, margin: "auto" }}>
      <h1 style={{ fontSize: "2rem" }}>sign up</h1>
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
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Button themeColor="primary-container">Continue with Google</Button>
        <Button themeColor="primary-container">Continue with GitHub</Button>
      </div>
    </section>
  );
}
