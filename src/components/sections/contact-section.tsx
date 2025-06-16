import { contacts } from "@/data"

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="h-1 w-24 mx-auto bg-red-primary rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you have a question or just want to say hi, feel free to connect with me on any of the platforms below.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6">
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
                className={`p-4 bg-gray-100 text-gray-700 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${contact.color}`}
              >
                <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
