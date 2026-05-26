import About from "@/components/About";
import Applications from "@/components/Applications";
import ContactCTA from "@/components/ContactCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Purpose from "@/components/Purpose";
import Quality from "@/components/Quality";
import Sectors from "@/components/Sectors";
import Solutions from "@/components/Solutions";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Solutions />
      <Sectors />
      <Purpose />
      <WhyChooseUs />
      <Process />
      <Quality />
      <Applications />
      <ContactCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
