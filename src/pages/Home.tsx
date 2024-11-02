import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const testimonials = [
    {
      text: "Working with Design and Decor transformed our space beyond our wildest dreams. Their attention to detail is unmatched.",
      author: "Sarah Johnson",
      role: "Homeowner"
    },
    {
      text: "The team's creativity and professionalism made our office renovation project seamless and stunning.",
      author: "Michael Chen",
      role: "Business Owner"
    },
    {
      text: "They perfectly captured our vision while adding their expert touch. Couldn't be happier with the results.",
      author: "Emma Davis",
      role: "Restaurant Owner"
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
            alt="Luxurious interior design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Transform Your Space Into Something Extraordinary
            </h1>
            <p className="text-xl mb-8">
              Award-winning interior design services that bring your vision to life
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200"
              >
                Explore Our Work
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md font-medium transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Modern Minimalist Home",
                  image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80"
                },
                {
                  title: "Luxury Restaurant",
                  image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80"
                },
                {
                  title: "Corporate Office",
                  image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
                }
              ].map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-white mb-2">
                        {project.title}
                      </h3>
                      <Link
                        to="/portfolio"
                        className="text-white flex items-center space-x-2 group"
                      >
                        <span>View Project</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;