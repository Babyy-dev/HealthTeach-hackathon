import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import HealthWorkerLogin from "./pages/HealthWorkerLogin";
import HealthWorkerSignup from "./pages/HealthWorkerSignup";
import DoctorLogin from "./pages/DoctorLogin";
import DoctorSignup from "./pages/DoctorSignup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/health-worker/login" element={<HealthWorkerLogin />} />
          <Route path="/health-worker/signup" element={<HealthWorkerSignup />} />
          <Route path="/doctor/login" element={<DoctorLogin />} />
          <Route path="/doctor/signup" element={<DoctorSignup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
