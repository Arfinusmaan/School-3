import React from 'react';
import { BookOpen, Users, Award, Clock } from 'lucide-react';
import { useData } from '../context/DataContext';
import LeafyDivider from '../components/LeafyDivider';

const Academics = () => {
  const { data } = useData();

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(./Academics/AcademicsImg1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Academics</h1>
          <p className="text-xl md:text-2xl font-light">Excellence in Education</p>
        </div>
      </section>

      <LeafyDivider />

      {/* Academic Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive education programs designed for every stage of your child's development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.academics.programs.map((program) => (
              <div key={program.id} className="bg-emerald-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{program.name}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{program.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {program.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center text-emerald-600">
                      <Users className="h-5 w-5 mr-2" />
                      <span className="font-medium">{program.ageGroup}</span>
                      <Clock className="h-5 w-5 ml-4 mr-2" />
                      <span className="font-medium">{program.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeafyDivider color="white" className="bg-emerald-50" />

      {/* Subjects */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Subjects We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A well-rounded curriculum that balances core academics with creative and physical development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {data.academics.subjects.map((subject, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{subject}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeafyDivider />

      {/* Teaching Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={data.academics.methodology.image}
                alt="Teaching methodology"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{data.academics.methodology.title}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {data.academics.methodology.description}
              </p>
              <div className="space-y-4">
                {data.academics.methodology.points.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeafyDivider color="white" className="bg-emerald-50" />

      {/* Academic Achievements */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating our students' outstanding accomplishments and recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.academics.achievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      {achievement.year}
                    </span>
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeafyDivider />

      {/* Academic Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Academic Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Innovative teaching methods that foster creativity, critical thinking, and environmental awareness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interactive Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Hands-on activities and project-based learning that engage students actively in the educational process.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Small Class Sizes</h3>
              <p className="text-gray-600 leading-relaxed">
                Maximum 20 students per class ensuring personalized attention and better teacher-student relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence Recognition</h3>
              <p className="text-gray-600 leading-relaxed">
                Regular assessment and recognition of student achievements in academics, arts, and sports.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Timing</h3>
              <p className="text-gray-600 leading-relaxed">
                School hours designed to accommodate working parents while maintaining optimal learning schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeafyDivider color="white" className="bg-emerald-50" />

      {/* Student Work Showcase */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Work Showcase</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Examples of creative projects and academic work by our talented students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="./Academics/AcademicsImg3.jpg"
                alt="Art project"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Environmental Art</h3>
                <p className="text-sm text-gray-600">Grade 8 students created art using natural materials</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="./Academics/AcademicsImg2.jpeg"
                alt="Science project"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Science Fair Projects</h3>
                <p className="text-sm text-gray-600">Innovative solutions for environmental challenges</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="./Academics/AcademicsImg4.jpeg"
                alt="Garden project"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Organic Garden</h3>
                <p className="text-sm text-gray-600">Student-maintained vegetable and herb gardens</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="./Academics/AcademicsImg5.jpeg"
                alt="Cultural performance"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Cultural Programs</h3>
                <p className="text-sm text-gray-600">Traditional dance and music performances</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Assessment & Evaluation</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our comprehensive assessment system goes beyond traditional testing to evaluate the whole child. We use continuous assessment methods that track academic progress while also measuring creativity, critical thinking, and social skills.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Continuous assessment throughout the academic year</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Project-based evaluations and practical assessments</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Regular parent-teacher conferences and progress reports</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Environmental awareness and sustainability projects</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="./Academics/AcademicsImg6.jpeg"
                alt="Students working on projects"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;