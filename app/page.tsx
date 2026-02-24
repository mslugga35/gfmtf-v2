import Header from "./components/Header";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Coach from "./components/Coach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileStickyBar from "./components/MobileStickyBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Programs />
        <Coach />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
