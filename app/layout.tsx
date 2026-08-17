import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MedicalSchema from "@/components/MedicalSchema";
import { doctor } from "@/data/doctor";

export const metadata:Metadata={metadataBase:new URL(doctor.siteUrl),title:{default:"Dr. Milind Mandwar | Organ Transplant & HPB Surgeon in Patna",template:"%s | Dr. Milind Mandwar"},description:"Consultant for liver, kidney and pancreas transplantation, HPB surgery and dialysis vascular access in Patna.",alternates:{canonical:"/"},openGraph:{type:"website",locale:"en_IN",siteName:doctor.name,title:"Dr. Milind Mandwar | Organ Transplant & HPB Surgeon",description:"Advanced transplant expertise and thoughtful care for patients and donors."},twitter:{card:"summary_large_image",title:"Dr. Milind Mandwar",description:"Organ Transplant & HPB Surgeon in Patna"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><MedicalSchema/><a className="skip" href="#main">Skip to main content</a><Header/><main id="main">{children}</main><Footer/><WhatsAppButton/></body></html>}
