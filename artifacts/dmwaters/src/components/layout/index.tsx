import { ReactNode, useEffect } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { useLocation } from "wouter";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mt-[88px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
