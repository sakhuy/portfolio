type ProjectCardProps = {
  title: string;
  description: string;
  github?: string;
  demo?: string;
};

export default function ProjectCard({ title, description, github, demo }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className="flex space-x-4">
        {github && (
          <a href={github} target="_blank" className="text-blue-600 hover:underline">
            GitHub
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" className="text-blue-600 hover:underline">
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
