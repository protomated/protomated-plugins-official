import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Skills from "@/components/Skills";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Skills />

      <section className="bg-accent py-9 text-center">
        <div className="mx-auto max-w-[960px] px-6">
          <p className="mx-auto max-w-[680px] font-sans text-base leading-relaxed text-navy">
            Attorney Zack Shapiro&rsquo;s post on building a &ldquo;Claude-Native
            Law Firm&rdquo; received <strong>7.5 million views</strong> in
            February 2026&nbsp;&mdash; proving attorneys are ready for this. We
            built the kit so you don&rsquo;t have to figure it out yourself.
          </p>
        </div>
      </section>

      <section className="bg-background py-[72px] text-center" id="custom">
        <div className="mx-auto max-w-[960px] px-6">
          <h2 className="mb-5 text-[1.75rem]">
            Need a custom skill library for your practice?
          </h2>
          <p className="mx-auto mb-3.5 max-w-[600px] font-sans text-[0.97rem] leading-relaxed text-muted-foreground">
            The 5 skills in this kit cover core communication tasks. A typical
            solo practice has 15&ndash;20 more: jurisdiction-specific filings,
            calendar deadline automation, Clio or Filevine integration, and
            skills tuned to your exact voice, jurisdiction, and playbook.
          </p>
          <p className="mx-auto mb-3.5 max-w-[600px] font-sans text-[0.97rem] leading-relaxed text-muted-foreground">
            Protomated builds custom Claude Desktop skill libraries for solo and
            small-firm attorneys. Engagements start at $3,000.
          </p>
          <a
            href="https://protomated.com/call"
            className="mt-4 inline-block rounded-lg border-2 border-primary px-7 py-3 font-sans text-base font-semibold text-primary no-underline transition-colors hover:bg-primary hover:text-primary-foreground hover:no-underline"
          >
            Book a 30-minute call &rarr;
          </a>
        </div>
      </section>

      <section
        className="border-t border-border bg-muted py-14"
        id="compliance"
      >
        <div className="mx-auto max-w-[720px] px-6">
          <h3 className="mb-3.5 text-[1.1rem] text-navy">
            A note on compliance
          </h3>
          <p className="mb-2.5 font-sans text-sm leading-[1.7] text-muted-foreground">
            This plugin requires{" "}
            <strong>
              Claude for Work, Claude Team, or Claude Enterprise
            </strong>{" "}
            (or the Claude API under a signed DPA). Do not use a consumer Claude
            plan (Claude Pro) with client-privileged content &mdash; doing so
            risks waiving attorney-client privilege. See{" "}
            <em>United States v. Heppner</em> (S.D.N.Y. Feb. 2026) and your state
            bar&rsquo;s AI ethics guidance.
          </p>
          <p className="mb-2.5 font-sans text-sm leading-[1.7] text-muted-foreground">
            Every skill output carries an{" "}
            <em>AI-ASSISTED DRAFT &mdash; ATTORNEY REVIEW REQUIRED</em> header.
            The plugin never sends email or writes files without your explicit
            in-conversation confirmation. Full compliance details are in the{" "}
            <a href="https://github.com/protomated/solo-attorney-assistant/blob/main/plugin/README.md">
              README
            </a>
            .
          </p>
        </div>
      </section>

      <EmailCapture />
      <Footer />
    </>
  );
}
