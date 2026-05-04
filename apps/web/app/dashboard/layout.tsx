import Sidebar from "@/components/tenderiq/Sidebar";
import Topbar from "@/components/tenderiq/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full min-h-screen">
        <Topbar />

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}