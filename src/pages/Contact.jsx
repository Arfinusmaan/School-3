import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useData } from '../context/DataContext';
import LeafyDivider from '../components/LeafyDivider';

const Contact = () => {
  const { data } = useData();
  const { schoolInfo } = data;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(./Contact/ContactImg1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl font-light">Get in Touch with Us</p>
        </div>
      </section>

      <LeafyDivider />

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We'd love to hear from you! Whether you have questions about {schoolInfo.name}'s programs, need information about admissions, or want to schedule a campus visit, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700">{schoolInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-700">{schoolInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700">{schoolInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <div className="text-gray-700">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-emerald-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="academics">Academic Programs</option>
                      <option value="facilities">Facilities Tour</option>
                      <option value="events">Events & Activities</option>
                      <option value="general">General Information</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                      placeholder="Please share your questions or comments..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <LeafyDivider color="white" className="bg-emerald-50" />

      {/* Map & Directions */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Located in the beautiful hills of Palani</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                            <div className="lg:col-span-2 h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-lg">Interactive Map</p>
                  <p className="text-sm">Google Maps integration would be placed here</p>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Directions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">From Palani Town Center</h4>
                    <p className="text-sm text-gray-700">
                      Take Hill View Road towards the temple. Continue for 2km and turn right at the green signboard.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">From Dindigul</h4>
                    <p className="text-sm text-gray-700">
                      Follow NH83 to Palani, then take the temple road. Our school is 3km from the main temple.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Parking</h4>
                    <p className="text-sm text-gray-700">
                      Free parking available on campus for visitors and parents.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about Akshaya Academy.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-emerald-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What are your admission requirements?</h3>
              <p className="text-gray-700">
                We welcome students of all backgrounds. Basic requirements include completed application form,
                previous school records (if applicable), and medical certificates. Age-appropriate assessments may be conducted.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer transportation services?</h3>
              <p className="text-gray-700">
                Yes, we provide safe and reliable bus transportation with GPS tracking. Our buses cover major areas around Palani with qualified drivers and attendants.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What makes your school unique?</h3>
              <p className="text-gray-700">
                {schoolInfo.name}'s integration of environmental education with academic excellence sets us apart.
                We have organic gardens, nature laboratories, and a curriculum that emphasizes sustainability and ecological awareness.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I schedule a campus visit?</h3>
              <p className="text-gray-700">
                Absolutely! We encourage prospective parents to visit our campus. Contact us to schedule a guided tour where you can meet our faculty, see our facilities, and observe classes in session.
              </p>
            </div>

            {/* Campus Images */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Visit Our Campus</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="./Contact/ContactImg2.jpeg"
                    alt="Main entrance"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Main Entrance</h4>
                    <p className="text-sm">Welcome to our campus</p>
                  </div>
                </div>

                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="./Contact/ContactImg3.jpeg"
                    alt="Reception area"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Reception Area</h4>
                    <p className="text-sm">Friendly staff to assist you</p>
                  </div>
                </div>

                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="./Contact/ContactImg4.jpeg"
                    alt="Campus gardens"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Campus Gardens</h4>
                    <p className="text-sm">Beautiful natural environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;