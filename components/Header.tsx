"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { doctor } from "@/data/doctor";

const links = [
  ["Home", "/"], ["About", "/about"], ["Specialities", "/specialities"],
  ["Experience", "/experience"], ["Patient Resources", "/resources"],
  ["Reviews", "/reviews"], ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function closeOnResize() { setOpen(false); }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    }
    function closeOnOutsideClick(event: PointerEvent) {
      const target = event.target as Node;
      if (open && !menuRef.current?.contains(target) && !toggleRef.current?.contains(target)) setOpen(false);
    }
    window.addEventListener("resize", closeOnResize);
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      window.removeEventListener("resize", closeOnResize);
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [open]);

  return <>
    <div className="topbar">
      <div className="container top-inner desktop-topbar">
        <div className="top-contact">
          <a href={`tel:${doctor.phone}`}><Phone size={15} aria-hidden="true" /> Call: +91 81206 50418</a>
          <span className="top-divider" aria-hidden="true" />
          <a href={`https://wa.me/${doctor.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        <p>Patna &amp; Online Consultations <span aria-hidden="true">·</span> By Appointment</p>
      </div>
      <div className="container mobile-topbar" aria-label="Quick contact links">
        <a href={`tel:${doctor.phone}`}>Call</a><span aria-hidden="true">·</span>
        <a href={`https://wa.me/${doctor.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a><span aria-hidden="true">·</span>
        <Link href="/appointments">Book Appointment</Link>
      </div>
    </div>
    <header className="header">
      <div className="container nav">
        <Link href="/" className="brand" onClick={() => setOpen(false)}><strong>{doctor.name}</strong><span>{doctor.mobileDesignation}</span></Link>
        <nav ref={menuRef} id="mobile-navigation" aria-label="Main navigation" className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, url]) => <Link key={label} href={url} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="btn btn-primary" href="/appointments" onClick={() => setOpen(false)}>Book Appointment</Link>
        </nav>
        <button ref={toggleRef} className="menu" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
    <style>{`
      .topbar{background:#082f3d;color:white;font-size:.82rem}
      .top-inner{min-height:38px;display:flex;align-items:center;justify-content:space-between;gap:24px}
      .top-contact{display:flex;align-items:center;gap:12px}.top-inner a{display:flex;align-items:center;gap:6px;text-decoration:none;font-weight:650}
      .top-inner a:hover,.mobile-topbar a:hover{text-decoration:underline;text-underline-offset:3px}.top-divider{width:1px;height:14px;background:rgba(255,255,255,.42)}.top-inner p{margin:0;letter-spacing:.01em}.mobile-topbar{display:none}
      .header{position:sticky;top:0;z-index:50;background:rgba(251,253,252,.96);border-bottom:1px solid #d8e5e4;backdrop-filter:blur(12px)}
      .nav{min-height:82px;display:flex;align-items:center;justify-content:space-between;gap:20px}.brand{text-decoration:none;display:flex;flex-direction:column;line-height:1.3}
      .brand strong{font-family:var(--font-serif);font-size:1.28rem;color:#082f3d}.brand span{font-size:.72rem;color:#5f747b}
      .nav-links{display:flex;align-items:center;gap:18px;font-size:.88rem;font-weight:700}.nav-links>a:not(.btn){text-decoration:none}
      .menu{display:none;background:none;border:0;min-width:48px;min-height:48px;color:#082f3d;cursor:pointer}
      @media(max-width:1020px){.nav-links{display:none;position:absolute;top:82px;left:0;right:0;background:white;padding:20px;flex-direction:column;align-items:stretch;border-bottom:1px solid #d8e5e4;box-shadow:0 18px 30px rgba(8,47,61,.12)}.nav-links.open{display:flex}.nav-links a{min-height:44px;display:flex;align-items:center}.menu{display:grid;place-items:center}.brand span{max-width:230px}}
      @media(max-width:600px){.desktop-topbar{display:none}.mobile-topbar{min-height:36px;display:flex;align-items:center;justify-content:center;gap:9px;white-space:nowrap;font-size:.76rem;font-weight:750}.mobile-topbar a{text-decoration:none}.nav{min-height:70px}.nav-links{top:70px}}
    `}</style>
  </>;
}
