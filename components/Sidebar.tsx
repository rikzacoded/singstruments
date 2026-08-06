import SidebarButton from "./sidebarButtons";

export default function Sidebar() {
  return (
    <aside
      className="w-full md:w-60 p-4 min-h-screen text-white flex flex-col shrink-0"
      style={{ backgroundColor: "#1f0c22" }}
    >
      <div>
        <h1 className="text-white mt-2 text-2xl font-bold">
          singstruments
        </h1>
      </div>

      <SidebarButton />
    </aside>
  );
}