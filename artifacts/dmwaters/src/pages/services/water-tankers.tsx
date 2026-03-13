import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";
import { Droplet, Truck, Ruler, PhoneCall } from "lucide-react";

export default function WaterTankers() {
  useSEO("Water Tankers", "Bulk drinking water tankers delivering 5,000L to 30,000L in Harare.");

  return (
    <Layout>
      <div className="relative bg-slate-50 py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-bold uppercase tracking-wider mb-2 block text-sm">Services</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Water Tankers</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our fleet of dedicated bulk drinking water tankers can deliver up to 5,000, 19,000 and 30,000 litres per load and provide water transport solutions for any situation or emergency.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="accent">Request Delivery</Button>
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              {/* unsplash big truck */}
              <img 
                src="https://pixabay.com/get/g4095075604f180b4228d5be2d2e329348a38327867a968dd328f14bff47231416c2a046c285cd0c66ebf6f21911e19d9c942a14d6d51d769bbee7e1cf708e4f8_1280.jpg" 
                alt="Water Tanker Truck" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Capacities & Capabilities</h2>
          <p className="text-lg text-muted-foreground">We adapt to your volume and access requirements, ensuring you get water exactly where you need it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-border text-center hover:-translate-y-2 transition-transform duration-300">
            <Truck className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">High Volume</h3>
            <p className="text-muted-foreground">Our largest tankers handle 19,000L and 30,000L loads, perfect for commercial fill-ups and large estates.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-border text-center hover:-translate-y-2 transition-transform duration-300">
            <Ruler className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Restricted Access</h3>
            <p className="text-muted-foreground">Where access for large vehicles is an issue, we deliver using our 2,000L towable bowsers, towed via 4×4.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-border text-center hover:-translate-y-2 transition-transform duration-300">
            <Droplet className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Purity Guaranteed</h3>
            <p className="text-muted-foreground">Tanks are strictly dedicated to drinking water, sanitized regularly to ensure 100% safe consumption.</p>
          </div>
        </div>

        <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl font-bold text-white mb-6">Need an emergency fill-up?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Water shortages can happen unexpectedly. Our dispatch team is on standby to route a tanker to your location ASAP.
          </p>
          <Button size="lg" variant="accent" className="h-16 px-10 text-lg border-2 border-transparent">
            <PhoneCall className="mr-2" /> Call +263 XX XXX XXXX
          </Button>
        </div>
      </div>
    </Layout>
  );
}
