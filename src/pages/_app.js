
import { Toaster } from "../components/ui/toaster";
import { Toaster as Sonner } from "../components/ui/sonner";
import { TooltipProvider } from "../components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "../hooks/useTheme";
import "../index.css";

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Component {...pageProps} />
          <Toaster />
          <Sonner />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
