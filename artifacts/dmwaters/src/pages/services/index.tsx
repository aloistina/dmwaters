import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";

export default function Services() {
  useSEO("Our Services", "Explore DM Waters' bulk water delivery solutions and bowser hire in Harare.");

  return (
    <Layout>
      {/* HEADER */}
      <div className="bg-primary pt-24 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-blue-100">Professional water delivery and storage solutions tailored to your specific needs.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        
        {/* SERVICE 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bulk Water Tankers</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our fleet of dedicated bulk drinking water tankers can provide water transport solutions for any situation or emergency across Harare.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Large capacities: 5,000L, 19,000L, and 30,000L per load",
                "Smaller 2,000L towable bowsers for restricted access areas",
                "Clean, tested drinking water",
                "Prompt, reliable delivery schedules"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/services/water-tankers">
              <Button>Learn More About Tankers <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-full">
            <img 
              src={`${import.meta.env.BASE_URL}images/services-tanker.png`} 
              alt="Water Tanker Fleet" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* SERVICE 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-col-reverse lg:flex-row-reverse">
          <div className="rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-full">
            <img 
              src={`${import.meta.env.BASE_URL}images/services-tanks.png`} 
              alt="Water Tank Storage" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bowser & Tank Hire</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Need temporary water storage? Our hire fleet includes versatile solutions designed to scale with your project's demands.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Capacities ranging from 1,100L to 10,000L",
                "Larger vessels available by special order",
                "Connect standalone or in series via custom manifold",
                "Ideal for construction, events, and buffered storage"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/services/bowser-hire">
              <Button>Learn More About Hiring <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
        </div>

      </div>
    </Layout>
  );
}
