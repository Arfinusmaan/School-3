import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Leaf, BookOpen } from "lucide-react";
import { useData } from "../context/DataContext";
import LeafyDivider from "../components/LeafyDivider";

const Home = () => {
  const { data } = useData();
  const { schoolInfo } = data;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(./HomeImg/HomeImg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {schoolInfo.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            {schoolInfo.tagline}
          </p>
          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto">
            {schoolInfo.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <LeafyDivider />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Happy Students</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">16</h3>
              <p className="text-gray-600">Years Excellence</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Subjects</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Eco-Friendly</p>
            </div>
          </div>
        </div>
      </section>

      <LeafyDivider color="white" className="bg-emerald-50" />

      {/* Image Gallery Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Life at {schoolInfo.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the vibrant learning environment and natural beauty of
              our campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="./HomeImg/HomeImg2.jpeg"
                alt="Students in classroom"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Interactive Learning</h3>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="./HomeImg/HomeImg3.jpeg"
                alt="Nature studies"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Nature Studies</h3>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="./HomeImg/HomeImg4.jpg"
                alt="Art activities"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Creative Arts</h3>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src=" ./HomeImg/HomeImg5.jpeg"
                alt="Garden activities"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Organic Gardening</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeafyDivider />

      {/* Featured Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Academic Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive education programs designed to nurture young minds
              at every stage of development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.academics.programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {program.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex items-center text-emerald-600">
                    <span className="text-sm font-medium">
                      Age: {program.ageGroup}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/academics"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>View All Programs</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <LeafyDivider color="white" className="bg-emerald-50" />

      {/* Featured Testimonial */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            What Parents Say
          </h2>
          {data.testimonials.length > 0 && (
            <div className="bg-emerald-50 rounded-lg p-8">
              <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                "{data.testimonials[0].message}"
              </p>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={data.testimonials[0].image}
                  alt={data.testimonials[0].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">
                    {data.testimonials[0].name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {data.testimonials[0].role}
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="mt-8">
            <Link
              to="/testimonials"
              className="text-emerald-600 hover:text-emerald-700 font-semibold inline-flex items-center space-x-2"
            >
              <span>Read More Testimonials</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <LeafyDivider />

      {/* Campus Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Campus Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our state-of-the-art facilities and beautiful natural
              environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <img
                  src="./HomeImg/HomeImg10.jpeg"
                  alt="Library"
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Modern Library
                  </h3>
                  <p className="text-gray-600">
                    Extensive collection with digital resources and quiet study
                    spaces.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <img
                  src=" ./HomeImg/HomeImg11.jpeg"
                  alt="Sports facilities"
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Sports Complex
                  </h3>
                  <p className="text-gray-600">
                    Multi-sport facilities including basketball, volleyball, and
                    athletics.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <img
                  src="./HomeImg/HomeImg12.jpeg"
                  alt="Science lab"
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Science Laboratories
                  </h3>
                  <p className="text-gray-600">
                    Well-equipped labs for physics, chemistry, and biology
                    experiments.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="./HomeImg/HomeImg13.jpeg"
                alt="Campus overview"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Beautiful Campus</h3>
                <p className="text-lg">Nestled in the serene hills of Palani</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
