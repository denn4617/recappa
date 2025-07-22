import { Sidebar } from '@/components/Sidebar/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
