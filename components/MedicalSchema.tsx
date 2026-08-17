import { doctor } from "@/data/doctor";
export default function MedicalSchema() {
  const data = { "@context": "https://schema.org", "@type": "MedicalClinic", name: "Ruban Memorial Hospital", address: { "@type": "PostalAddress", addressLocality: "Patna", addressRegion: "Bihar", addressCountry: "IN" }, telephone: doctor.phone };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
