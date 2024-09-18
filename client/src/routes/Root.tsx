import { Header } from "@sinskiy/ui";
import { Link, NavLink, Outlet } from "react-router-dom";

const links = [
  { href: "/sign-up", label: "sign up" },
  { href: "/login", label: "login" },
];

export default function Root() {
  return (
    <main>
      <Header
        logo={
          <Link to="/" className="header__logo">
            sinskiy
          </Link>
        }
        navItems={links.map((link) => (
          <NavLink to={link.href}>{link.label}</NavLink>
        ))}
      />
      <Outlet />
    </main>
  );
}
