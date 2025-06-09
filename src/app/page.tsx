import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-white px-4 pt-24">
        <section className="max-w-2xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Halo, saya Dwisa 👋
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Mahasiswa Ilmu Komputer yang suka ngoding & bikin project seru.  
            Lagi bangun portofolio pakai Next.js dan Tailwind.
          </p>
          <a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Lihat Proyek Saya
          </a>
        </section>
      </main>
    </>
  );
}
