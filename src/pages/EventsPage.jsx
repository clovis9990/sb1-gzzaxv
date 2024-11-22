import React from 'react';
import { format } from 'date-fns';
import EventCard from '../components/EventCard';

const upcomingEvents = [
  {
    id: 1,
    title: "Traditional Crafts Workshop",
    date: new Date(2024, 0, 15),
    description: "Learn traditional Bugungu crafting techniques from master artisans.",
    imageUrl: "/images/events/crafts-workshop.jpg",
    category: "Workshop"
  },
  {
    id: 2,
    title: "Cultural Dance Performance",
    date: new Date(2024, 0, 20),
    description: "Experience the vibrant traditional dances of the Bugungu people.",
    imageUrl: "/images/events/dance-performance.jpg",
    category: "Performance"
  },
  {
    id: 3,
    title: "Heritage Food Festival",
    date: new Date(2024, 1, 1),
    description: "Taste and learn about traditional Bugungu cuisine and cooking methods.",
    imageUrl: "/images/events/food-festival.jpg",
    category: "Festival"
  },
  {
    id: 4,
    title: "Storytelling Evening",
    date: new Date(2024, 0, 25),
    description: "Join us for an evening of traditional storytelling and folklore.",
    imageUrl: "/images/events/storytelling.jpg",
    category: "Cultural"
  },
  {
    id: 5,
    title: "Weaving Workshop",
    date: new Date(2024, 1, 5),
    description: "Learn traditional basket weaving techniques.",
    imageUrl: "/images/events/weaving.jpg",
    category: "Workshop"
  }
];

const exhibitions = [
  {
    id: 1,
    title: "Bugungu Through Time",
    description: "A permanent exhibition showcasing the history and evolution of Bugungu culture.",
    imageUrl: "/images/exhibitions/through-time.jpg",
    duration: "Permanent Exhibition"
  },
  {
    id: 2,
    title: "Sacred Artifacts",
    description: "Religious and ceremonial objects from different periods.",
    imageUrl: "/images/exhibitions/sacred-artifacts.jpg",
    duration: "Until March 2024"
  },
  {
    id: 3,
    title: "Contemporary Bugungu Art",
    description: "Modern artistic expressions by local artists.",
    imageUrl: "/images/exhibitions/contemporary-art.jpg",
    duration: "January - April 2024"
  }
];

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold">Events & Exhibitions</h1>
      
      {/* Featured Event */}
      <section className="mt-12">
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img 
            src="/images/events/food-festival.jpg"
            alt="Heritage Food Festival"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full mb-4">
                Featured Event
              </span>
              <h2 className="text-3xl font-display font-bold text-white mb-2">
                Heritage Food Festival
              </h2>
              <p className="text-gray-200 mb-4">
                Experience the rich culinary traditions of Bugungu through tastings, 
                demonstrations, and workshops.
              </p>
              <button className="btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-display font-semibold">Upcoming Events</h2>
          <div className="flex gap-2">
            {['All', 'Workshop', 'Performance', 'Festival', 'Cultural'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm rounded-full border border-gray-200 hover:border-primary-500 hover:text-primary-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map(event => (
            <EventCard 
              key={event.id}
              title={event.title}
              date={event.date}
              description={event.description}
              imageUrl={event.imageUrl}
              category={event.category}
            />
          ))}
        </div>
      </section>

      {/* Current Exhibitions */}
      <section className="mt-16">
        <h2 className="text-2xl font-display font-semibold mb-8">Current Exhibitions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map(exhibition => (
            <div key={exhibition.id} className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={exhibition.imageUrl}
                  alt={exhibition.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
                    {exhibition.duration}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold group-hover:text-primary-600 transition-colors">
                  {exhibition.title}
                </h3>
                <p className="mt-2 text-gray-600">{exhibition.description}</p>
                <button className="mt-4 btn-primary w-full">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Private Events */}
      <section className="mt-16">
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-display font-semibold">Host Your Event</h2>
            <p className="mt-4 text-gray-600">
              Create unforgettable moments in our unique spaces. Perfect for corporate events,
              private celebrations, and educational programs.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold">Main Hall</h3>
                <p className="text-sm text-gray-600 mt-1">Up to 200 people</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold">Garden Pavilion</h3>
                <p className="text-sm text-gray-600 mt-1">Up to 100 people</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold">Conference Room</h3>
                <p className="text-sm text-gray-600 mt-1">Up to 50 people</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold">Workshop Space</h3>
                <p className="text-sm text-gray-600 mt-1">Up to 30 people</p>
              </div>
            </div>
            <button className="mt-8 btn-primary">Inquire About Events</button>
          </div>
        </div>
      </section>
    </div>
  );
}