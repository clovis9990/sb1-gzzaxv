import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import EventCard from '../components/EventCard';
import ExhibitCard from '../components/ExhibitCard';

const featuredExhibits = [
  {
    id: 1,
    title: "Royal Regalia Collection",
    description: "Explore the symbols of power and authority in Bugungu culture through our collection of royal artifacts.",
    imageUrl: "/images/exhibits/royal-regalia.jpg"
  },
  {
    id: 2,
    title: "Traditional Music Instruments",
    description: "Discover the rich musical heritage through our collection of traditional instruments.",
    imageUrl: "/images/exhibits/music-instruments.jpg"
  },
  {
    id: 3,
    title: "Ancient Tools & Crafts",
    description: "Experience the ingenuity of ancient Bugungu craftsmen through preserved tools and artifacts.",
    imageUrl: "/images/exhibits/ancient-tools.jpg"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Traditional Crafts Workshop",
    date: "2024-01-15",
    description: "Learn traditional Bugungu crafting techniques from master artisans.",
    imageUrl: "/images/events/crafts-workshop.jpg"
  },
  {
    id: 2,
    title: "Cultural Dance Performance",
    date: "2024-01-20",
    description: "Experience the vibrant traditional dances of the Bugungu people.",
    imageUrl: "/images/events/dance-performance.jpg"
  },
  {
    id: 3,
    title: "Heritage Food Festival",
    date: "2024-02-01",
    description: "Taste and learn about traditional Bugungu cuisine and cooking methods.",
    imageUrl: "/images/events/food-festival.jpg"
  }
];

const heritagePosts = [
  {
    id: 1,
    title: "A Poetic Warning: Road Safety in Buliisa District",
    excerpt: "A powerful poem by Kiiza Wilson highlighting the growing concern of road accidents in Buliisa District.",
    date: "2024-01-12",
    author: "Kiiza Wilson",
    category: "Community",
    imageUrl: "/images/blog/buliisa-road.jpg"
  },
  {
    id: 2,
    title: "Preserving Bugungu's Ancient Crafts",
    excerpt: "Discover how our artisans are keeping traditional crafting techniques alive through workshops and demonstrations.",
    date: "2024-01-10",
    author: "Dr. Sarah Namuli",
    category: "Heritage",
    imageUrl: "/images/blog/crafts.jpg"
  },
  {
    id: 3,
    title: "The Story Behind Our Royal Regalia",
    excerpt: "An in-depth look at the historical significance of the royal artifacts in our latest exhibition.",
    date: "2024-01-08",
    author: "John Mukasa",
    category: "Collections",
    imageUrl: "/images/blog/regalia.jpg"
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-parallax">
        <div className="absolute inset-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Heritage Background" 
            className="w-full h-full object-cover"
          />
          <div className="gradient-overlay" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
        >
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
            Discover the Rich Heritage of Bugungu
          </h1>
          <p className="mt-6 max-w-xl text-xl text-gray-100 drop-shadow">
            Experience centuries of culture, art, and tradition in our world-class museum dedicated to preserving and sharing the unique heritage of the Bugungu people.
          </p>
          <div className="mt-10 flex gap-4">
            <Link to="/visit" className="btn-primary">
              Plan Your Visit
            </Link>
            <Link to="/events" className="btn-secondary backdrop-blur-sm bg-white/10">
              View Events
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Exhibits */}
      <section className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <h2 className="section-heading">Featured Exhibits</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredExhibits.map((exhibit) => (
                <motion.div key={exhibit.id} variants={fadeIn}>
                  <ExhibitCard {...exhibit} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="relative py-20 bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <h2 className="section-heading">Upcoming Events</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <motion.div key={event.id} variants={fadeIn}>
                  <EventCard {...event} />
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/events" className="btn-primary">
                View All Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Heritage News */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="flex items-center justify-between">
              <h2 className="section-heading">Heritage News</h2>
              <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-medium group flex items-center gap-2">
                View All Articles
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {heritagePosts.map((post) => (
                <motion.div key={post.id} variants={fadeIn}>
                  <Link to={`/blog/${post.id}`} className="group block">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                      <div className="aspect-w-16 aspect-h-9 relative">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
                          <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="mt-2 text-xl font-display font-semibold group-hover:text-primary-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-gray-600 line-clamp-2">{post.excerpt}</p>
                        <div className="mt-4 flex items-center gap-2">
                          <img
                            src={`/images/authors/${post.author.toLowerCase().replace(' ', '-')}.jpg`}
                            alt={post.author}
                            className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                          />
                          <span className="text-sm font-medium">{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-primary-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/pattern-light.png" 
            alt="" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold">Support Our Mission</h2>
              <p className="mt-4 text-lg text-gray-100">
                Help us preserve and share the rich cultural heritage of Bugungu for future generations.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link to="/donate" className="btn-secondary">
                  Make a Donation
                </Link>
                <Link to="/volunteer" className="btn-primary bg-white text-primary-600 hover:bg-gray-50">
                  Become a Volunteer
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}