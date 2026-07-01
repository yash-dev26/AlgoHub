import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import SideBar from "./Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  // Problem page needs the full height without extra padding
  const isProblemPage = pathname.startsWith("/problem/");

  return (
    <div className="drawer">
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col h-screen overflow-hidden">
        <Navbar />
        <main className={isProblemPage ? "flex-1 overflow-hidden" : "flex-1 overflow-auto p-6"}>
          {children}
        </main>
      </div>

      <SideBar />
    </div>
  );
}

export default Layout;