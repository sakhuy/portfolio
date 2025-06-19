import { techStack } from "@/data"

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="w-full py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Tech Stack</h2>
          <div className="h-1 w-24 mx-auto bg-red-primary rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Technologies I&apos;ve been working with recently</p>
        </div>

        <div className="space-y-16 animate-fade-in-up delay-200">
          {techStack.map((group, groupIndex) => (
            <div key={group.category} className="animate-fade-in-up" style={{ animationDelay: `${groupIndex * 0.1}s` }}>
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">{group.category}</h3>
              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
                {group.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group cursor-pointer"
                    style={{ animationDelay: `${(groupIndex * group.skills.length + skillIndex) * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-red-50 hover:shadow-lg hover:scale-105">
                      <div className="text-5xl sm:text-6xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-600 text-sm sm:text-base transition-all duration-300 group-hover:text-red-primary group-hover:font-semibold">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-red-50 rounded-full opacity-20 blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-red-50 rounded-full opacity-15 blur-xl pointer-events-none"></div>
      </div>
    </section>
  )
}
