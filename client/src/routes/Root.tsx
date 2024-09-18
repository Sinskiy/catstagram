import { Header } from "@sinskiy/ui";
import { Link, NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/login", children: "login" },
  { to: "/sign-up", children: "sign up" },
] as const;

export default function Root() {
  return (
    <main>
      <Header
        logo={
          <Link to="/" className="header__logo">
            sinskiy
          </Link>
        }
        navItems={links.map(({ children, ...props }) => (
          <NavLink {...props}>{children}</NavLink>
        ))}
        linkButtonIndex={1}
      />
      <Outlet />
    </main>
  );
}
