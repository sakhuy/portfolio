import type React from "react"
import "./globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata = {
  title: "Sakha – Portofolio",
  description: "Portofolio pribadi Sakha, mahasiswa Sistem Informasi.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${poppins.className} bg-white text-gray-800 antialiased`}>{children}</body>
    </html>
  )
}
