import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/site-content";
import { Container, Pill, SiteFooter, SiteNav } from "@/components/SiteChrome";

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-[#f3f3f1] text-black">
      <SiteNav />
      <section className="pt-[170px]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <h1 className="max-w-[720px] text-[clamp(48px,5.6vw,72px)] font-semibold leading-none tracking-[-0.075em]">
                News and Insights
              </h1>
              <p className="mt-14 max-w-[210px] text-[13px] leading-[1.18] tracking-[-0.035em] text-black/75">
                Perspectives on design, tech, and brand culture
              </p>
            </div>
            <div className="max-w-[650px] self-end">
              <p className="text-[23px] font-semibold leading-[1.06] tracking-[-0.06em] text-black/82">
                Our blog is a hub for insights, tips, and industry trends in digital marketing and
                social media.
              </p>
              <div className="mt-5">
                <Pill href="/contact">Start a project</Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-[92px]">
        <Container>
          <Link href={`/blog/${featured.slug}`} className="group grid bg-white lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[520px] overflow-hidden bg-neutral-200">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 760px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex min-h-[520px] flex-col justify-end p-8 lg:p-10">
              <p className="mb-4 text-[12px] leading-none text-black/55">{featured.category}</p>
              <h2 className="max-w-[560px] text-[42px] font-semibold leading-[0.98] tracking-[-0.07em]">
                {featured.title}
              </h2>
              <p className="mt-7 max-w-[490px] text-[15px] font-medium leading-[1.22] tracking-[-0.04em] text-black/70">
                {featured.excerpt}
              </p>
              <p className="mt-10 text-[12px] leading-none text-black/55">{featured.date}</p>
            </div>
          </Link>

          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
      <SiteFooter largeGap={false} />
    </main>
  );
}

function BlogCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group bg-white">
      <div className="relative h-[360px] overflow-hidden bg-neutral-200">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 440px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <div className="mb-5 flex items-center justify-between text-[11px] leading-none text-black/55">
          <span>{post.category}</span>
          <span>{post.date}</span>
        </div>
        <h2 className="text-[22px] font-semibold leading-[1.02] tracking-[-0.055em]">{post.title}</h2>
        <p className="mt-5 text-[13px] font-medium leading-[1.22] tracking-[-0.04em] text-black/68">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
