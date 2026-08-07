import SidebarButton from "./sidebarButtons";

export default function Sidebar() {
  return (
    <aside
      className="hidden md:flex md:w-60 p-4 min-h-screen text-white flex-col shrink-0"
      style={{ backgroundColor: "#1f0c22" }}
    >
      singstruments

      <SidebarButton />
    </aside>
  );
}