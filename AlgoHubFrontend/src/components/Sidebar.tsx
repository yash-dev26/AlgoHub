import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const { pathname } = useLocation();

  const links = [
    { label: "Problems", to: "/" },
  ];

  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="app-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      />
      <ul className="menu p-6 w-64 mt-10 min-h-full bg-base-200 text-base-content">
        <li className="menu-title">Navigation</li>
        {links.map(({ label, to }) => (
          <li key={to}>
            <Link
              to={to}
              className={pathname === to ? "active" : ""}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;