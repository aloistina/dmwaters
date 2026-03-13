import { Layout } from "@/components/layout";
import { useSEO } from "@/hooks/use-seo";
import { Target, Eye, Award } from "lucide-react";

export default function About() {
  useSEO("About Us", "Learn about DM Waters, Zimbabwe's premier bulk water delivery service.");

  return (
    <Layout>
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About DM Waters</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            DM Waters is Zimbabwe's premier bulk water delivery and tank hire company. Headquartered in Harare, we are committed to solving the region's water challenges through reliable, clean, and scalable logistics.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative h-96">
            <img 
              src={`${import.meta.env.BASE_URL}images/about-water.png`} 
              alt="Clear Drinking Water" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Born out of the necessity to combat water shortages and irregular supply in Harare, DM Waters has grown into a versatile fleet capable of servicing both small residential needs and massive industrial complexes.
            </p>
            <p className="text-lg text-muted-foreground">
              We invest heavily in the maintenance of our trucks and the rigorous testing of our water sources, ensuring that when you hire DM Waters, you are guaranteed purity and punctuality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
            <Target className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">To provide safe, reliable, and affordable bulk water solutions to every home and business in Zimbabwe, alleviating water stress effectively.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
            <Eye className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">To be the undisputed leader in liquid logistics across Southern Africa, known for our modern fleet and unwavering commitment to customer satisfaction.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
            <Award className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">Integrity, Punctuality, Safety, and Innovation. These core principles drive every drop we deliver and every tank we install.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
