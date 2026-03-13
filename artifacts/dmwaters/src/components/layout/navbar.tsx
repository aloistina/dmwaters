import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "All Services", href: "/services" },
      { label: "Water Tankers", href: "/services/water-tankers" },
      { label: "Bowser & Tank Hire", href: "/services/bowser-hire" },
    ],
  },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-white py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <img 
              src="/dmwaters-logo.jpg" 
              alt="DM Waters Logo" 
              className={cn("transition-all duration-300 object-contain", scrolled ? "h-12" : "h-16")} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <button className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors py-2">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "font-medium transition-colors py-2",
                      location === link.href ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-border p-2"
                      >
                        {link.dropdown.map((dropLink) => (
                          <Link
                            key={dropLink.href}
                            href={dropLink.href}
                            className={cn(
                              "block px-4 py-2 rounded-lg transition-colors text-sm font-medium",
                              location === dropLink.href
                                ? "bg-primary/10 text-primary"
                                : "text-foreground hover:bg-muted hover:text-primary"
                            )}
                          >
                            {dropLink.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <PhoneCall className="w-5 h-5" />
              <span>+263 XX XXX XXXX</span>
            </div>
            <Link href="/contact">
              <Button variant="accent">Request Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto pt-24 pb-10"
          >
            <div className="flex flex-col px-6 gap-6">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div className="flex flex-col gap-3">
                      <div className="font-display text-2xl font-bold text-primary border-b pb-2">
                        {link.label}
                      </div>
                      <div className="flex flex-col gap-3 pl-4">
                        {link.dropdown.map((dropLink) => (
                          <Link
                            key={dropLink.href}
                            href={dropLink.href}
                            className={cn(
                              "text-lg font-medium",
                              location === dropLink.href ? "text-secondary" : "text-foreground"
                            )}
                          >
                            {dropLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "font-display text-2xl font-bold border-b pb-2 block",
                        location === link.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="mt-8 pt-8 border-t border-border flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary font-bold text-xl">
                  <PhoneCall className="w-6 h-6" />
                  <span>+263 XX XXX XXXX</span>
                </div>
                <Link href="/contact" className="w-full">
                  <Button variant="accent" className="w-full text-lg h-14">Request Quote</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
