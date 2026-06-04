import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/site-content";
import { Container, Pill, SiteFooter, SiteNav } from "@/components/SiteChrome";

export default function BlogDetailPage({ slug }: { slug: string }) {
  const post = blogPosts.find((item) => item.slug === slug) ?? blogPosts[0];
  const more = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <SiteNav />
      <section className="pt-[190px]">
        <Container>
          <p className="mb-8 text-[13px] font-medium leading-none tracking-[-0.035em] text-black/60">
            Blog / {post.category}
          </p>
          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr]">
            <h1 className="max-w-[850px] text-[clamp(42px,5vw,64px)] font-semibold leading-[1.2]">
              {post.title}
            </h1>
            <div className="max-w-[520px] self-end">
              <p className="text-[21px] font-semibold leading-[1.08] tracking-[-0.06em] text-black/82">
                {post.excerpt}
              </p>
              <p className="mt-8 text-[12px] leading-none text-black/55">Posted at {post.date}</p>
            </div>
          </div>
          <div className="relative mt-20 h-[660px] overflow-hidden bg-neutral-200">
            <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="h-fit bg-white p-8">
            <p className="mb-8 text-[12px] leading-none text-black/55">Posted on</p>
            <p className="text-[30px] font-semibold leading-none tracking-[-0.06em]">{post.date}</p>
            <p className="mt-8 text-[12px] leading-none text-black/55">Category</p>
            <p className="mt-3 text-[20px] font-semibold leading-none tracking-[-0.05em]">{post.category}</p>
          </aside>
          <article className="bg-white p-8 lg:p-10">
            <div className="space-y-12">
              {post.sections.map((section, index) => (
                <section key={section}>
                  <h2 className="mb-5 text-[30px] font-semibold leading-none tracking-[-0.06em]">
                    {section}
                  </h2>
                  <p className="text-[17px] font-medium leading-[1.35] tracking-[-0.04em] text-black/72">
                    {articleBody(section, post.title, index)}
                  </p>
                </section>
              ))}
            </div>
          </article>
        </Container>
      </section>

      <section className="pt-28">
        <Container>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-[42px] font-semibold leading-none tracking-[-0.065em]">More Blog</h2>
            <Pill href="/blog">See all blog</Pill>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {more.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="bg-white">
                <div className="relative h-[280px] overflow-hidden bg-neutral-200">
                  <Image src={item.image} alt={item.title} fill sizes="33vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="mb-4 text-[11px] leading-none text-black/55">{item.date}</p>
                  <h3 className="text-[18px] font-semibold leading-[1.05] tracking-[-0.05em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[12px] font-medium leading-[1.25] tracking-[-0.035em] text-black/68">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <SiteFooter largeGap={false} />
    </main>
  );
}

function articleBody(section: string, title: string, index: number) {
  if (section === "Conclusion") {
    return `${title} comes down to clarity, usefulness, and consistent execution. When teams keep user needs, business goals, and performance in the same conversation, digital products become easier to trust, easier to use, and easier to improve over time.`;
  }

  const starts = [
    "Strong digital work starts with understanding the people who will use it, the context around the decision, and the outcome the experience needs to create.",
    "This part of the process turns strategy into something practical: structure, flow, content, and interface decisions that reduce friction and make the next action obvious.",
    "When executed well, the result is not only a better looking interface but a more reliable system for attention, trust, conversion, and long term brand value.",
  ];

  return `${starts[index % starts.length]} ${section} gives the team a clear focus area for improving the experience without adding unnecessary complexity.`;
}
