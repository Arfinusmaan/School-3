import React from 'react';
import { Leaf, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useData } from '../context/DataContext';

const Footer = () => {
  const { data } = useData();
  const { schoolInfo } = data;

  return (
    <footer className="bg-emerald-900 text-white">
      {/* Decorative leaf border */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 to-green-400"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-emerald-400" />
              <h3 className="text-2xl font-bold">{schoolInfo.name}</h3>
            </div>
            <p className="text-emerald-100 mb-4 leading-relaxed">
              {schoolInfo.description}
            </p>
            <p className="text-emerald-200 text-sm">
              Established in {schoolInfo.establishedYear}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-emerald-100 text-sm">{schoolInfo.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <p className="text-emerald-100 text-sm">{schoolInfo.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <p className="text-emerald-100 text-sm">{schoolInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/admissions" className="block text-emerald-100 hover:text-emerald-300 transition-colors duration-200 text-sm">
                Admissions
              </a>
              <a href="/academics" className="block text-emerald-100 hover:text-emerald-300 transition-colors duration-200 text-sm">
                Academic Programs
              </a>
              <a href="/facilities" className="block text-emerald-100 hover:text-emerald-300 transition-colors duration-200 text-sm">
                Facilities
              </a>
              <a href="/events" className="block text-emerald-100 hover:text-emerald-300 transition-colors duration-200 text-sm">
                Upcoming Events
              </a>
              <a href="/contact" className="block text-emerald-100 hover:text-emerald-300 transition-colors duration-200 text-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-emerald-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-emerald-300 hover:text-white transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-emerald-300 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-emerald-300 hover:text-white transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-emerald-200 text-sm text-center md:text-right">
              © 2024 {schoolInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;