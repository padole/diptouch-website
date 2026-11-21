import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Results from "./components/Results.jsx";
import Work from "./components/Work.jsx";
import Process from "./components/Process.jsx";
import QuoteForm from "./components/QuoteForm.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Results />
        <Work />
        <Process />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
