import { Container, Pill, SiteFooter, SiteNav } from "@/components/SiteChrome";

const details = [
  ["Hours", "Monday to Saturday", "09:00 AM to 06:00 PM"],
  ["Location", "Alappuzha, Kerala", "India 688003"],
  ["Phone", "+91 90745 55835", "+91 81380 08357"],
  ["Email Address", "hello.humaneframes@gmail.com"],
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <SiteNav />
      <section className="pt-[190px]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <h1 className="text-[clamp(42px,5vw,64px)] font-semibold leading-[1.2]">
                Get in touch
              </h1>
              <p className="mt-14 max-w-[150px] text-[13px] leading-[1.18] tracking-[-0.035em] text-black/75">
                Tell us what you are trying to build.
              </p>
            </div>
            <div className="max-w-[650px] self-end">
              <p className="text-[23px] font-semibold leading-[1.06] tracking-[-0.06em] text-black/82">
                Have a business that deserves to look more credible, consistent, and trusted online?
                Tell us where your brand is right now and what you are trying to build. We will help
                you understand the next right step across strategy, identity, website, content, or growth.
              </p>
              <div className="mt-5">
                <Pill href="https://cal.com/humaneframes/30min">Book an intro call</Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-[92px]">
        <Container>
          <div className="grid min-w-0 gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid min-w-0 gap-px bg-black/5">
              {details.map(([title, ...lines]) => (
                <div key={title} className="min-w-0 bg-white p-5 md:p-8">
                  <p className="mb-6 text-[12px] leading-none text-black/55">{title}</p>
                  <div className="min-w-0 space-y-2 break-words text-[17px] font-semibold leading-[1.08] tracking-[-0.055em] md:text-[20px]">
                    {lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <form action="mailto:hello.humaneframes@gmail.com" method="post" encType="text/plain" className="grid min-w-0 gap-px bg-black/5">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <label className="min-w-0 bg-white p-5 md:p-8">
                <span className="mb-5 block text-[12px] leading-none text-black/55">Message</span>
                <textarea name="message" required className="h-44 min-w-0 w-full resize-none bg-transparent text-[18px] outline-none" />
              </label>
              <div className="min-w-0 bg-white p-5 md:p-8">
                <button type="submit" className="inline-flex h-[39px] items-center gap-2 rounded-full bg-black px-4 text-[16px] font-medium leading-[1.2] text-white">
                  Submit message
                  <span className="h-1.5 w-1.5 rounded-full bg-[#fd2400]" />
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
      <SiteFooter largeGap={false} />
    </main>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="min-w-0 bg-white p-5 md:p-8">
      <span className="mb-5 block text-[12px] leading-none text-black/55">{label}</span>
      <input name={name} type={type} required={required} className="min-w-0 w-full bg-transparent text-[18px] outline-none" />
    </label>
  );
}
