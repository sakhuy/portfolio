import ProjectCard from "@/components/project-card"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Aplikasi Todo List",
      description:
        "Aplikasi manajemen tugas harian yang responsif dengan fitur drag & drop, kategori, dan reminder. Dibangun menggunakan React hooks dan localStorage untuk persistensi data.",
      tech: ["React", "TypeScript", "Tailwind CSS", "LocalStorage"],
      github: "https://github.com/username/todo-app",
      demo: "https://todo.dwisa.dev",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Website UKM Kampus",
      description:
        "Website modern untuk unit kegiatan mahasiswa dengan sistem pendaftaran online, galeri kegiatan, dan dashboard admin. Optimized untuk SEO dan performance.",
      tech: ["Next.js", "Tailwind CSS", "Netlify", "CMS"],
      github: "https://github.com/username/ukm-site",
      demo: "https://ukm.dwisa.dev",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Dashboard interaktif untuk visualisasi data dengan berbagai chart dan filter. Menggunakan API real-time dan responsive design untuk semua device.",
      tech: ["React", "Chart.js", "API", "CSS Grid"],
      github: "https://github.com/username/analytics-dashboard",
      demo: "https://analytics.dwisa.dev",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "E-Commerce Landing",
      description:
        "Landing page e-commerce yang modern dengan animasi smooth, product showcase, dan form kontak terintegrasi. Focus pada conversion rate optimization.",
      tech: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
      github: "https://github.com/username/ecommerce-landing",
      demo: "https://shop.dwisa.dev",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Project Saya</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beberapa project yang telah saya kerjakan menggunakan teknologi modern
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
