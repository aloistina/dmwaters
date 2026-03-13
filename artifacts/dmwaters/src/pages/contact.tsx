import { useState } from "react";
import { Layout } from "@/components/layout";
import { useSEO } from "@/hooks/use-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Form Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(6, "Valid phone number is required"),
  email: z.string().email("Valid email is required").optional().or(z.literal('')),
  serviceType: z.string().min(1, "Please select a service"),
  volume: z.string().min(1, "Please specify volume needed"),
  location: z.string().min(2, "Delivery location is required"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  useSEO("Contact Us", "Get a quote for bulk water delivery or tank hire in Harare.");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call as no backend exists
    console.log("Form Submitted:", data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
          Need water delivered urgently or looking to hire a tank? Our team is ready to assist you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Call Us</h4>
                <p className="text-muted-foreground mb-1">For emergency deliveries (24/7)</p>
                <a href="tel:+263XXXXXXX" className="text-xl font-bold text-primary hover:underline">+263 XX XXX XXXX</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Email Us</h4>
                <p className="text-muted-foreground mb-1">For general inquiries and corporate accounts</p>
                <a href="mailto:info@dmwaters.co.zw" className="text-lg font-bold text-primary hover:underline">info@dmwaters.co.zw</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Location</h4>
                <p className="text-muted-foreground text-lg">
                  Harare, Zimbabwe
                  <br />
                  (Operating nationwide for large projects)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Business Hours</h4>
                <p className="text-muted-foreground text-lg">Office: Mon - Fri (8am - 5pm)</p>
                <p className="text-accent font-bold">Dispatch: 24/7 Available</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl border border-border p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-8">Request a Quote</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. Our dispatch team will contact you shortly.</p>
                  <Button variant="outline" className="mt-6" onClick={() => setIsSubmitted(false)}>Send Another Request</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">Full Name *</label>
                      <Input {...register("name")} className="h-12 bg-slate-50" placeholder="John Doe" />
                      {errors.name && <p className="text-accent text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">Phone Number *</label>
                      <Input {...register("phone")} className="h-12 bg-slate-50" placeholder="+263..." />
                      {errors.phone && <p className="text-accent text-sm mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">Email Address</label>
                      <Input {...register("email")} className="h-12 bg-slate-50" placeholder="john@example.com" />
                      {errors.email && <p className="text-accent text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">Delivery Location *</label>
                      <Input {...register("location")} className="h-12 bg-slate-50" placeholder="e.g., Borrowdale, Harare" />
                      {errors.location && <p className="text-accent text-sm mt-1">{errors.location.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">Service Required *</label>
                      <select 
                        {...register("serviceType")} 
                        className="w-full h-12 px-3 rounded-md border border-input bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a service...</option>
                        <option value="Residential Delivery">Residential Water Delivery</option>
                        <option value="Commercial Delivery">Commercial Water Delivery</option>
                        <option value="Bowser Hire">Bowser / Tank Hire</option>
                        <option value="Emergency">Emergency Fill-up</option>
                      </select>
                      {errors.serviceType && <p className="text-accent text-sm mt-1">{errors.serviceType.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">Estimated Volume</label>
                      <select 
                        {...register("volume")} 
                        className="w-full h-12 px-3 rounded-md border border-input bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select volume...</option>
                        <option value="Under 5,000L">Under 5,000L (Home)</option>
                        <option value="5,000L - 10,000L">5,000L - 10,000L</option>
                        <option value="10,000L - 19,000L">10,000L - 19,000L</option>
                        <option value="30,000L+">30,000L+ (Commercial)</option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                      {errors.volume && <p className="text-accent text-sm mt-1">{errors.volume.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Additional Details</label>
                    <Textarea 
                      {...register("message")} 
                      className="min-h-[120px] bg-slate-50" 
                      placeholder="Access restrictions, gate sizes, or any other details..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
