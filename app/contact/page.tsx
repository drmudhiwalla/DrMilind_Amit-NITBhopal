"use client";

import { useState } from "react";
import { Copy, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import QueryForm from "@/components/QueryForm";
import PageHero from "@/components/PageHero";
import { doctor } from "@/data/doctor";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(doctor.phoneDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return <>
    <PageHero eyebrow="Contact" title="Speak with Dr. Milind’s team" description="For consultation availability and non-urgent queries, call, WhatsApp or send a short message." />
    <section className="section">
      <div className="container contact-grid">
        <div>
          <div className="card contact-card">
            <Phone />
            <div><h2>Phone & WhatsApp</h2><a href={`tel:${doctor.phone}`}>{doctor.phoneDisplay}</a><button onClick={copy}><Copy size={16} />{copied ? "Copied" : "Copy number"}</button></div>
          </div>
          <div className="card contact-card">
            <Mail />
            <div><h2>Email</h2><a href={`mailto:${doctor.email}`}>{doctor.email}</a></div>
          </div>
          <h2>Practice locations</h2>
          {doctor.locations.map((location) => <article className="card loc" key={location.address}>
            <MapPin /><div><h3>{location.name}</h3><p>{location.address}</p><p>{location.note}</p><a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">Google Maps <ExternalLink size={15} /></a></div>
          </article>)}
          <div className="hours"><h3>Clinic hours</h3><p>{doctor.timings.hospital.label}</p><p>Online morning: {doctor.timings.online.morning}<br />Online evening: {doctor.timings.online.evening}</p><small>Please confirm all timings before travel.</small></div>
        </div>
        <div><p className="eyebrow">Ask Dr. Milind’s Team</p><h2 className="title">Send a non-urgent query</h2><QueryForm /></div>
      </div>
    </section>
    <style>{`.contact-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:36px}.contact-card,.loc{padding:22px;display:flex;gap:15px;margin-bottom:18px}.contact-card svg,.loc>svg{color:#087f79;flex:none}.contact-card h2,.loc h3{margin:0}.contact-card a{font-size:1.15rem;font-weight:800;color:#087f79;overflow-wrap:anywhere}.contact-card button{display:flex;gap:6px;margin-top:8px;border:0;background:none;color:#49686d;cursor:pointer}.loc a{display:inline-flex;gap:5px;align-items:center;color:#087f79;font-weight:800}.hours{border-top:1px solid #d8e5e4;margin-top:25px}.hours small{color:#5f747b}@media(max-width:850px){.contact-grid{grid-template-columns:1fr}}`}</style>
  </>;
}
