import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Layout } from "@/components/layout";
import { useSEO } from "@/hooks/use-seo";
import { blogPosts } from "@/data/blog-posts";

export default function Blog() {
  useSEO(
    "Blog – Water Delivery Tips & Guides | DM Waters Zimbabwe",
    "Expert articles on bulk water delivery, tank hire, water storage, and managing water supply in Harare, Zimbabwe. Tips for homes and businesses."
  );

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  const categoryColors: Record<string, string> = {
    "Water Delivery": "bg-blue-100 text-blue-800",
    "Tank Hire": "bg-green-100 text-green-800",
    Residential: "bg-purple-100 text-purple-800",
    Commercial: "bg-orange-100 text-orange-800",
    Guides: "bg-teal-100 text-teal-800",
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <Layout>
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Water Delivery Blog
        </h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
          Expert guides, tips, and insights on water delivery, storage, and
          supply solutions for Harare homes and businesses.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`}>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group mb-16 bg-white rounded-3xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-72 lg:h-auto overflow-hidden">
                <img
                  src={featured.coverImage}
                  alt={featured.coverAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[featured.category] ?? "bg-gray-100 text-gray-700"}`}
                  >
                    {featured.category}
                  </span>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    Featured
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-5 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.article>
        </Link>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.coverAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${categoryColors[post.category] ?? "bg-gray-100 text-gray-700"}`}
                    >
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border mt-auto">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-primary py-16 text-center text-white mt-8">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Need Water Delivered Today?
        </h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
          Don't wait until you run dry. Call DM Waters now for same-day or
          scheduled delivery across Harare.
        </p>
        <a
          href="tel:+263774511736"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
        >
          Call +263 77 451 1736
        </a>
      </div>
    </Layout>
  );
}
