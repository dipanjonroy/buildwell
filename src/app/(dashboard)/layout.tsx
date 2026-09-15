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
        <Navigation/>
        <div className="min-w-0 flex-1 h-full">
          <Header/>
          {children}
        </div>
      </div>
    </main>
  );
}