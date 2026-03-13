import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";
import { Home, Calendar, Shield, Droplets } from "lucide-react";

export default function Residential() {
  useSEO("Residential Water Delivery", "Home water delivery services in Harare. Clean drinking water for your household.");

  return (
    <Layout>
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        {/* abstract texture */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img src={`${import.meta.env.BASE_URL}images/water-texture.png`} alt="Texture" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Home Water Delivery</h1>
            <p className="text-xl text-blue-100 mb-8">
              Keep your household running smoothly with clean, safe drinking water delivered straight to your home tank.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="accent">Order for Your Home</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-border">
              <Home className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Any Location</h3>
              <p className="text-muted-foreground">We service all residential suburbs across Harare. Tight driveway? Our 4x4 towed bowsers can fit anywhere.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-border">
              <Shield className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">100% Safe</h3>
              <p className="text-muted-foreground">Family safety first. Our water is strictly tested and safe for drinking, cooking, and bathing.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-border">
              <Calendar className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Scheduled Top-ups</h3>
              <p className="text-muted-foreground">Set up a weekly or monthly schedule so you never have to worry about checking your tank levels again.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-border">
              <Droplets className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Affordable Rates</h3>
              <p className="text-muted-foreground">Transparent pricing with no hidden fees. High-quality service that respects your household budget.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-20 bg-slate-50 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-12 relative">
            {/* simple steps */}
            <div className="flex-1 relative z-10">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-4 border-white shadow-lg">1</div>
              <h4 className="text-xl font-bold mb-2">Request Quote</h4>
              <p className="text-muted-foreground">Tell us your location and tank size.</p>
            </div>
            <div className="flex-1 relative z-10">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-4 border-white shadow-lg">2</div>
              <h4 className="text-xl font-bold mb-2">Schedule</h4>
              <p className="text-muted-foreground">Pick a convenient delivery time.</p>
            </div>
            <div className="flex-1 relative z-10">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-4 border-white shadow-lg">3</div>
              <h4 className="text-xl font-bold mb-2">Delivery</h4>
              <p className="text-muted-foreground">We fill your tank cleanly and efficiently.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
