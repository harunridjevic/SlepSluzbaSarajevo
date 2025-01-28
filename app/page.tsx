// pages/index.js
import Head from 'next/head';
import Header from "../components/header";
import Hero from "../components/hero";
import Services from "../components/services";
import WhyChooseUs from "../components/why-choose-us";
import Gallery from "../components/gallery";
import FAQ from "../components/faq";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";
import CallButton from "../components/call-button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Slep Služba u BiH - Brza i Pouzdana Vuča 24/7</title>
        <meta name="description" content="Slep služba u Sarajevu i cijeloj Bosni i Hercegovini. Brza i pouzdana vuča automobila 24/7. Kontaktirajte nas za hitnu pomoć na putu." />
        <meta name="keywords" content="slep služba BiH, vučna služba BiH, vuča automobila, hitna pomoć na putu BiH, vuča vozila 24/7, tow service Bosnia, šlep služba, šlep služba sarajevo" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Slep Služba Sarajevo - Brza i Pouzdana Vuča 24/7" />
        <meta property="og:description" content="Slep služba u Sarajevu i cijeloj Bosni i Hercegovini. Brza i pouzdana vuča automobila 24/7. Kontaktirajte nas za hitnu pomoć na putu." />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Slep Služba u BiH - Brza i Pouzdana Vuča 24/7" />
        <meta name="twitter:description" content="Slep služba u cijeloj Bosni i Hercegovini. Brza i pouzdana vuča automobila 24/7. Kontaktirajte nas za hitnu pomoć na putu." />
        
        
        {/* Structured Data (JSON-LD) for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Slep Služba Sarajevo",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bosna i Hercegovina",
                "addressCountry": "BA",
              },
              "telephone": "+387 62 223 225",
              "url": "https://slepsluzbasarajevo.com",
              "description": "Brza i pouzdana slep služba u Sarajevu i Bosni i Hercegovini, koja nudi vuču automobila 24/7. Pružamo hitnu pomoć na putu i vuču vozila po povoljnim cijenama."
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-blue-50">
        <Header />
        <main>
          <Hero />
          <Services />
          <WhyChooseUs />
          <Gallery />
          <ContactForm />
        </main>
        <Footer />
        <CallButton />
      </div>
    </>
  );
}
