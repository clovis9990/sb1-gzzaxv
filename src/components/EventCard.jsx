import React from 'react';
import { format } from 'date-fns';

export default function EventCard({ title, date, description, imageUrl, category }) {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-primary-600 font-semibold">
          {format(new Date(date), 'MMMM d, yyyy')}
        </div>
        <h3 className="mt-2 text-xl font-display font-semibold group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <button className="mt-4 w-full btn-primary">View Details</button>
      </div>
    </div>
  );
}