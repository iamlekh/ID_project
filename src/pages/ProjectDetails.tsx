import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/portfolio" className="text-indigo-600 hover:text-indigo-700">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <Link
                to="/portfolio"
                className="inline-flex items-center text-white hover:text-gray-200 mb-6"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Portfolio
              </Link>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-200">{project.category}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Description */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold mb-6">About the Project</h2>
              <p className="text-gray-600 mb-8">{project.fullDescription}</p>
              
              <h3 className="text-2xl font-serif font-bold mb-4">Scope of Work</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.details.scope.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-indigo-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <dl className="space-y-4">
                  {Object.entries(project.details).map(([key, value]) => (
                    key !== 'scope' && (
                      <div key={key}>
                        <dt className="text-gray-600 text-sm">{key.charAt(0).toUpperCase() + key.slice(1)}</dt>
                        <dd className="text-gray-900 font-medium">{value}</dd>
                      </div>
                    )
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                variants={fadeIn}
                viewport={{ once: true }}
                className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={`${project.title} - Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;