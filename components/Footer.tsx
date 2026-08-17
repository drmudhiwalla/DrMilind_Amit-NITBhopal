import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { doctor } from "@/data/doctor";

export default function Footer() {
  return <footer className="footer">
    <div className="container footgrid">
      <div><h2>{doctor.name}</h2><p>{doctor.designation}</p><p>Currently practising in Patna, Bihar</p></div>
      <div><h3>Quick links</h3><Link href="/about">About</Link><Link href="/specialities">Specialities</Link><Link href="/appointments">Appointments</Link><Link href="/contact">Contact</Link></div>
      <div><h3>Patient information</h3><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link><Link href="/disclaimer">Medical Disclaimer</Link></div>
      <div className="footer-contact"><h3>Contact</h3>
        <a href={`tel:${doctor.phone}`}><Phone size={17} aria-hidden="true" /><span>{doctor.phoneDisplay}</span></a>
        <a href={`mailto:${doctor.email}`}><Mail size={17} aria-hidden="true" /><span>{doctor.email}</span></a>
        <a href={`https://wa.me/${doctor.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} aria-hidden="true" /><span>WhatsApp</span></a>
        <a href={doctor.locations[1].mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Open Dr. Milind Mandwar's Patna clinic in Google Maps"><MapPin size={17} aria-hidden="true" /><span>Patna clinic</span></a>
        <a href={doctor.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} aria-hidden="true" /><span>LinkedIn</span></a>
        <a href={doctor.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={17} aria-hidden="true" /><span>Instagram</span></a>
      </div>
    </div>
    <div className="container legal"><p>The information on this website is intended for general education and appointment coordination. It does not replace an in-person medical evaluation, diagnosis or treatment. In a medical emergency, contact the nearest emergency department or call the appropriate emergency service.</p><small>© {new Date().getFullYear()} {doctor.name}. All rights reserved.</small></div>
    <style>{`.footer{background:#082f3d;color:#dce9e9;padding:64px 0 28px}.footgrid{display:grid;grid-template-columns:2fr repeat(3,1fr);gap:36px}.footer h2,.footer h3{color:white;margin-top:0}.footer h2{font-size:1.6rem}.footer h3{font-family:var(--font-sans);font-size:1rem}.footer a{display:block;color:#dce9e9;margin:7px 0;text-decoration:none;overflow-wrap:anywhere}.footer-contact a,.footer-contact p{display:flex;align-items:flex-start;gap:9px;margin:10px 0;color:#dce9e9}.footer-contact svg{flex:none;margin-top:4px;color:#69c9bd}.footer-contact span{min-width:0;overflow-wrap:anywhere}.footer-contact a:hover{color:white;text-decoration:underline;text-underline-offset:3px}.legal{margin-top:40px;border-top:1px solid #315967;padding-top:24px;color:#bcd0d2;font-size:.88rem}@media(max-width:800px){.footgrid{grid-template-columns:1fr 1fr}.footgrid>div:first-child{grid-column:1/-1}}@media(max-width:520px){.footgrid{grid-template-columns:1fr;gap:30px}.footgrid>div:first-child{grid-column:auto}}`}</style>
  </footer>;
}
