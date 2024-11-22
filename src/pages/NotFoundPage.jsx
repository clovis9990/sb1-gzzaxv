import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-9xl font-display font-bold text-primary-600">404</h1>
        <h2 className="mt-4 text-3xl font-display font-semibold text-gray-900">Page Not Found</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="btn-secondary inline-flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go Back
          </button>
          <Link to="/" className="btn-primary inline-flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>
        </div>
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900">Popular Pages</h3>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/visit"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Plan Your Visit
            </Link>
            <Link
              to="/events"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Events & Exhibitions
            </Link>
            <Link
              to="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Heritage Blog
            </Link>
            <Link
              to="/donate"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Support Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}