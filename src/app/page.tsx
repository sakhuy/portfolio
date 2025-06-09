import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-white px-4 pt-24">
        <section className="max-w-2xl text-center">
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
      </main>
    </>
  );
}
