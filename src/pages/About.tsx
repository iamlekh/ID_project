import { motion } from 'framer-motion';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Design Awards', value: '25+' },
    { icon: Clock, label: 'Years Experience', value: '15+' },
    { icon: CheckCircle, label: 'Projects Completed', value: '1000+' },
  ];

  const team = [
    {
      name: 'Darpan Lekharu',
      role: 'Interior Designer',
      image:
        '/src/data/images/dl.png',
      bio: 'With over 15 years of experience, Darpan brings a unique vision to every project, combining functionality with aesthetic excellence.',
    },
    // {
    //   name: 'Sarah Anderson',
    //   role: 'Senior Interior Designer',
    //   image:
    //     'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80',
    //   bio: 'Specializing in residential design, Sarah creates spaces that reflect each clients personality and lifestyle.',
    // },
    // {
    //   name: 'Michael Chen',
    //   role: 'Commercial Design Specialist',
    //   image:
    //     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    //   bio: 'Michael excels in transforming commercial spaces into environments that enhance productivity and brand identity.',
    // },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Interior design team at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <motion.div initial="initial" animate="animate" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                About Design and Decor by Darpan
              </h1>
              <p className="text-xl max-w-2xl">
                Creating beautiful, functional spaces that inspire and transform
                lives through innovative design solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <Icon className="h-8 w-8 mx-auto text-indigo-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {value}
                </div>
                <div className="text-gray-600">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2008, Design and Decor by Darpan has grown from a
                small design studio to one of the most respected interior design
                firms in the region. Our journey began with a simple mission: to
                create spaces that inspire and transform lives.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've had the privilege of working with hundreds
                of clients, each with unique visions and requirements. Our
                commitment to excellence and attention to detail has earned us
                numerous industry awards and, more importantly, the trust of our
                clients.
              </p>
              <p className="text-gray-600">
                Today, we continue to push the boundaries of design, combining
                traditional principles with innovative solutions to create
                spaces that are both beautiful and functional.
              </p>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
                alt="Our design studio"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={{
                    initial: { opacity: 0, scale: 0.9 },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      transition: { delay: index * 0.2 },
                    },
                  }}
                  className={`
                    bg-gray-50 rounded-lg overflow-hidden shadow-md 
                    hover:shadow-lg transition-shadow duration-300
                    w-full max-w-sm ${
                      team.length === 1
                        ? 'sm:col-span-2 lg:col-span-3'
                        : team.length === 2
                        ? 'lg:last:col-span-2'
                        : ''
                    }
                  `}
                >
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-serif font-bold mb-12">
              Awards & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  year: '2023',
                  award: 'Best Luxury Residential Design',
                  org: 'Interior Design Excellence Awards',
                },
                {
                  year: '2022',
                  award: 'Innovation in Commercial Design',
                  org: 'Design Industry Association',
                },
                {
                  year: '2021',
                  award: 'Sustainable Design of the Year',
                  org: 'Green Building Council',
                },
              ].map((award) => (
                <div
                  key={award.award}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="text-2xl font-bold text-indigo-600 mb-2">
                    {award.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {award.award}
                  </h3>
                  <p className="text-gray-600">{award.org}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
