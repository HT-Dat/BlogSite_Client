import { NavLink } from "react-router-dom";
export default function LinkNavbar({ to, text, action, useIsActive }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "block py-2 pr-6 pl-4 text-white hover:bg-amber-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" +
        (isActive && !useIsActive
          ? " underline underline-offset-8 decoration-white "
          : "")
      }
      onClick={action}
      end
    >
      {text}
    </NavLink>
  );
}
