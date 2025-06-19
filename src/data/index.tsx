// data/index.ts

import { Mail, Github, Linkedin, Instagram} from "lucide-react";
import { IconName } from "@/components/ui/project-card";
import { FaReact, FaJava, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiVuedotjs, SiSpringboot, SiPostgresql, SiPython } from "react-icons/si";


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

// Tipe data untuk tech stack
export type TechSkill = {
  name: string
  icon: React.ReactNode
}

export type TechCategory = {
  category: string
  skills: TechSkill[]
}

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
  {
    title: "AVATAR - Visa Application Mobile App", 
    description: "Contributed to the design of a user-friendly mobile app for visa applications. Involved in user research, wireframing, and usability testing, achieving a high SUS score of 90.5.",
    tech: ["Figma", "User Research", "Usability Testing"],
    links: [
      {
        name: "Presentation",
        url: "https://www.canva.com/design/DAGGyFLaubM/e8RvyO4hx6O_F6daGayDgA/view?utm_content=DAGGyFLaubM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8ebb2897c6",
        iconName: "Presentation", 
      },
    ],
  },
];

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-green-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Java", icon: <FaJava className="text-orange-500" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
      { name: "Python", icon: <SiPython className="text-yellow-500" /> },
    ],
  },
  {
    category: "Database & Tools",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    ],
  },
]