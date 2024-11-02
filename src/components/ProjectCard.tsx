import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const ProjectCard = ({ id, title, category, image, description }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-indigo-600">{category}</span>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 line-clamp-2">{description}</p>
        <Link
          to={`/portfolio/${id}`}
          className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700"
        >
          View Project
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;