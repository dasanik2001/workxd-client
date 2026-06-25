import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { HomePage } from "./pages/HomePage";
import { ProjectsCatalogue } from "./pages/ProjectsCatalogue";
import { DomainPage } from "./pages/DomainPage";
import { ProjectPage } from "./pages/ProjectPage";
import { HowItWorks } from "./pages/HowItWorks";
import { PricingPage } from "./pages/PricingPage";
import { StudentOutcomes } from "./pages/StudentOutcomes";
import { CertificatePage } from "./pages/CertificatePage";
import { CVPointersPage } from "./pages/CVPointersPage";
import { BlogPage } from "./pages/BlogPage";
import { FAQPage } from "./pages/FAQPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { BrandsPage } from "./pages/BrandsPage";
import { LoginPage } from "./pages/LoginPage";
import { AcademicLoginPage } from "./pages/AcademicLoginPage";
import { AdminLoginPage } from "./pages/AdminLoginPage";
import { AdminDashboard } from "./pages/AdminDashboard";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsCatalogue />} />
          <Route path="/domain/marketing" element={<DomainPage />} />
          <Route path="/project/go-to-market" element={<ProjectPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/outcomes" element={<StudentOutcomes />} />
          <Route path="/certificates" element={<CertificatePage />} />
          <Route path="/cv-pointers" element={<CVPointersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/academic" element={<AcademicLoginPage />} />
          <Route path="/login/admin" element={<AdminLoginPage />} />
          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
