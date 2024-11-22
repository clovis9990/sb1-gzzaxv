import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-lg font-semibold">Bugungu Heritage</h3>
            <p className="mt-4 text-sm text-gray-300">
              Preserving and celebrating the rich cultural heritage of the Bugungu people.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/visit" className="text-sm text-gray-300 hover:text-white">
                  Plan Your Visit
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-gray-300 hover:text-white">
                  Events & Exhibitions
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-sm text-gray-300 hover:text-white">
                  Support Us
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-sm text-gray-300 hover:text-white">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-300">
                123 Heritage Lane
              </li>
              <li className="text-sm text-gray-300">
                Bugungu, Uganda
              </li>
              <li className="text-sm text-gray-300">
                Tel: +256 123 456 789
              </li>
              <li className="text-sm text-gray-300">
                Email: info@bugunguheritage.org
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              {/* Add social media icons/links here */}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Bugungu Heritage and Information Centre Museum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}