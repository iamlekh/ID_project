// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Clock, User } from 'lucide-react';
// import { blogPosts } from '../data/blog';

// const Blog = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');
//   const categories = ['all', ...new Set(blogPosts.map(post => post.category.toLowerCase()))];

//   const filteredPosts = selectedCategory === 'all'
//     ? blogPosts
//     : blogPosts.filter(post => post.category.toLowerCase() === selectedCategory);

//   const fadeIn = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 }
//   };

//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="relative h-[40vh]">
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
//             alt="Interior design blog"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-50" />
//         </div>
//         <div className="relative h-full flex items-center">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
//             <motion.div
//               initial="initial"
//               animate="animate"
//               variants={fadeIn}
//             >
//               <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
//                 Our Blog
//               </h1>
//               <p className="text-xl max-w-2xl">
//                 Insights, trends, and inspiration from the world of interior design.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Category Filter */}
//       <section className="py-8 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap justify-center gap-4">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
//                   selectedCategory === category
//                     ? 'bg-indigo-600 text-white'
//                     : 'bg-white text-gray-700 hover:bg-indigo-50'
//                 }`}
//               >
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Blog Posts Grid */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial="initial"
//             animate="animate"
//             variants={fadeIn}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {filteredPosts.map((post) => (
//               <article
//                 key={post.id}
//                 className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="relative h-48">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute top-4 right-4">
//                     <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
//                       {post.category}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center space-x-4 mb-4">
//                     <img
//                       src={post.author.avatar}
//                       alt={post.author.name}
//                       className="w-10 h-10 rounded-full object-cover"
//                     />
//                     <div>
//                       <p className="font-medium text-gray-900">{post.author.name}</p>
//                       <p className="text-sm text-gray-600">{post.author.role}</p>
//                     </div>
//                   </div>
//                   <h2 className="text-xl font-bold text-gray-900 mb-2">
//                     {post.title}
//                   </h2>
//                   <p className="text-gray-600 mb-4">
//                     {post.excerpt}
//                   </p>
//                   <div className="flex items-center text-sm text-gray-500 space-x-4">
//                     <span className="flex items-center">
//                       <Clock className="h-4 w-4 mr-1" />
//                       {post.readTime}
//                     </span>
//                     <span>{post.date}</span>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="py-16 bg-indigo-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial="initial"
//             whileInView="animate"
//             variants={fadeIn}
//             viewport={{ once: true }}
//             className="text-center text-white"
//           >
//             <h2 className="text-3xl font-serif font-bold mb-4">
//               Stay Updated
//             </h2>
//             <p className="text-xl mb-8 max-w-2xl mx-auto">
//               Subscribe to our newsletter for the latest design insights and inspiration.
//             </p>
//             <form className="max-w-md mx-auto">
//               <div className="flex gap-4">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 px-4 py-3 rounded-md text-gray-900"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
//                 >
//                   Subscribe
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Blog;




import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, X } from 'lucide-react';
import { blogPosts } from '../data/blog';

interface DetailViewProps {
  post: typeof blogPosts[0];
  onClose: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ post, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl">
          {/* Header Image */}
          <div className="relative h-64 md:h-96">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
            <div className="absolute top-4 left-4">
              <span className="bg-indigo-600 text-white px-4 py-2 rounded-full">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Author Info */}
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-600">{post.author.role}</p>
              </div>
              <div className="ml-auto flex items-center text-sm text-gray-500 space-x-4">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </span>
                <span>{post.date}</span>
              </div>
            </div>

            {/* Title and Content */}
            <h1 className="text-3xl font-serif font-bold mb-4">
              {post.title}
            </h1>
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const categories = ['all', ...new Set(blogPosts.map(post => post.category.toLowerCase()))];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category.toLowerCase() === selectedCategory);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1200/400"
            alt="Interior design blog"
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
                Our Blog
              </h1>
              <p className="text-xl max-w-2xl">
                Insights, trends, and inspiration from the world of interior design.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-indigo-50'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedPost(post)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{post.author.name}</p>
                      <p className="text-sm text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest design insights and inspiration.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Detail View Modal */}
      <AnimatePresence>
        {selectedPost && (
          <DetailView
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;