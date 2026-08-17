import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { doctor } from "@/data/doctor";

export const metadata: Metadata = {
  title: "Professional Experience",
  description: "Professional experience and transplant surgery journey of Dr. Milind Mandwar.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return <>
    <BreadcrumbSchema name="Experience" path="/experience" />
    <PageHero eyebrow="Professional journey" title="Clinical experience" description="More than eight years of postgraduate surgical and transplant experience across leading institutions and multidisciplinary programmes." />
    <section className="section">
      <div className="container experience-page">
        {doctor.experience.map((item, index) => <article className="card experience-card" key={item.role}>
          <strong>{String(index + 1).padStart(2, "0")}</strong>
          <div><h2>{item.role}</h2><p>{item.place}</p><time>{item.period}</time></div>
        </article>)}
      </div>
    </section>
    <style>{`.experience-page{display:grid;gap:16px}.experience-card{padding:26px;display:grid;grid-template-columns:70px minmax(0,1fr);gap:16px}.experience-card>strong{font-family:var(--font-serif);font-size:1.9rem;color:#86acab}.experience-card h2{font-size:1.5rem;margin:0}.experience-card p,.experience-card time{display:block;margin:6px 0;color:#5f747b}@media(max-width:520px){.experience-card{padding:20px;grid-template-columns:42px minmax(0,1fr);gap:10px}.experience-card>strong{font-size:1.35rem}.experience-card h2{font-size:1.25rem}}`}</style>
  </>;
}
