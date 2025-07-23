import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)] flex">
      <Sidebar />
      <main className="flex-1 h-full overflow-hidden p-6">{children}</main>
    </div>
  );
}
