import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Building2, 
  PenTool, 
  Lightbulb,
  Palette,
  Sofa,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Transform your home into a personalized sanctuary with our comprehensive residential design services.',
      features: [
        'Space Planning & Layout',
        'Color & Material Selection',
        'Custom Furniture Design',
        'Lighting Design'
      ]
    },
    {
      icon: Building2,
      title: 'Commercial Design',
      description: 'Create inspiring workspaces that boost productivity and reflect your brand identity.',
      features: [
        'Office Space Planning',
        'Brand Integration',
        'Ergonomic Solutions',
        'Collaborative Spaces'
      ]
    },
    {
      icon: PenTool,
      title: 'Design Consultation',
      description: 'Get expert advice and guidance for your design projects with our consultation services.',
      features: [
        'Project Assessment',
        'Budget Planning',
        'Material Recommendations',
        'Design Strategy'
      ]
    }
  ];

  const specialties = [
    {
      icon: Lightbulb,
      title: 'Concept Development',
      description: 'We create unique design concepts that align with your vision and requirements.'
    },
    {
      icon: Palette,
      title: 'Color & Material',
      description: 'Expert selection of colors, materials, and finishes that complement your space.'
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description: 'Curated furniture selection that combines style, comfort, and functionality.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
            alt="Interior design service"
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
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Our Services
              </h1>
              <p className="text-xl max-w-2xl">
                Comprehensive interior design solutions tailored to your unique needs and vision.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <div key={service.title} className="bg-gray-50 rounded-lg p-8">
                <service.icon className="h-12 w-12 text-indigo-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Our Design Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation', description: 'Initial meeting to understand your vision and requirements' },
                { step: '02', title: 'Concept Development', description: 'Creating design concepts based on your preferences' },
                { step: '03', title: 'Design Implementation', description: 'Executing the approved design plan' },
                { step: '04', title: 'Final Touches', description: 'Adding finishing touches and styling' }
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Our Specialties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialties.map((specialty) => (
                <div key={specialty.title} className="text-center">
                  <specialty.icon className="h-12 w-12 text-indigo-600 mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">{specialty.title}</h3>
                  <p className="text-gray-600">{specialty.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-serif font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's work together to create a space that reflects your style and meets your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;