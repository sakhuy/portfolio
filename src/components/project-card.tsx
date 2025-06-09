import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  github: string
  demo?: string
  image: string
}

export default function ProjectCard({ title, description, tech, github, demo, image }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{title}</h3>

        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span key={index} className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
