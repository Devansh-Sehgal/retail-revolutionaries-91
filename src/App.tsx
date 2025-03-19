
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound";
import About from "./pages/About.jsx";
import LoadingAnimation from "./components/LoadingAnimation";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // If there's no hash and we're on the home page, scroll to top
    if (!hash && pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a shorter loading time
    setTimeout(() => setLoading(false), 1200);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {loading && <LoadingAnimation/>}

        <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
