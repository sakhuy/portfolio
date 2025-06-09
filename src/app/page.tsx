import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 px-4">
        {/* Hero Section */}
        <section className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Halo, saya Dwisa 👋
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Mahasiswa Ilmu Komputer yang suka ngoding & bikin project seru.  
            Lagi bangun portofolio pakai Next.js dan Tailwind.
          </p>
          <a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Lihat Proyek Saya
          </a>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-32 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Project Saya</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Aplikasi Todo List"
              description="Aplikasi sederhana untuk manajemen tugas harian dengan React dan localStorage."
              github="https://github.com/username/todo-app"
              demo="https://todo.dwisa.dev"
            />
            <ProjectCard
              title="Website UKM Kampus"
              description="Website statis untuk unit kegiatan mahasiswa, dibangun dengan HTML, Tailwind, dan Netlify."
              github="https://github.com/username/ukm-site"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-32 px-4 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Hubungi Saya</h2>
          <p className="text-gray-600 mb-6">
            Tertarik kerja bareng atau punya pertanyaan? Silakan kontak saya melalui:
          </p>
          <div className="flex justify-center space-x-6 text-blue-600 text-lg">
            <a href="mailto:dwisa@email.com" className="hover:underline">Email</a>
            <a href="https://github.com/username" target="_blank" className="hover:underline">GitHub</a>
            <a href="https://linkedin.com/in/username" target="_blank" className="hover:underline">LinkedIn</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Dwisa. Dibuat dengan Next.js & Tailwind CSS.
        </footer>
      </main>
    </>
  );
}
