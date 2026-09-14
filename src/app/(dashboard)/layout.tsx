import Header from "@/components/dashboard/Header";
import Navigation from "@/components/dashboard/Navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header/>
      <main className="w-full h-[calc(100dvh-60px)] overflow-hidden">
        <div className="w-full h-full flex gap-2">
          <Navigation/>
          <div className="flex-1 white-bg p-8 overflow-y-auto overflow-x-hidden">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}