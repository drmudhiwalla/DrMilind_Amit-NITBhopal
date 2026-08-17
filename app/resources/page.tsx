import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { doctor } from "@/data/doctor";

export const metadata: Metadata = {
  title: "Patient Resources",
  description: "Future educational resources for transplant patients, donors and families.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return <>
    <BreadcrumbSchema name="Patient Resources" path="/resources" />
    <PageHero eyebrow="Patient resources" title="Clear information for patients and families" description="Doctor-written educational articles are being prepared. These upcoming topics are placeholders and do not provide individual medical advice." />
    <section className="section section-soft">
      <div className="container resource-grid">
        {doctor.articles.map((article) => <article className="card resource-card" key={article}><span>Upcoming article</span><h2>{article}</h2><p>Educational content is being prepared and reviewed.</p></article>)}
      </div>
    </section>
    <style>{`.resource-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.resource-card{padding:24px}.resource-card span{font-size:.75rem;text-transform:uppercase;letter-spacing:.08em;color:#087f79;font-weight:800}.resource-card h2{font-size:1.4rem}.resource-card p{color:#5f747b}@media(max-width:950px){.resource-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:600px){.resource-grid{grid-template-columns:1fr}.resource-card{padding:20px}}`}</style>
  </>;
}
