import React, { createContext, useContext, useState } from "react";

const initialData = {
  schoolInfo: {
    name: "Akshaya Academy",
    tagline: "Nurturing Tomorrow's Leaders in Nature's Embrace",
    description:
      "Located in the serene hills of Palani, Akshaya Academy provides holistic education that connects students with nature while preparing them for a bright future.",
    phone: "+91 98765 43210",
    email: "info@akshayaacademy.edu.in",
    address: "123 Hill View Road, Palani, Tamil Nadu 624601",
    establishedYear: "2008",
  },
  academics: {
    programs: [
      {
        id: "1",
        name: "Pre-Primary (Nursery - UKG)",
        description:
          "Foundation learning through play-based activities and nature exploration.",
        ageGroup: "3-5 years",
        image: "./DataContextImg/DataContextImg1.jpg",
        features: [
          "Play-based learning",
          "Nature exploration",
          "Creative arts",
          "Basic literacy",
        ],
        duration: "3 years",
      },
      {
        id: "2",
        name: "Primary School (1st - 5th)",
        description:
          "Building core skills in mathematics, languages, sciences, and environmental studies.",
        ageGroup: "6-10 years",
        image: "./DataContextImg/DataContextImg2.jpeg",
        features: [
          "Core academics",
          "Environmental studies",
          "Sports",
          "Art & craft",
        ],
        duration: "5 years",
      },
      {
        id: "3",
        name: "Middle School (6th - 8th)",
        description:
          "Comprehensive curriculum with focus on critical thinking and creativity.",
        ageGroup: "11-13 years",
        image: " ./DataContextImg/DataContextImg3.jpeg",
        features: [
          "Critical thinking",
          "Science labs",
          "Technology",
          "Leadership skills",
        ],
        duration: "3 years",
      },
      {
        id: "4",
        name: "High School (9th - 12th)",
        description:
          "Advanced academics with career guidance and competitive exam preparation.",
        ageGroup: "14-17 years",
        image: " ./DataContextImg/DataContextImg4.jpeg",
        features: [
          "Advanced academics",
          "Career guidance",
          "Competitive exams",
          "Research projects",
        ],
        duration: "4 years",
      },
    ],
    subjects: [
      "Mathematics",
      "English",
      "Tamil",
      "Science",
      "Social Studies",
      "Environmental Science",
      "Arts & Crafts",
      "Physical Education",
      "Music",
      "Computer Science",
    ],
    methodology: {
      title: "Nature-Integrated Learning Approach",
      description:
        "Our unique teaching methodology combines traditional academics with hands-on environmental education, fostering both intellectual growth and ecological awareness.",
      image: " ./DataContextImg/DataContextImg5.jpeg",
      points: [
        "Outdoor classroom sessions in natural settings",
        "Project-based learning with real-world applications",
        "Integration of technology with nature studies",
        "Collaborative learning and peer mentoring",
        "Regular field trips and nature expeditions",
      ],
    },
    achievements: [
      {
        id: "1",
        title: "State Science Fair Winners",
        description:
          "Our students won first place in the Tamil Nadu State Science Fair for their innovative water purification project.",
        year: "2023",
        image: " ./DataContextImg/DataContextImg6.jpeg",
      },
      {
        id: "2",
        title: "Eco-School Certification",
        description:
          "Received the prestigious Green School certification for our environmental initiatives and sustainable practices.",
        year: "2023",
        image: " ./DataContextImg/DataContextImg7.jpeg",
      },
      {
        id: "3",
        title: "100% Board Results",
        description:
          "Achieved 100% pass rate in state board examinations with 85% students scoring above 90%.",
        year: "2024",
        image: " ./DataContextImg/DataContextImg8.jpeg",
      },
    ],
  },
  facilities: [
    {
      id: "1",
      name: "Eco-Friendly Classrooms",
      description:
        "Spacious, well-ventilated classrooms with modern teaching aids and natural lighting.",
      image: " ./DataContextImg/DataContextImg9.jpeg",
    },
    {
      id: "2",
      name: "Nature Laboratory",
      description:
        "Outdoor learning spaces where students explore botany, ecology, and environmental science.",
      image: " ./DataContextImg/DataContextImg10.jpeg",
    },
    {
      id: "3",
      name: "Library & Reading Garden",
      description:
        "Extensive collection of books with peaceful outdoor reading areas under the trees.",
      image: " ./DataContextImg/DataContextImg11.jpeg",
    },
    {
      id: "4",
      name: "Sports Complex",
      description:
        "Multi-purpose sports facilities including basketball, volleyball, and athletics track.",
      image: " ./DataContextImg/DataContextImg12.jpeg",
    },
    {
      id: "5",
      name: "Art Studio",
      description:
        "Creative spaces for painting, sculpture, and handicrafts with natural materials.",
      image: " ./DataContextImg/DataContextImg13.jpg",
    },
    {
      id: "6",
      name: "Organic Garden",
      description:
        "Student-maintained vegetable and herb gardens for hands-on learning about agriculture.",
      image: " ./DataContextImg/DataContextImg14.jpeg",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Priya Sharma",
      role: "Parent of Grade 7 Student",
      message:
        "Akshaya Academy has transformed my daughter's love for learning. The nature-integrated curriculum is exceptional.",
      image: "./DataContextImg/DataContextImg15.jpeg",
    },
    {
      id: "2",
      name: "Dr. Rajesh Kumar",
      role: "Parent & Local Physician",
      message:
        "The holistic approach to education here prepares children not just academically but emotionally and environmentally.",
      image: "./DataContextImg/DataContextImg16.jpeg",
    },
    {
      id: "3",
      name: "Anitha Devi",
      role: "Former Student, Now Engineer",
      message:
        "The environmental consciousness I developed at Akshaya Academy continues to guide my career choices today.",
      image: "./DataContextImg/DataContextImg17.jpeg",
    },
  ],
  events: [
    {
      id: "1",
      title: "Annual Science Fair",
      date: "2024-02-15",
      description:
        "Students showcase innovative projects focusing on environmental solutions and sustainability.",
      image: "./DataContextImg/DataContextImg18.jpeg",
    },
    {
      id: "2",
      title: "Earth Day Celebration",
      date: "2024-04-22",
      description:
        "Tree planting drive and environmental awareness programs with the local community.",
      image: "./DataContextImg/DataContextImg19.jpeg",
    },
    {
      id: "3",
      title: "Cultural Festival",
      date: "2024-01-26",
      description:
        "Celebrating Indian heritage through music, dance, and traditional crafts exhibition.",
      image: "./DataContextImg/DataContextImg20.jpeg",
    },
    {
      id: "4",
      title: "Sports Day",
      date: "2024-03-10",
      description:
        "Inter-house competitions featuring athletics, team sports, and yoga demonstrations.",
      image: "./DataContextImg/DataContextImg21.jpeg",
    },
  ],
  gallery: [
    {
      id: "1",
      title: "Morning Assembly",
      image:
        "./DataContextImg/DataContextImg22.jpeg",
      category: "School Life",
    },
    {
      id: "2",
      title: "Nature Study",
      image:
        "./DataContextImg/DataContextImg23.jpeg",
      category: "Academics",
    },
    {
      id: "3",
      title: "Art Class",
      image:
        "./DataContextImg/DataContextImg24.jpg",
      category: "Activities",
    },
    {
      id: "4",
      title: "Garden Work",
      image:
        "./DataContextImg/DataContextImg25.jpeg",
      category: "Academics",
    },
    {
      id: "5",
      title: "Sports Practice",
      image:
        "./DataContextImg/DataContextImg26.jpeg",
      category: "Sports",
    },
    {
      id: "6",
      title: "Reading Time",
      image:
        "./DataContextImg/DataContextImg27.jpeg",
      category: "School Life",
    },
  ],
};

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  const updateData = (newData) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const updateSchoolName = (newName) => {
    setData((prevData) => ({
      ...prevData,
      schoolInfo: {
        ...prevData.schoolInfo,
        name: newName,
      },
    }));
  };

  return (
    <DataContext.Provider value={{ data, updateData, updateSchoolName }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
