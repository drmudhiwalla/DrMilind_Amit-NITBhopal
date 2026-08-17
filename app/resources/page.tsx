import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { doctor } from "@/data/doctor";

export const metadata: Metadata = {
  title: "Patient Resources",
  description: "General educational resources for transplant patients, donors and families.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return <>
    <BreadcrumbSchema name="Patient Resources" path="/resources" />
    <PageHero eyebrow="Patient resources" title="Clear information for patients and families" description="Introductory guidance about transplantation, HPB surgery and vascular access. This general information does not replace advice from your treating team." />
    <section className="section section-soft">
      <div className="container resource-grid">
        {doctor.articles.map((article) => <article className="card resource-card" key={article.title}><span>Patient guide</span><h2>{article.title}</h2><p>{article.summary}</p><details><summary>Key points</summary><ul>{article.points.map((point) => <li key={point}>{point}</li>)}</ul></details></article>)}
      </div>
    </section>
    <style>{`.resource-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;align-items:start}.resource-card{padding:28px}.resource-card>span{font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:#087f79;font-weight:800}.resource-card h2{font-size:1.55rem;margin:.55rem 0 .8rem}.resource-card>p{color:#526e75;margin:0;line-height:1.75}.resource-card details{margin-top:20px;border-top:1px solid #d8e5e4;padding-top:15px}.resource-card summary{cursor:pointer;color:#087f79;font-weight:800}.resource-card ul{padding-left:20px;margin:14px 0 0}.resource-card li{margin:9px 0;color:#405d65}.resource-card li::marker{color:#087f79}@media(max-width:760px){.resource-grid{grid-template-columns:1fr}.resource-card{padding:22px}.resource-card h2{font-size:1.4rem}}`}</style>
  </>;
}
