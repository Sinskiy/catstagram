import { Link } from "react-router-dom";
import styled from "styled-components";

const Styled = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export default function OtherAuth({ type }: { type: "login" | "sign up" }) {
  return (
    <Styled>
      {type === "sign up" && "don't"} have an account?{" "}
      <Link
        to={`/${type === "login" ? "login" : "sign-up"}`}
        className="primary-link"
      >
        {type}
      </Link>
    </Styled>
  );
}
