import React from 'react';
import { Quote } from 'lucide-react';
import { useData } from '../context/DataContext';
import LeafyDivider from '../components/LeafyDivider';

const Testimonials = () => {
  const { data } = useData();

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(./Testimonials/TestmonialsImg1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Testimonials</h1>
          <p className="text-xl md:text-2xl font-light">What Our Community Says</p>
        </div>
      </section>

      <LeafyDivider />

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Parent & Student Reviews</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our school community about their experiences at {data.schoolInfo.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-emerald-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 relative">
                <Quote className="h-8 w-8 text-emerald-600 mb-4" />
                <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">
                  "{testimonial.message}"
                </p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-emerald-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeafyDivider />

      {/* Alumni Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Alumni Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proud graduates making a difference in various fields around the world.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <img 
                src="./Testimonials/TestmonialsImg2.jpeg" 
                alt="Alumni"
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-4 border-emerald-200"
              />
              <h4 className="font-semibold text-gray-900 text-sm">Dr. Ravi Kumar</h4>
              <p className="text-xs text-emerald-600">Pediatrician</p>
              <p className="text-xs text-gray-500">Class of 2010</p>
            </div>
            
            <div className="text-center">
              <img 
                src="./Testimonials/TestmonialsImg3.jpeg" 
                alt="Alumni"
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-4 border-emerald-200"
              />
              <h4 className="font-semibold text-gray-900 text-sm">Sneha Patel</h4>
              <p className="text-xs text-emerald-600">Software Engineer</p>
              <p className="text-xs text-gray-500">Class of 2014</p>
            </div>
            
            <div className="text-center">
              <img 
                src=" ./Testimonials/TestmonialsImg4.jpeg" 
                alt="Alumni"
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-4 border-emerald-200"
              />
              <h4 className="font-semibold text-gray-900 text-sm">Arun Krishnan</h4>
              <p className="text-xs text-emerald-600">Environmental Lawyer</p>
              <p className="text-xs text-gray-500">Class of 2011</p>
            </div>
            
            <div className="text-center">
              <img 
                src="./Testimonials/TestmonialsImg5.jpeg" 
                alt="Alumni"
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-4 border-emerald-200"
              />
              <h4 className="font-semibold text-gray-900 text-sm">Maya Sharma</h4>
              <p className="text-xs text-emerald-600">Teacher</p>
              <p className="text-xs text-gray-500">Class of 2013</p>
            </div>
            
            <div className="text-center">
              <img 
                src="./Testimonials/TestmonialsImg6.jpeg" 
                alt="Alumni"
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-4 border-emerald-200"
              />
              <h4 className="font-semibold text-gray-900 text-sm">Vikram Nair</h4>
              <p className="text-xs text-emerald-600">Architect</p>
              <p className="text-xs text-gray-500">Class of 2009</p>
            </div>
            
            <div className="text-center">
              <img 
                src="./Testimonials/TestmonialsImg7.jpeg" 
                alt="Alumni"
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-4 border-emerald-200"
              />
              <h4 className="font-semibold text-gray-900 text-sm">Priya Menon</h4>
              <p className="text-xs text-emerald-600">Journalist</p>
              <p className="text-xs text-gray-500">Class of 2016</p>
            </div>
          </div>
        </div>
      </section>

      <LeafyDivider color="white" className="bg-emerald-50" />

      {/* Success Stories */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alumni who have gone on to make a positive impact in their communities and careers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="./Testimonials/TestmonialsImg8.jpeg" 
                alt="Success story"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Environmental Engineer</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "The environmental awareness I developed at {data.schoolInfo.name} shaped my entire career path. Today, I work on sustainable water management projects across Tamil Nadu."
                </p>
                <div className="text-emerald-600 font-medium">
                  - Preethi Nair, Class of 2015
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="./Testimonials/TestmonialsImg9.jpeg" 
                alt="Success story"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Medical Research Scholar</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "The holistic education and research methodology I learned here gave me the foundation to pursue medical research. I'm now working on sustainable healthcare solutions."
                </p>
                <div className="text-emerald-600 font-medium">
                  - Dr. Arjun Krishnan, Class of 2012
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeafyDivider />

      {/* Community Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our school community contributes to environmental and social causes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">500+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trees Planted</h3>
              <p className="text-gray-600">Annual tree planting drives by students and parents</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">50+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Projects</h3>
              <p className="text-gray-600">Student-led environmental and social initiatives</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Satisfaction Rate</h3>
              <p className="text-gray-600">Parent satisfaction with our educational approach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 text-emerald-100 leading-relaxed">
            Be part of the {data.schoolInfo.name} community that values academic excellence, environmental stewardship, and character development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/admissions" 
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-300"
            >
              Apply for Admission
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-300"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;