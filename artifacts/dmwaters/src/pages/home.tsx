import { Link } from "wouter";
import { motion } from "framer-motion";
import { Droplets, Truck, Clock, ShieldCheck, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";
import { Layout } from "@/components/layout";

export default function Home() {
  useSEO("Bulk Water Delivery Harare", "Reliable bulk water delivery for homes and businesses in Harare. We supply up to 30,000 litres per load.");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative bg-primary overflow-hidden min-h-[85vh] flex items-center">
        {/* Abstract Background Image generated via requirements.yaml */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-wave.png`} 
            alt="Water background" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/40" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-6 text-white">
              <motion.span variants={fadeIn} className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary-foreground border border-secondary/30 font-medium text-sm">
                Zimbabwe's Trusted Water Supplier
              </motion.span>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-tight text-white">
                Clean Water, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-200">Delivered Fast.</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
                Bulk water delivery solutions for homes and corporates across Harare. Our dedicated fleet delivers up to 30,000 litres per load.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" variant="accent" className="w-full sm:w-auto">
                    Request a Delivery <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary">
                    View Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              {/* Unsplash image of clean water splash or corporate truck */}
              {/* home page hero image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 aspect-4/3 border-4 border-white/10">
                <img 
                  src="https://pixabay.com/get/g213df271893018d8453983b1e1736b74384cac14be083e03648bd0f0c027e1e19e0fbe86fbb7ec4746e1c1b4290957f7694da163a9d1415d528453741243be6e_1280.jpg" 
                  alt="Clean flowing water" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">24/7 Emergency Delivery</p>
                    <p className="text-xl font-bold text-primary">+263 77 451 1736</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DM Waters?</h2>
            <p className="text-lg text-muted-foreground">
              We understand the urgency of water shortages in Harare. Our dedicated team ensures you never run dry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Versatile Fleet", desc: "From 2,000L towable bowsers to massive 30,000L tankers, we have the right vehicle for any access situation." },
              { icon: ShieldCheck, title: "Clean & Safe", desc: "Our water is rigorously sourced and tested to ensure it meets the highest drinking standards." },
              { icon: Clock, title: "Timely Delivery", desc: "Reliability is our promise. We offer scheduled deliveries and rapid 24/7 emergency response." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted/50 rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 text-secondary rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle texture generated */}
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <img src={`${import.meta.env.BASE_URL}images/water-texture.png`} alt="Texture" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Our Solutions</span>
              <h2 className="text-3xl md:text-5xl font-bold">Comprehensive Water Solutions</h2>
            </div>
            <Link href="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="group rounded-3xl overflow-hidden bg-white shadow-lg border border-border hover:shadow-2xl transition-all duration-300">
              {/* Unsplash tank truck */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://pixabay.com/get/g84672d52d09502405ca0aa9ae497e64982a8c4aaeb53699bcdcd642285b309d1b36a8dcfe0cd3baf80dadd4fd6ef6d844b94fefc9b799ff0ed634f5352af3305_1280.jpg" 
                  alt="Water Tanker" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white">Water Tankers</h3>
              </div>
              <div className="p-8">
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  Our fleet of dedicated bulk drinking water tankers can deliver up to 5,000, 19,000 and 30,000 litres per load. We provide water transport solutions for any situation or emergency, including hard-to-reach areas using 4x4 towed bowsers.
                </p>
                <Link href="/services/water-tankers">
                  <Button variant="ghost" className="p-0 hover:bg-transparent text-secondary hover:text-primary font-bold">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group rounded-3xl overflow-hidden bg-white shadow-lg border border-border hover:shadow-2xl transition-all duration-300">
              {/* Unsplash industrial tank */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://pixabay.com/get/g11ec4db5ad3adecd98d0a67257048cba0558981013896dfe10814e267344a0185d2d724450443ef0ee69625bf5eb08ea32087c2e59dfa9d36879b67c5fe130f0_1280.jpg" 
                  alt="Static Water Tanks" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white">Bowser & Tank Hire</h3>
              </div>
              <div className="p-8">
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  Our hire fleet includes water bowsers and static tanks from 1,100 to 10,000 litres. Units can be supplied standalone or connected in series creating alternative, buffered or augmented storage nationwide.
                </p>
                <Link href="/services/bowser-hire">
                  <Button variant="ghost" className="p-0 hover:bg-transparent text-secondary hover:text-primary font-bold">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETS SECTION */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">Who We Serve</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/residential">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-3xl hover:bg-white/15 transition-all cursor-pointer"
              >
                <Droplets className="w-12 h-12 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Residential Homes</h3>
                <p className="text-gray-300">Scheduled deliveries and emergency fill-ups to keep your home running smoothly.</p>
              </motion.div>
            </Link>
            
            <Link href="/commercial">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-3xl hover:bg-white/15 transition-all cursor-pointer"
              >
                <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Commercial & Corporate</h3>
                <p className="text-gray-300">High-volume solutions for hotels, construction sites, agriculture, and industry.</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to order your water?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Contact us today for a free quote or to schedule your delivery. Our team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="accent" className="h-16 px-10 text-lg">
                Request a Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg border-2" onClick={() => window.location.href="tel:+263774511736"}>
              <Phone className="w-5 h-5 ml-0 mr-2" /> Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
