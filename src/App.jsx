import { useState } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { BiTrash } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBriefcase,
  FaGraduationCap,
  FaPlus,
  FaGithub,
} from "react-icons/fa";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [experiences, setExperiences] = useState([
    // Initial experience object
    {
      company: "",
      position: "",
      description: "",
      datew: "",
    },
  ]);
  const [educations, setEducations] = useState([
    // Initial education object
    {
      institution: "",
      degree: "",
      date: "",
    },
  ]);

  const handleClear = () => {
    setName("");
    setPhone("");
    setEmail("");
    setEducations([
      // Reset to initial education object
      {
        institution: "",
        degree: "",
        date: "",
      },
    ]);
    setExperiences([
      // Reset to initial experience object
      {
        company: "",
        position: "",
        description: "",
        datew: "",
      },
    ]);
  };

  const handleLoad = () => {
    // Load example data
    setName("John Doe");
    setPhone("0766269404");
    setEmail("john-doe@email.com");
    setEducations([
      {
        institution: "Romanian-American University",
        degree: "Bachelor of Computer Science",
        date: "01/10/2021-07/08/2024",
      },
    ]);
    setExperiences([
      {
        company: "JohnDoeINC",
        position: "FullStack Developer",
        description: "Create responsive websites for different clients",
        datew: "07/08/2024-01/12/2025",
      },
    ]);
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        institution: "",
        degree: "",
        date: "",
      },
    ]);
  };

  const removeEducation = (index) => {
    const newEducations = [...educations];
    newEducations.splice(index, 1);
    setEducations(newEducations); // Update educations state
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: "",
        position: "",
        description: "",
        datew: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
  };

  return (
    <div>
      <div className="flex justify-around p-10 bg-gray-200 min-h-screen">
        <div className="bg-gray-100 rounded-lg shadow-2xl p-8">
          <div className="flex justify-between mb-4">
            <button
              className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onClick={handleClear}
            >
              <MdClear className="inline-block mr-2" /> Clear
            </button>
            <button
              className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onClick={handleLoad}
            >
              <FaPlus className="inline-block mr-2" /> Load Example
            </button>
          </div>
          <General
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
          />
          <div>
            {educations.map((education, index) => (
              <div key={index} className="mb-4 mt-2">
                <Education
                  institution={education.institution}
                  setInstitution={(value) =>
                    setEducations((prevEducations) => {
                      const newEducations = [...prevEducations];
                      newEducations[index].institution = value;
                      return newEducations;
                    })
                  }
                  degree={education.degree}
                  setDegree={(value) =>
                    setEducations((prevEducations) => {
                      const newEducations = [...prevEducations];
                      newEducations[index].degree = value;
                      return newEducations;
                    })
                  }
                  date={education.date}
                  setDate={(value) =>
                    setEducations((prevEducations) => {
                      const newEducations = [...prevEducations];
                      newEducations[index].date = value;
                      return newEducations;
                    })
                  }
                />
                <button
                  className="mt-5 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onClick={() => removeEducation(index)}
                >
                  <BiTrash className="inline-block mr-2" /> Remove Education
                </button>
              </div>
            ))}
            <button
              className="mt-5 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onClick={addEducation}
            >
              <FaPlus className="inline-block mr-2" /> Add Education
            </button>
          </div>
          {experiences.map((experience, index) => (
            <div key={index} className="mb-4 mt-2">
              <Experience
                company={experience.company}
                setCompany={(value) =>
                  setExperiences((prevExperiences) => {
                    const newExperiences = [...prevExperiences];
                    newExperiences[index].company = value;
                    return newExperiences;
                  })
                }
                position={experience.position}
                setPosition={(value) =>
                  setExperiences((prevExperiences) => {
                    const newExperiences = [...prevExperiences];
                    newExperiences[index].position = value;
                    return newExperiences;
                  })
                }
                description={experience.description}
                setDescription={(value) =>
                  setExperiences((prevExperiences) => {
                    const newExperiences = [...prevExperiences];
                    newExperiences[index].description = value;
                    return newExperiences;
                  })
                }
                datew={experience.datew}
                setDatew={(value) =>
                  setExperiences((prevExperiences) => {
                    const newExperiences = [...prevExperiences];
                    newExperiences[index].datew = value;
                    return newExperiences;
                  })
                }
              />
              <button
                className="mt-5 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onClick={() => removeExperience(index)}
              >
                <BiTrash className="inline-block mr-2" /> Remove Experience
              </button>
            </div>
          ))}
          <button
            className="mt-5 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onClick={addExperience}
          >
            <FaPlus className="inline-block mr-2" /> Add Experience
          </button>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-2xl p-8 w-1/4">
          <h1 className="text-3xl font-bold mb-4">CV Preview</h1>
          <div className="text-lg">
            <div className="mb-6">
              <div className="flex items-baseline">
                <FaUser className="mr-2" />
                <h2 className="text-xl font-bold mb-3">About Me</h2>
              </div>
              <div className="flex items-baseline">
                <FaUser className="mr-2" />
                <p>
                  <span className="font-bold">Name:</span> {name}
                </p>
              </div>
              <div className="flex items-baseline">
                <FaPhone className="mr-2" />
                <p>
                  <span className="font-bold">Phone:</span> {phone}
                </p>
              </div>
              <div className="flex items-baseline">
                <FaEnvelope className="mr-2" />
                <p>
                  <span className="font-bold">Email:</span> {email}
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline">
                <FaGraduationCap className="mr-2" />
                <h2 className="text-xl font-bold mb-2">Education</h2>
              </div>
              {educations.map((education, index) => (
                <div key={index} className="mb-2">
                  <p>
                    <span className="font-bold">Institution:</span>{" "}
                    {education.institution}
                  </p>
                  <p>
                    <span className="font-bold">Degree:</span>{" "}
                    {education.degree}
                  </p>
                  <p>
                    <span className="font-bold">Date:</span> {education.date}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-baseline">
                <FaBriefcase className="mr-2" />
                <h2 className="text-xl font-bold mb-2">Experience</h2>
              </div>
              {experiences.map((experience, index) => (
                <div key={index} className="mb-2">
                  <p>
                    <span className="font-bold">Company:</span>{" "}
                    {experience.company}
                  </p>
                  <p>
                    <span className="font-bold">Position:</span>{" "}
                    {experience.position}
                  </p>
                  <p>
                    <span className="font-bold">Description:</span>{" "}
                    {experience.description}
                  </p>
                  <p>
                    <span className="font-bold">Date:</span> {experience.datew}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 mb-4">
        <p className="text-gray-600 text-lg">&copy; 2024 stefanyves</p>
        <a
          href="https://github.com/StefanYves"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <FaGithub className="text-gray-600 text-3xl hover:text-gray-800" />
        </a>
      </div>
    </div>
  );
}

export default App;
