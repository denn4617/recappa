import { Sidebar } from "@/components/Dashboard/Sidebar/Sidebar";
import { Topbar } from "@/components/Dashboard/Topbar"; // adjust path as needed

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0e062b] h-screen w-screen overflow-hidden flex">
      {/* Sidebar (left) */}
      <Sidebar />

      {/* Main layout (right) */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Topbar */}
        <Topbar />

        {/* Scrollable page content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
