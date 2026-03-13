import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag, Phone, Mail } from "lucide-react";
import { Layout } from "@/components/layout";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/data/blog-posts";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function renderMarkdown(content: string): string {
  return content
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-10 mb-4 text-foreground">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold mt-7 mb-3 text-foreground">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li class="ml-5 list-disc mb-1">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, (match) => `<ul class="mb-4 space-y-1">${match}</ul>`)
    .replace(/^\| (.+) \|$/gm, (line) => {
      const cells = line.split('|').filter(c => c.trim());
      const isHeader = false;
      return `<tr>${cells.map(c => `<td class="border border-border px-4 py-2 text-sm">${c.trim()}</td>`).join('')}</tr>`;
    })
    .replace(/(<tr>.*<\/tr>\n?)+/g, (match) => {
      const rows = match.split('\n').filter(Boolean);
      const [header, ...body] = rows;
      return `<div class="overflow-x-auto mb-6"><table class="w-full border-collapse border border-border rounded-lg overflow-hidden"><thead class="bg-primary/10"><tr>${
        header.replace(/<tr>/, '').replace(/<\/tr>/, '').replace(/<td /g, '<th class="border border-border px-4 py-2 font-bold text-sm text-left" ').replace(/<\/td>/g, '</th>')
      }</tr></thead><tbody>${body.map(r => `<tr class="hover:bg-muted/50">${r.replace(/<tr>/, '').replace(/<\/tr>/, '')}</tr>`).join('')}</tbody></table></div>`;
    })
    .replace(/^---$/gm, '<hr class="my-8 border-border" />')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary underline underline-offset-2 hover:text-primary/80 font-medium">$1</a>')
    .replace(/\n\n/g, '</p><p class="mb-4 text-muted-foreground leading-relaxed">')
    .replace(/^(?!<)(.+)$/gm, '$1');
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.metaTitle}`;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', post.metaDescription);
    }
  }, [post]);

  if (!post) return <NotFound />;

  const related = getRelatedPosts(slug, 3);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const categoryColors: Record<string, string> = {
    "Water Delivery": "bg-blue-100 text-blue-800",
    "Tank Hire": "bg-green-100 text-green-800",
    Residential: "bg-purple-100 text-purple-800",
    Commercial: "bg-orange-100 text-orange-800",
    Guides: "bg-teal-100 text-teal-800",
  };

  const htmlContent = `<p class="mb-4 text-muted-foreground leading-relaxed">${renderMarkdown(post.content)}</p>`;

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.coverAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-6 pb-10">
          <span className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full mb-4 ${categoryColors[post.category] ?? "bg-gray-100 text-gray-700"}`}>
            <Tag className="w-3 h-3" /> {post.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
              <Link href="/blog" className="flex items-center gap-1.5 text-primary hover:underline font-medium">
                <ArrowLeft className="w-4 h-4" /> All Articles
              </Link>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>

            {/* Article body */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Keywords */}
            <div className="mt-10 pt-6 border-t border-border">
              <p className="text-sm font-semibold text-muted-foreground mb-3">Related topics:</p>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((kw) => (
                  <span key={kw} className="text-xs bg-muted px-3 py-1.5 rounded-full text-muted-foreground font-medium">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* CTA Card */}
            <div className="bg-primary text-white rounded-2xl p-7 space-y-4">
              <h3 className="text-xl font-bold text-white">Need Water Now?</h3>
              <p className="text-blue-100 text-sm">
                DM Waters delivers clean bulk water to homes and businesses across Harare. 24/7 emergency service available.
              </p>
              <a
                href="tel:+263774511736"
                className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors"
              >
                <Phone className="w-4 h-4" /> +263 77 451 1736
              </a>
              <a
                href="mailto:sales@dmwaters.co.zw"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3 rounded-xl text-sm transition-colors"
              >
                <Mail className="w-4 h-4" /> sales@dmwaters.co.zw
              </a>
            </div>

            {/* Services card */}
            <div className="bg-muted/50 rounded-2xl p-6 border border-border space-y-3">
              <h3 className="font-bold text-base mb-4">Our Services</h3>
              {[
                { label: "Bulk Water Tankers", href: "/services/water-tankers" },
                { label: "Bowser & Tank Hire", href: "/services/bowser-hire" },
                { label: "Residential Delivery", href: "/residential" },
                { label: "Commercial Solutions", href: "/commercial" },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center justify-between text-sm font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border last:border-0"
                >
                  {s.label}
                  <ArrowRight className="w-4 h-4 text-primary" />
                </Link>
              ))}
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div>
                <h3 className="font-bold text-base mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {related.map((rp) => (
                    <Link key={rp.slug} href={`/blog/${rp.slug}`}>
                      <div className="flex gap-3 group cursor-pointer">
                        <img
                          src={rp.coverImage}
                          alt={rp.coverAlt}
                          className="w-16 h-16 rounded-lg object-cover shrink-0"
                        />
                        <div>
                          <p className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                            {rp.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{rp.readTime}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </Layout>
  );
}
