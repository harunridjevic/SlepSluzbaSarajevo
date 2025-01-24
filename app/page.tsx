import Header from "../components/header"
import Hero from "../components/hero"
import Services from "../components/services"
import WhyChooseUs from "../components/why-choose-us"
import Gallery from "../components/gallery"
import FAQ from "../components/faq"
import ContactForm from "../components/contact-form"
import Footer from "../components/footer"
import CallButton from "../components/call-button"

export default function Home() {
  return (
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
  )
}

