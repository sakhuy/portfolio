import { ArrowDown, Code, Database, Laptop } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Available for opportunities
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hai, saya{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Sakha</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Mahasiswa Sistem Informasi yang passionate dengan{" "}
            <span className="font-semibold text-gray-800">coding</span> dan{" "}
            <span className="font-semibold text-gray-800">data analytics</span>. Sedang membangun portofolio dengan
            teknologi modern.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
            <Code className="w-5 h-5 text-emerald-600" />
            <span className="text-gray-700 font-medium">Next.js</span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
            <Laptop className="w-5 h-5 text-emerald-600" />
            <span className="text-gray-700 font-medium">React</span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
            <Database className="w-5 h-5 text-emerald-600" />
            <span className="text-gray-700 font-medium">Data Analysis</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="group bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-emerald-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Lihat Proyek Saya
            <ArrowDown className="inline-block ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  )
}
