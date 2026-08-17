import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ReviewForm from "@/components/ReviewForm";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description: "Verified patient experiences and moderated review submissions for Dr. Milind Mandwar.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return <>
    <BreadcrumbSchema name="Reviews" path="/reviews" />
    <PageHero eyebrow="Patient reviews" title="Patient experiences" description="Only verified and moderated patient experiences will be displayed. Reviews are never published automatically." />
    <section className="section">
      <div className="container reviews-page">
        <div className="card review-empty"><h2>Verified patient experiences will appear here.</h2><p>We do not publish unverified testimonials or third-party ratings as independent website data.</p></div>
        <div className="card review-submit"><h2>Write a Review</h2><ReviewForm /></div>
      </div>
    </section>
    <style>{`.reviews-page{display:grid;grid-template-columns:.8fr 1.2fr;gap:28px;align-items:start}.review-empty,.review-submit{padding:28px}.review-empty h2,.review-submit>h2{font-size:1.65rem;margin-top:0}.review-empty p{color:#5f747b}@media(max-width:850px){.reviews-page{grid-template-columns:1fr}}@media(max-width:520px){.review-empty,.review-submit{padding:20px}}`}</style>
  </>;
}
