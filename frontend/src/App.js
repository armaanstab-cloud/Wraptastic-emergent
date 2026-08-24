import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { QuoteDialogProvider } from "@/components/QuoteDialog";
import { LegalDialogProvider } from "@/components/LegalDialog";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Work from "@/pages/Work";
import About from "@/pages/About";
import Reviews from "@/pages/Reviews";
import Contact from "@/pages/Contact";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const Layout = () => {
  return (
    <QuoteDialogProvider>
      <LegalDialogProvider>
      <div className="App relative">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </div>
      </LegalDialogProvider>
    </QuoteDialogProvider>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-center" theme="dark" richColors />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
