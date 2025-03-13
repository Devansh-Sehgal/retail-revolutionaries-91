
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./hooks/useTheme.jsx";
import LoadingAnimation from "./components/LoadingAnimation";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if this is the first visit to the site in this session
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      // If already visited in this session, don't show loading animation
      setLoading(false);
    } else {
      // Set the flag for future navigation
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          
          {loading && <LoadingAnimation onComplete={handleLoadingComplete} />}
          
          <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
