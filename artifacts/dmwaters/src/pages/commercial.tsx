import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";
import { Building2, Factory, Hammer, Tent } from "lucide-react";

export default function Commercial() {
  useSEO("Commercial Water Solutions", "Corporate and industrial bulk water delivery in Harare.");

  const industries = [
    { icon: Building2, name: "Hospitality & Corporate", desc: "Uninterrupted supply for hotels, lodges, and large office buildings." },
    { icon: Hammer, name: "Construction Sites", desc: "Dust suppression and cement mixing water for continuous operations." },
    { icon: Factory, name: "Manufacturing", desc: "High-volume industrial water solutions and temporary storage tanks." },
    { icon: Tent, name: "Event Planning", desc: "Safe drinking water and sanitation supply for large outdoor events." },
  ];

  return (
    <Layout>
      <div className="relative pt-24 pb-20 overflow-hidden">
        {/* unsplash corporate building */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop" 
            alt="Corporate Buildings" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Commercial Water Solutions</h1>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Partner with DM Waters to ensure your business operations never halt due to water shortages. We provide scalable logistics for enterprises of any size.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="accent">Open a Corporate Account</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From agriculture to heavy manufacturing, we tailor our delivery schedules and tank hire setups to your specific operational demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, i) => (
            <div key={i} className="flex gap-6 p-8 rounded-2xl border border-border bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <ind.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{ind.name}</h3>
                <p className="text-muted-foreground text-lg">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-slate-50 border border-border rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-primary">Need an SLA or Custom Setup?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We offer comprehensive Service Level Agreements (SLAs) for businesses requiring guaranteed rapid response times, massive volumes, or complex static tank arrays. Let our logistics team design your water security strategy.
            </p>
            <ul className="space-y-3 mb-8 text-foreground font-medium">
              <li className="flex items-center gap-2">• Priority Dispatch Status</li>
              <li className="flex items-center gap-2">• Monthly Volume Discounts</li>
              <li className="flex items-center gap-2">• Custom Manifold Installation</li>
            </ul>
            <Link href="/contact">
              <Button>Contact Logistics Team</Button>
            </Link>
          </div>
          <div className="lg:w-1/2 w-full h-80 rounded-2xl overflow-hidden shadow-xl">
             {/* unsplash industrial pipes */}
             <img 
              src="https://pixabay.com/get/ge6b40dd2e94977dd136fad0fb062caca4fd5032b2e0b8b4379d077ecd337f3381c21d83826cbc90a6ed3d646e447c2db0ca8e98006576f932b0f03f8c69da796_1280.jpg" 
              alt="Industrial Water Setup" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
