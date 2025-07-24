import React from "react";
import { Target, Heart, Star, Users, Award, Leaf } from "lucide-react";
import { useData } from "../context/DataContext";
import LeafyDivider from "../components/LeafyDivider";

const About = () => {
  const { data } = useData();
  const { schoolInfo } = data;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(./AboutImg/AboutImg1.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl font-light">
            Discover Our Story & Mission
          </p>
        </div>
      </section>

      <LeafyDivider />

      {/* School Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in {schoolInfo.establishedYear}, {schoolInfo.name} was
                born from a vision to create an educational institution that
                seamlessly integrates academic excellence with environmental
                consciousness. Nestled in the serene hills of Palani, our school
                provides a unique learning environment where students connect
                with nature while building strong foundations for their future.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Over the years, we have cultivated a community of learners who
                are not only academically proficient but also environmentally
                aware and socially responsible. Our holistic approach to
                education ensures that every child develops the skills, values,
                and mindset needed to thrive in the 21st century.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we continue to innovate our teaching methods while
                staying true to our core values of sustainability, creativity,
                and excellence.
              </p>
            </div>
            <div className="relative">
              <img
                src="./AboutImg/AboutImg2.jpeg"
                alt="Students in nature"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <LeafyDivider />

      {/* Photo Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Campus Life
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into the daily life and activities at {schoolInfo.name}.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="col-span-2 row-span-2">
              <img
                src="./AboutImg/AboutImg3.jpeg"
                alt="Science fair"
                className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div>
              <img
                src="./AboutImg/AboutImg4.jpg"
                alt="Art class"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div>
              <img
                src="./AboutImg/AboutImg5.jpeg"
                alt="Garden work"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div>
              <img
                src="./AboutImg/AboutImg6.jpeg"
                alt="Sports"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div>
              <img
                src="./AboutImg/AboutImg7.jpeg"
                alt="Reading"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div>
              <img
                src="./AboutImg/AboutImg8.jpeg"
                alt="Nature study"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div>
              <img
                src="./AboutImg/AboutImg9.jpeg"
                alt="Cultural event"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div  >
              <img
                src="./AboutImg/AboutImg10.jpeg"
                alt="Group activity"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"da
              />
            </div>
            <div>
              <img
                src="./AboutImg/AboutImg11.jpeg"
                alt="Campus view"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <LeafyDivider color="white" className="bg-emerald-50" />

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission, Vision & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that shape everything we do at Akshaya Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To provide holistic education that nurtures intellectual
                curiosity, environmental stewardship, and character development,
                preparing students to become responsible global citizens.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading educational institution that seamlessly
                integrates academic excellence with environmental consciousness,
                creating future leaders who value sustainability.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Values
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Excellence, Integrity, Sustainability, Innovation, Compassion,
                and Community — these values guide our approach to education and
                character building.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeafyDivider />

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to
              excellence in education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Best Eco School
              </h3>
              <p className="text-gray-600">State Level Recognition 2023</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Board Exam Pass Rate</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Green Campus
              </h3>
              <p className="text-gray-600">Certified Carbon Neutral</p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">5 Star</h3>
              <p className="text-gray-600">Education Quality Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced educators and administrators committed to your child's
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="./AboutImg/AboutImg12.jpeg"
                alt="Principal"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Dr. Meera Krishnan
                </h3>
                <p className="text-emerald-600 font-medium mb-3">Principal</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ph.D. in Education, 20+ years of experience in holistic
                  education and environmental pedagogy.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="./AboutImg/AboutImg13.jpeg"
                alt="Vice Principal"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mrs. Lakshmi Patel
                </h3>
                <p className="text-emerald-600 font-medium mb-3">
                  Vice Principal
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  M.Ed. in Curriculum Development, specializing in nature-based
                  learning methodologies.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="./AboutImg/AboutImg14.jpeg"
                alt="Academic Director"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mr. Arjun Nair
                </h3>
                <p className="text-emerald-600 font-medium mb-3">
                  Academic Director
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  M.A. in Educational Leadership, expert in innovative teaching
                  practices and student development.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="./AboutImg/AboutImg15.jpeg"
                alt="Environmental Coordinator"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Dr. Priya Sharma
                </h3>
                <p className="text-emerald-600 font-medium mb-3">
                  Environmental Coordinator
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ph.D. in Environmental Science, leads our sustainability
                  initiatives and nature-based curriculum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
