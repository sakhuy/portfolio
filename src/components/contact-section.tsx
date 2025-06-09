import { Mail, Github, Linkedin, MessageCircle } from "lucide-react"

export default function ContactSection() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "dwisasakha244@email.com",
      href: "mailto:dwisakha244@email.com",
      color: "hover:text-red-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@sakhuy",
      href: "https://github.com/sakhuy",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Rayhan Dwi Sakha",
      href: "https://linkedin.com/in/rayhan-dwi-sakha",
      color: "hover:text-blue-600",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+62 857-4977-2877",
      href: "https://wa.me/6285749772877",
      color: "hover:text-green-600",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Mari Berkolaborasi</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tertarik untuk bekerja sama atau punya pertanyaan? Jangan ragu untuk menghubungi saya melalui platform
            berikut:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${contact.color}`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{contact.label}</h3>
                  <p className="text-sm text-gray-600">{contact.value}</p>
                </div>
              </a>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Siap untuk Project Baru?</h3>
          <p className="text-gray-600 mb-6">
            Saya selalu terbuka untuk diskusi tentang peluang kerja sama, project freelance, atau sekadar berbagi ide
            tentang teknologi.
          </p>
          <a
            href="mailto:dwisa@email.com"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-emerald-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Mulai Percakapan
          </a>
        </div>
      </div>
    </section>
  )
}
