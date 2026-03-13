import { Link } from "wouter";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Droplet } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 bg-white rounded-xl p-4 inline-block w-48">
              <img src="/dmwaters-logo.jpg" alt="DM Waters" className="w-full object-contain" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Zimbabwe's trusted bulk water delivery company. We supply clean, safe drinking water to homes and businesses across Harare.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><Droplet className="w-3 h-3 text-secondary"/> Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><Droplet className="w-3 h-3 text-secondary"/> About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><Droplet className="w-3 h-3 text-secondary"/> Services</Link></li>
              <li><Link href="/residential" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><Droplet className="w-3 h-3 text-secondary"/> Residential Delivery</Link></li>
              <li><Link href="/commercial" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><Droplet className="w-3 h-3 text-secondary"/> Commercial Solutions</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services/water-tankers" className="text-gray-300 hover:text-white transition-colors">Bulk Water Tankers</Link></li>
              <li><Link href="/services/bowser-hire" className="text-gray-300 hover:text-white transition-colors">Bowser & Tank Hire</Link></li>
              <li><span className="text-gray-300">Emergency Water Supply</span></li>
              <li><span className="text-gray-300">Event Water Planning</span></li>
              <li><span className="text-gray-300">Industrial Water Needs</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-300">
                <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                <span>17 Huxham Rd,<br/>Greendale, Harare<br/>Zimbabwe</span>
              </li>
              <li className="flex items-start gap-4 text-gray-300">
                <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+263774511736" className="hover:text-white transition-colors">+263 77 451 1736</a>
                  <a href="tel:+263774511736" className="hover:text-white transition-colors">+263 774 511 736</a>
                </div>
              </li>
              <li className="flex items-center gap-4 text-gray-300">
                <Mail className="w-6 h-6 text-accent shrink-0" />
                <a href="mailto:sales@dmwaters.co.zw" className="hover:text-white transition-colors">sales@dmwaters.co.zw</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {currentYear} DM Waters. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
