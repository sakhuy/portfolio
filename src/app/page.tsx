import Navbar from "@/components/navbarr"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}
