import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Sakha</h3>
            <p className="text-gray-400">Mahasiswa Sistem Informasi & Web Developer.</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Rayhan Dwi Sakha. All rights reserved.</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&quot;The best way to predict the future is to create it.&quot; - Peter Drucker</p>
        </div>
      </div>
    </footer>
  );
}