// data/index.ts

import { Mail, Github, Linkedin, Instagram} from "lucide-react";
import { IconName } from "@/components/ui/project-card";

// Tipe data untuk kontak (opsional, tapi praktik yang baik)
export type Contact = {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  color: string;
  ariaLabel: string;
};

// Tipe data untuk proyek (opsional, tapi praktik yang baik)
export type Project = {
  title: string;
  description: string;
  tech: string[];
  links?: {
    name: string;
    url:string;
    iconName: IconName;
  }[];
};


export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const contacts: Contact[] = [
  {
    icon: Mail,
    label: "Email",
    value: "dwisakha244@email.com",
    href: "mailto:dwisakha244@email.com",
    color: "hover:text-red-600",
    ariaLabel: "Hubungi saya melalui Email",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@sakhuy",
    href: "https://github.com/sakhuy",
    color: "hover:text-gray-900",
    ariaLabel: "Lihat profil GitHub saya",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Rayhan Dwi Sakha",
    href: "https://linkedin.com/in/rayhan-dwi-sakha",
    color: "hover:text-blue-600",
    ariaLabel: "Lihat profil LinkedIn saya",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@sakhuy_", // Ganti dengan handle Instagram Anda
    href: "https://instagram.com/rdsakhaaa", // Ganti dengan link Instagram Anda
    color: "hover:text-purple-600",
    ariaLabel: "Lihat profil Instagram saya",
  },
];

export const projects: Project[] = [
  {
    title: "Anime Sales & Audience Rating Prediction",
    description: "Developed classification (rating) and regression (sales) models using a dataset of over 6,000 anime titles. Achieved 2nd and 3rd place in an internal Kaggle competition.",
    tech: ["Python", "scikit-learn", "pandas", "XGBoost", "Matplotlib"],
    links: [
      {
        name: "Presentation",
        url: "https://www.canva.com/design/DAGo0pzKY4w/SqcdWRDdQf07Q8w1l6_Mmw/view?utm_content=DAGo0pzKY4w&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he54bdee237#4",
        iconName: "Presentation", 
      },
    ],
  },
  {
    title: "Information System for Green Welfare Indonesia",
    description: "Led the end-to-end development of an information system as both Scrum Master and Full-Stack Developer for a nonprofit. The system includes transaction, management, and executive modules.",
    tech: ["Java", "Spring Boot", "Vue.js", "PostgreSQL", "Docker", "Heroku"],
    links: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/p/DKsHmkLPRyR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        iconName: "Instagram", 
      },
      {
        name: "YouTube",
        url: "https://youtu.be/m9EPzi7N44I?si=hpFfCiBoq4g8_WWz",
        iconName: "Youtube",
      },
    ],
  },
  {
    title: "Apap Medika - Microservice Healthcare System",
    description: "Designed and built a modular healthcare information system using a microservices architecture. Integrated six independent services, including authentication, pharmacy, and billing.",
    tech: ["Java", "Spring Boot", "Microservices", "Docker", "PostgreSQL", "Git"],
    links: [
      
    ]
  },
];