import Image from "next/image"
import { ArrowDown, FileText } from "lucide-react"
import { contacts } from "@/data"

export default function HeroSection() {
  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center bg-white py-24 px-4">
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-red-50 rounded-full opacity-20 blur-2xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-center md:text-left">
        {/* Text Column */}
        <div className="md:order-1 order-2 space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium border border-red-100">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            Available for opportunities
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Hello, I&apos;m <span className="text-red-primary">Sakha</span>
            </h1>
            <div className="h-1 w-24 bg-red-primary rounded-full mx-auto md:mx-0"></div>
          </div>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Information Systems student at Universitas Indonesia with a passion for{" "}
            <span className="text-red-primary font-semibold">coding</span> and{" "}
            <span className="text-red-primary font-semibold">data analytics</span>. Turning ideas into digital
            solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center bg-red-primary text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              See My Projects
              <ArrowDown className="inline-block ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            <a
              href="https://drive.google.com/file/d/13XfYc61Z4Cbe6EzgAEVz3BEL2M3Y1gvj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-red-primary hover:text-red-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              View Resume
              <FileText className="inline-block ml-2 w-4 h-4 transition-transform duration-300" />
            </a>
          </div>

          <div className="flex gap-4 justify-center md:justify-start pt-4">
            {contacts.map((contact) => {
              const IconComponent = contact.icon
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={contact.label}
                  aria-label={contact.ariaLabel}
                  className={`p-3 bg-gray-100 text-gray-700 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${contact.color}`}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Image Column */}
        <div className="flex justify-center md:order-2 order-1 animate-fade-in-down">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] group">
            <div className="absolute -inset-2 bg-red-100 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-500"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
              <Image
                src="/images/sakha-profile.png"
                alt="Foto profil Sakha"
                width={350}
                height={350}
                quality={95}
                priority={true}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
