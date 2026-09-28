import Header from "@/components/dashboard/Header";
import Navigation from "@/components/dashboard/Navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-dvh">
      <div className="w-full h-full flex">
        <Navigation />
        <div className="min-w-0 flex-1 h-full helper-bg">
          <Header />
          <div className="w-full h-[calc(100dvh-64px)] overflow-hidden">
            <div className="w-full h-full overflow-y-auto" data-lenis-prevent>{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
