import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BottomNav from "../components/layout/BottomNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[100dvh] w-full flex bg-brand-surface font-sans overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col h-[100dvh] overflow-hidden relative">
        <Header />

        <main className="flex-1 flex flex-col overflow-y-auto pb-20 md:pb-0">
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </main>

        <BottomNav />
      </div>
    </div>
  );
}
