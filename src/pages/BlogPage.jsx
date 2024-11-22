import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "A Poetic Warning: Road Safety in Buliisa District",
    excerpt: "A powerful poem by Kiiza Wilson highlighting the growing concern of road accidents in Buliisa District, following the introduction of tarmac roads.",
    date: "2024-01-12",
    author: "Kiiza Wilson",
    authorRole: "Community Poet",
    category: "Community",
    imageUrl: "/images/blog/buliisa-road.jpg",
    readTime: "4 min read",
    featured: true
  },
  {
    id: 2,
    title: "Preserving Bugungu's Ancient Crafts",
    excerpt: "Discover how our artisans are keeping traditional crafting techniques alive through workshops and demonstrations.",
    date: "2024-01-10",
    author: "Dr. Sarah Namuli",
    authorRole: "Heritage Specialist",
    category: "Heritage",
    imageUrl: "/images/blog/crafts.jpg",
    readTime: "5 min read",
    featured: false
  },
  {
    id: 3,
    title: "The Story Behind Our Royal Regalia",
    excerpt: "An in-depth look at the historical significance of the royal artifacts in our latest exhibition.",
    date: "2024-01-08",
    author: "John Mukasa",
    authorRole: "Museum Curator",
    category: "Collections",
    imageUrl: "/images/blog/regalia.jpg",
    readTime: "8 min read",
    featured: false
  }
];

const categories = [
  { name: 'All', count: 13 },
  { name: 'Heritage', count: 4 },
  { name: 'Collections', count: 3 },
  { name: 'Culture', count: 3 },
  { name: 'Community', count: 2 },
  { name: 'Events', count: 1 }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = selectedCategory === 'All'
    ? regularPosts
    : regularPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-display font-bold">Heritage Blog</h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore stories, insights, and updates from the Bugungu Heritage Museum.
          Discover our rich cultural heritage through the eyes of our community.
        </p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <motion.div 
          className="mt-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Link to={`/blog/${featuredPost.id}`} className="group">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4 text-white/80 mb-4">
                    <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                    <span>{format(new Date(featuredPost.date), 'MMM d, yyyy')}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-200 mb-6 max-w-3xl">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={`/images/authors/${featuredPost.author.toLowerCase().replace(' ', '-')}.jpg`}
                      alt={featuredPost.author}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-white"
                    />
                    <div>
                      <div className="text-white font-medium">{featuredPost.author}</div>
                      <div className="text-white/80">{featuredPost.authorRole}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* Categories */}
      <div className="mt-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map(category => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <motion.div 
        className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {filteredPosts.map(post => (
          <motion.div key={post.id} variants={fadeInUp}>
            <Link to={`/blog/${post.id}`} className="group block">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-w-16 aspect-h-9">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-display font-semibold group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-gray-600 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <img
                      src={`/images/authors/${post.author.toLowerCase().replace(' ', '-')}.jpg`}
                      alt={post.author}
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-100"
                    />
                    <div>
                      <div className="text-sm font-medium">{post.author}</div>
                      <div className="text-xs text-gray-600">{post.authorRole}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Newsletter Section */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 lg:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-display font-semibold text-primary-900">
              Subscribe to Our Newsletter
            </h2>
            <p className="mt-2 text-primary-800">
              Stay updated with the latest stories, events, and exhibitions from Bugungu Heritage Museum.
            </p>
            <form className="mt-6 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-primary-200 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-primary-700">
              Join our community of heritage enthusiasts. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}