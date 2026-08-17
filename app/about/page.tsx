import type { Metadata } from "next";
import { Building2, MapPin, Stethoscope } from "lucide-react";
import PageHero from "@/components/PageHero";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { doctor } from "@/data/doctor";

export const metadata: Metadata = {
  title: "About & Experience",
  description: "Qualifications and professional experience of Dr. Milind Mandwar, organ transplant and HPB surgeon in Patna.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return <>
    <BreadcrumbSchema name="About" path="/about" />
    <PageHero eyebrow="About" title="Experience built across leading transplant programmes" description="Training and clinical work spanning kidney, pancreas and liver transplantation, HPB surgery and dialysis vascular access." />

    <section className="section profile-section">
      <div className="container profile-grid">
        <article className="profile-copy">
          <p className="eyebrow">Professional profile</p>
          <h2 className="title">Specialist expertise with thoughtful, coordinated care</h2>
          <div className="prose">{doctor.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </article>
        <aside className="profile-summary" aria-label="Current professional role">
          <span className="summary-icon"><Stethoscope size={25} aria-hidden="true" /></span>
          <p className="summary-label">Current position</p>
          <h3>{doctor.currentRole}</h3>
          <div className="summary-detail"><Building2 size={19} aria-hidden="true" /><span>{doctor.hospital}</span></div>
          <div className="summary-detail"><MapPin size={19} aria-hidden="true" /><span>{doctor.location}</span></div>
          <div className="summary-rule" />
          <strong>8+ years</strong>
          <p>of postgraduate surgical and transplant experience</p>
        </aside>
      </div>
    </section>

    <section className="section section-soft"><div className="container narrow-section">
      <p className="eyebrow">Education & training</p><h2 className="title">Qualifications</h2>
      <div className="timeline">{doctor.qualifications.map(([degree, place]) => <article key={degree}><span /><div><h3>{degree}</h3><p>{place}</p></div></article>)}</div>
    </div></section>

    <section className="section" id="experience"><div className="container narrow-section">
      <p className="eyebrow">Professional journey</p><h2 className="title">Clinical experience</h2>
      <div className="experience">{doctor.experience.map((item, index) => <article className="card" key={item.role}><strong>{String(index + 1).padStart(2, "0")}</strong><div><h3>{item.role}</h3><p>{item.place}</p><time>{item.period}</time></div></article>)}</div>
    </div></section>

    <section className="section section-soft"><div className="container narrow-section">
      <p className="eyebrow">Professional affiliations</p><h2 className="title">Memberships & academic activity</h2>
      <ul className="members">{doctor.memberships.map((item) => <li key={item}>{item}</li>)}</ul>
    </div></section>

    <style>{`
      .profile-section{background:linear-gradient(180deg,#fbfdfc 0%,#fff 100%)}
      .profile-grid{display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:clamp(48px,7vw,96px);align-items:start}
      .profile-copy{max-width:780px}.profile-copy .title{max-width:740px;margin-bottom:28px}
      .prose{display:grid;gap:20px}.prose p{margin:0;font-size:1.06rem;line-height:1.85;color:#405d65}
      .profile-summary{position:sticky;top:150px;padding:32px;border:1px solid #cfe2df;border-radius:16px;background:#edf8f5;box-shadow:0 18px 45px rgba(8,47,61,.08)}
      .summary-icon{width:52px;height:52px;display:grid;place-items:center;border-radius:12px;background:#087f79;color:#fff;margin-bottom:24px}
      .summary-label{margin:0 0 8px;color:#087f79;font-size:.75rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase}
      .profile-summary h3{font-size:1.45rem;margin:0 0 22px}.summary-detail{display:flex;align-items:flex-start;gap:10px;margin:11px 0;color:#405d65}
      .summary-detail svg{flex:none;margin-top:4px;color:#087f79}.summary-rule{height:1px;background:#c8dfdc;margin:26px 0 20px}
      .profile-summary>strong{display:block;font-family:var(--font-serif);font-size:2rem;color:#082f3d}.profile-summary>p:last-child{margin:4px 0 0;color:#526e75;line-height:1.55}
      .narrow-section{max-width:980px}.timeline{max-width:850px;margin-top:36px}
      .timeline article{display:grid;grid-template-columns:30px 1fr;gap:18px;position:relative;padding-bottom:30px}.timeline article:before{content:'';position:absolute;left:7px;top:18px;bottom:0;border-left:2px solid #9fcac5}
      .timeline article:last-child:before{display:none}.timeline article>span{width:16px;height:16px;border:4px solid #087f79;background:white;border-radius:50%;margin-top:6px}
      .timeline h3{margin:0;font-size:1.3rem}.timeline p{margin:5px 0 0;color:#5f747b}
      .experience{display:grid;gap:16px;margin-top:32px}.experience article{padding:24px 28px;display:grid;grid-template-columns:65px 1fr;gap:14px;transition:transform .2s,box-shadow .2s}
      .experience article:hover{transform:translateY(-2px);box-shadow:0 16px 38px rgba(8,47,61,.1)}.experience strong{font-family:var(--font-serif);font-size:1.7rem;color:#8eafb0}
      .experience h3{margin:0;font-size:1.25rem}.experience p,.experience time{display:block;margin:5px 0;color:#5f747b}
      .members{columns:2;gap:64px;margin-top:28px;padding-left:22px}.members li{break-inside:avoid;margin:0 0 18px;padding-left:5px}.members li::marker{color:#087f79}
      @media(max-width:900px){.profile-grid{grid-template-columns:1fr;gap:44px}.profile-copy{max-width:none}.profile-summary{position:static;max-width:560px}.narrow-section{max-width:none}}
      @media(max-width:700px){.profile-copy .title{margin-bottom:22px}.prose{gap:17px}.prose p{font-size:1rem;line-height:1.75}.profile-summary{padding:24px}.members{columns:1}.experience article{grid-template-columns:42px 1fr;padding:20px 18px}.experience strong{font-size:1.35rem}}
    `}</style>
  </>;
}
