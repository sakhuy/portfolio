"use client"

import { useState } from "react"
import { ChevronDown, Github, Youtube, Presentation, ExternalLink, BookOpenCheck, Instagram } from "lucide-react"

export const iconComponents = {
  Github,
  Youtube,
  Presentation,
  ExternalLink,
  BookOpenCheck,
  Instagram,
}

export type IconName = keyof typeof iconComponents

export type ProjectLink = {
  name: string
  url: string
  iconName: IconName
}

export interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  links?: ProjectLink[]
}

export default function ProjectCard({ title, description, tech, links }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 bg-white rounded-lg overflow-hidden transition-all duration-300 hover:border-red-200 hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 hover:text-red-primary transition-colors">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span key={item} className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}
      >
        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
          <p className="text-gray-600 leading-relaxed my-4">{description}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {links?.map((link) => {
              const Icon = iconComponents[link.iconName]
              if (!Icon) return null

              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-red-primary font-medium transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                  {link.name}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
