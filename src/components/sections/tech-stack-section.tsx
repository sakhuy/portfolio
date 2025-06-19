"use client";

// Impor 'dynamic' dari Next.js
import dynamic from 'next/dynamic';
import { techStack } from "@/data";

// Lakukan dynamic import untuk komponen Slider
// Opsi { ssr: false } sangat penting untuk mencegah error rendering di server
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function TechStackSection() {
  // Pengaturan untuk carousel (tidak ada yang berubah di sini)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Sisa kode komponen sama persis
  return (
    <section id="tech-stack" className="w-full py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Tech Stack</h2>
          <div className="h-1 w-24 mx-auto bg-red-primary rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Technologies I&apos;ve been working with recently</p>
        </div>

        <div className="space-y-16 animate-fade-in-up delay-200">
          {techStack.map((group) => (
            <div key={group.category}>
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">{group.category}</h3>
              
              <Slider {...settings}>
                {group.skills.map((skill) => (
                  <div key={skill.name} className="px-4">
                    <div className="group cursor-pointer">
                      <div className="flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-red-50 hover:shadow-lg hover:scale-105 h-40 justify-center">
                        <div className="text-5xl sm:text-6xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-gray-600 text-sm sm:text-base transition-all duration-300 group-hover:text-red-700 group-hover:font-semibold">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}