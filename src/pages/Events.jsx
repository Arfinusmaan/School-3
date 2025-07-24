import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useData } from '../context/DataContext';
import LeafyDivider from '../components/LeafyDivider';

const Events = () => {
  const { data } = useData();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(./Events/EventImg1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Events</h1>
          <p className="text-xl md:text-2xl font-light">Celebrating Learning & Community</p>
        </div>
      </section>

      <LeafyDivider />

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for exciting events that bring the {data.schoolInfo.name} community together and celebrate learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg">
                      <div className="text-sm font-medium">
                        {formatDate(event.date)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{data.schoolInfo.name} Campus</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeafyDivider />

      {/* Event Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Memorable moments from our recent events and celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="./Events/EventImg2.jpeg" 
                alt="Science fair presentation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Science Fair 2024</h3>
                <p className="text-sm">Student innovations</p>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="./Events/EventImg3.jpeg" 
                alt="Cultural performance"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Cultural Festival</h3>
                <p className="text-sm">Traditional performances</p>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="./Events/EventImg4.jpeg" 
                alt="Sports day activities"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Annual Sports Day</h3>
                <p className="text-sm">Athletic competitions</p>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="./Events/EventImg6.jpeg" 
                alt="Earth day celebration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Earth Day 2024</h3>
                <p className="text-sm">Environmental awareness</p>
              </div>
            </div>
          </div>

          {/* Additional Event Images */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="./Events/EventImg6.jpg" 
                alt="Art exhibition"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="./Events/EventImg7.jpeg" 
                alt="Nature walk"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="./Events/EventImg8.jpeg" 
                alt="Garden festival"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="./Events/EventImg9.jpeg" 
                alt="Assembly"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="./Events/EventImg10.jpeg" 
                alt="Workshop"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="./Events/EventImg11.jpeg" 
                alt="Team activities"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <LeafyDivider color="white" className="bg-emerald-50" />

      {/* Event Categories */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We organize diverse events throughout the year to enrich our students' educational experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Events</h3>
              <p className="text-gray-600 text-sm">Science fairs, quiz competitions, and academic exhibitions.</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cultural Programs</h3>
              <p className="text-gray-600 text-sm">Festivals, music, dance performances, and cultural celebrations.</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sports Events</h3>
              <p className="text-gray-600 text-sm">Inter-house competitions, sports day, and fitness challenges.</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Service</h3>
              <p className="text-gray-600 text-sm">Environmental drives, charity events, and social initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      <LeafyDivider />

      {/* Annual Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Annual Event Calendar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan ahead with our yearly event schedule featuring all major celebrations and activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-emerald-600 mb-4">Spring Semester</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Annual Sports Day</span>
                  <span className="text-sm text-gray-500">March</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Science Exhibition</span>
                  <span className="text-sm text-gray-500">February</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Earth Day Celebration</span>
                  <span className="text-sm text-gray-500">April</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Cultural Festival</span>
                  <span className="text-sm text-gray-500">January</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-emerald-600 mb-4">Summer Programs</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Summer Camp</span>
                  <span className="text-sm text-gray-500">May</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Nature Excursion</span>
                  <span className="text-sm text-gray-500">June</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Art Workshop</span>
                  <span className="text-sm text-gray-500">May</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Graduation Ceremony</span>
                  <span className="text-sm text-gray-500">June</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-emerald-600 mb-4">Fall Semester</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Independence Day</span>
                  <span className="text-sm text-gray-500">August</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Teacher's Day</span>
                  <span className="text-sm text-gray-500">September</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Diwali Celebration</span>
                  <span className="text-sm text-gray-500">October</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Annual Day</span>
                  <span className="text-sm text-gray-500">December</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Stay Updated on Events</h2>
          <p className="text-xl mb-8 text-emerald-100 leading-relaxed">
            Subscribe to our newsletter to receive timely updates about upcoming events, registration details, and special announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="px-6 py-3 rounded-lg text-gray-900 flex-1 max-w-md"
            />
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;