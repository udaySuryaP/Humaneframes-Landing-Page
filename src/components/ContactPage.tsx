import { Container, Pill, SiteFooter, SiteNav } from "@/components/SiteChrome";

const details = [
  ["Hours", "Monday - Saturday", "09:00 AM - 06:00 PM"],
  ["Location", "Alappuzha, Kerala,India - 688003"],
  ["Phone", "+91 90745 55835", "+91 81380 08357"],
  ["Email Address", "hello.humaneframes@gmail.com"],
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-black">
      <SiteNav />
      <section className="pt-[170px]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <h1 className="text-[clamp(48px,5.6vw,72px)] font-semibold leading-none tracking-[-0.075em]">
                Get in touch
              </h1>
              <p className="mt-14 max-w-[150px] text-[13px] leading-[1.18] tracking-[-0.035em] text-black/75">
                Let&apos;s build something meaningful.
              </p>
            </div>
            <div className="max-w-[650px] self-end">
              <p className="text-[23px] font-semibold leading-[1.06] tracking-[-0.06em] text-black/82">
                Have a question, need more information, or want to book an appointment? We&apos;re here
                to help! Fill out the form below or reach out to us directly-we&apos;ll get back to you
                as soon as possible.
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
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid gap-px bg-black/5">
              {details.map(([title, ...lines]) => (
                <div key={title} className="bg-white p-8">
                  <p className="mb-6 text-[12px] leading-none text-black/55">{title}</p>
                  <div className="space-y-2 text-[20px] font-semibold leading-[1.05] tracking-[-0.055em]">
                    {lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <form className="grid gap-px bg-black/5">
              <Field label="Name" />
              <Field label="Email" />
              <Field label="Phone" />
              <label className="bg-white p-8">
                <span className="mb-5 block text-[12px] leading-none text-black/55">Message</span>
                <textarea className="h-44 w-full resize-none bg-transparent text-[18px] outline-none" />
              </label>
              <div className="bg-white p-8">
                <button type="button" className="inline-flex h-[31px] items-center gap-1 rounded-full bg-black px-4 text-[11px] font-semibold leading-none tracking-[-0.02em] text-white">
                  Submit message
                  <span className="h-1 w-1 rounded-full bg-[#d71916]" />
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

function Field({ label }: { label: string }) {
  return (
    <label className="bg-white p-8">
      <span className="mb-5 block text-[12px] leading-none text-black/55">{label}</span>
      <input className="w-full bg-transparent text-[18px] outline-none" />
    </label>
  );
}
