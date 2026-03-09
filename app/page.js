import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import About from "@/components/About";
import GoogleReviews from "@/components/GoogleReviews";
import ServiceArea from "@/components/ServiceArea";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import siteConfig from "@/config/siteConfig";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <GoogleReviews reviews={siteConfig.reviews} />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
