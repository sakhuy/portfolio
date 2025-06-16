import ProjectCard from "@/components/ui/project-card"
import { projects } from "@/data"

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="h-1 w-24 mx-auto bg-red-primary rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are a few projects I&apos;ve worked on, showcasing my skills in both development and data analysis.
          </p>
        </div>

        <div className="space-y-6 animate-fade-in-up delay-200">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
