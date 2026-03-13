import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";
import { Check, Settings, Layers } from "lucide-react";

export default function BowserHire() {
  useSEO("Bowser & Tank Hire", "Hire water bowsers and static tanks in various sizes from 1,100 to 10,000 litres.");

  return (
    <Layout>
      <div className="relative bg-slate-50 py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-bold uppercase tracking-wider mb-2 block text-sm">Services</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Bowser & Tank Hire</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Versatile and scalable temporary water storage. Our hire fleet includes water bowsers and static tanks in various sizes and volumes from 1,100 to 10,000 litres.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="primary">Inquire About Hire</Button>
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={`${import.meta.env.BASE_URL}images/bowser-hire-hero.png`} 
                alt="Static Water Tanks Construction" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Scalable Storage Solutions</h2>
            <p className="text-lg text-muted-foreground mb-8">
              As part of a versatile temporary water storage solution, each unit can be supplied standalone or connected with other equipment in series or parallel by custom manifold.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Layers className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Buffered & Augmented Storage</h4>
                  <p className="text-muted-foreground">Create the exact volume capacity you need by linking multiple 10,000L tanks together.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Settings className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Custom Manifolds</h4>
                  <p className="text-muted-foreground">Our technicians install and configure the necessary piping and pumps to integrate with your existing systems.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary border-b pb-4">Available Equipment</h3>
            <ul className="space-y-4">
              {[
                "1,100L Static Tanks",
                "2,000L Towable Bowsers",
                "5,000L Storage Tanks",
                "10,000L Large Volume Tanks",
                "Custom Manifolds & Piping",
                "Water Pumps (Electric/Gas)",
                "Larger vessels available by special order"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="font-medium text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-border">
              <Link href="/contact" className="w-full">
                <Button variant="outline" className="w-full">Request Equipment Catalog</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
