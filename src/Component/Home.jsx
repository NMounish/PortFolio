import React, { useEffect, useState } from "react";
import {
  callOutline,
  mailOutline,
  locationOutline,
  codeSlashOutline,
  terminalOutline,
  logoLinkedin,
  logoGithub,
} from "ionicons/icons";
import emailjs from "emailjs-com"; // Add this import
import { IonIcon } from "@ionic/react";
import MounishImage from "../assets/Mounish.jpg";
import Project1 from "../assets/Projects1.jpg";
import Project2 from "../assets/Projects2.jpg";
import Project3 from "../assets/Projects3.jpg";
import Project4 from "../assets/Projects4.jpg";
import leetcode from "../assets/leetcode.png";
import hackerrank from "../assets/hackerrank.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home = () => {
  const [activeSection, setActiveSection] = useState("home"); // Tracks the currently active section
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    setActiveSection(id);

    // Get the element by id
    const element = document.getElementById(id);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust the offset for navbar height (adjust as needed)
        behavior: "smooth",
      });
      // Scroll smoothly to the element, adjusting for the navbar height
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is in view
          if (rect.top >= 0 && rect.top < window.innerHeight - navbarHeight) {
            setActiveSection(id);
          }
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9zhdfce",
        "template_6t6x44n",
        e.target,
        "Cu1rs7i27isFjBk3K"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          alert("Message Sending Failed! Please try again.");
        }
      );
  };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            PORTFOLIO
          </span>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ml-auto">
            <a
              href="/21CSR115-Mounish-Resume.pdf"
              download="Mounish-Resume.pdf"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
            >
              DOWNLOAD
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 lg:flex lg:ml-96 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:ml-auto md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {["home", "about", "projects", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                      activeSection === section ? "bg-blue-700 text-white" : ""
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
              <li className="flex items-center space-x-3">
                <a
                  href="https://wa.me/919787828533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-2xl text-green-500 hover:text-green-600 px-4"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nachimuthu.mounish@gmail.com"
                  className="flex text-2xl text-blue-500 hover:text-blue-600 px-4"
                  aria-label="Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mounish-n-406751234/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-2xl text-blue-700 hover:text-blue-800 px-6"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/NMounish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-2xl text-gray-800 hover:text-gray-900 px-2"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div className="mt-20 md:mt-32 lg:mt-48 px-6 md:px-12 lg:px-20">
        {activeSection === "home" && (
          <div
            id="home"
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <img
              className="rounded-full w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80 mb-8 md:mb-0"
              src={MounishImage}
              alt="Mounish N - Web Developer"
            />
            <div className="flex flex-col md:items-end md:ml-24 text-center md:text-right space-y-4">
              <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-800 dark:text-white">
                MOUNISH N
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
                WEB DEVELOPER
              </p>
              <div className="w-32 sm:w-64 md:w-72 h-1 bg-blue-700 self-center md:self-end"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
                "Let’s create something extraordinary together—your vision,
                brought to life with precision and creativity."
              </p>
            </div>
          </div>
        )}

        {activeSection === "about" && (
          <div id="about" className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
              ABOUT ME
            </h2>
            <p className="text-lg leading-relaxed whitespace-normal">
              "Hi, I'm Mounish, and I'm from Erode. I completed my schooling at
              Kongu National Matric Hr. Sec. School. Currently, I am pursuing a
              BE degree in Computer Science at Kongu Engineering College. As a
              fresher, I have a solid understanding of technologies like Java,
              React, Spring Boot, and MySQL. My strength lies in being a
              self-motivated individual and a quick learner of new skills. I
              have also worked on various projects, where I developed
              problem-solving abilities and hands-on experience in software
              development. I have participated in hackathons and coding
              challenges, which helped me improve my critical thinking and
              coding efficiency. I am also passionate about learning emerging
              technologies, such as machine learning and cloud computing, to
              stay ahead in the industry. One of my proudest achievements is
              scoring 85% in my 12th standard. I'm looking forward to starting
              my career as a Software Engineer, where I can apply my skills,
              learn from experienced professionals, and contribute positively to
              the organization while growing both personally and
              professionally."{" "}
            </p>
          </div>
        )}

        {activeSection === "projects" && (
          <div id="projects" className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
              PROJECTS
            </h2>
            <div className="overflow-auto flex flex-col gap-8 p-4 scroll-smooth sm:flex-col lg:flex-row">
              <div className="snap-center flex-shrink-0">
                <img
                  src={Project1}
                  className=" sm:w-full md:w-96 mx-auto h-auto"
                  alt="Project 1"
                />
                <div className="mt-4 text-center">
                  <p className="text-lg font-medium">
                    Leather Product Application
                  </p>
                  <a
                    href="https://github.com/NMounish/Consultancy.git"
                    className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW
                  </a>
                </div>
              </div>
              <div className="snap-center flex-shrink-0">
                <img
                  src={Project2}
                  className=" sm:w-full md:w-96 mx-auto h-auto"
                  alt="Project 2"
                />
                <div className="mt-4 text-center">
                  <p className="text-lg font-medium">
                    Hospital Management System
                  </p>
                  <a
                    href="https://github.com/NMounish/Hospital-Management-System.git"
                    className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW
                  </a>
                </div>
              </div>
              <div className="snap-center flex-shrink-0">
                <img
                  src={Project3}
                  className="sm:w-full md:w-96 mx-auto h-auto"
                  alt="Project 3"
                />
                <div className="mt-4 text-center">
                  <p className="text-lg font-medium">To-Do-List</p>
                  <a
                    href="https://github.com/NMounish/To-Do-List.git"
                    className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW
                  </a>
                </div>
              </div>
              <div className="snap-center flex-shrink-0">
                <img
                  src={Project4}
                  className="sm:w-full md:w-96 mx-auto h-auto"
                  alt="Project 3"
                />
                <div className="mt-4 text-center">
                  <p className="text-lg font-medium">Mouse Trial</p>
                  <a
                    href="https://github.com/NMounish/Mouse-Trial-Effect.git"
                    className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeSection === "contact" && (
          <div id="contact" className="antialiased  flex justify-center -mt-12">
            <div className="flex flex-col md:flex-row bg-cyan-700 w-full max-w-6xl p-8 rounded-xl shadow-lg text-white">
              {/* Contact Info - Left Side */}
              <div className="flex flex-col space-y-6 w-full md:w-1/2">
                <h1 className="font-bold text-4xl tracking-wide text-center md:text-left">
                  Contact Us
                </h1>
                <div className="flex flex-col gap-4 md:gap-6">
                  <div className="flex flex-wrap space-x-2 items-center">
                    <IonIcon
                      icon={callOutline}
                      className="text-teal-300 text-xl md:text-xl"
                    />
                    <span>+91 9787828533</span>
                  </div>
                  <div className="flex flex-wrap space-x-2 items-center">
                    <IonIcon
                      icon={mailOutline}
                      className="text-teal-300 text-lg md:text-xl"
                    />
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=nachimuthu.mounish@gmail.com"
                      className="text-sm md:text-base break-all text-white hover:text-blue-600"
                      aria-label="Send email to nachimuthu.mounish@gmail.com"
                    >
                      nachimuthu.mounish@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-wrap space-x-2 items-center">
                    <IonIcon
                      icon={locationOutline}
                      className="text-teal-300 text-xl md:text-xl"
                    />
                    <span className="text-sm md:text-base">
                      76, Thirumalai Street, Veerappan Chatram, Erode, Tamil
                      Nadu, India
                    </span>
                  </div>
                  <div className="flex space-x-8 text-lg mt-36">
                    <a href="https://leetcode.com/u/NMounish1234/" target="_blank" rel="noopener noreferrer">
                      <img src={leetcode} className="w-6 h-6  transition-transform transform hover:scale-125 hover:opacity-80 hover:brightness-125"></img>
                    </a>
                    <a href="https://www.hackerrank.com/profile/leetcode_mounish" target="_blank" rel="noopener noreferrer">
                      <img src={hackerrank} className="w-6 h-6  transition-transform transform hover:scale-125 hover:opacity-80 hover:brightness-125"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/mounish-n-406751234/" target="_blank" rel="noopener noreferrer">
                      <IonIcon icon={logoLinkedin} className=" w-6 h-6 transition-transform transform hover:scale-125 hover:opacity-80 hover:brightness-125"/>
                    </a>
                    <a href="https://github.com/NMounish/AJP.git" target="_blank" rel="noopener noreferrer">
                      <IonIcon icon={logoGithub} className=" w-6 h-6 transition-transform transform hover:scale-125 hover:opacity-80 hover:brightness-125" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form - Right Side */}
              <div className="bg-white rounded-xl shadow-lg p-8 w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
                <form
                  onSubmit={sendEmail}
                  method="post"
                  className="flex flex-col space-y-4"
                >
                  <div>
                    <label className="text-sm text-black" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name" // Name matches the placeholder in the template
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="ring-1 ring-gray-300 text-black w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-black" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email" // Email matches the placeholder in the template
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="ring-1 ring-gray-300 text-black w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-black" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message" // Message matches the placeholder in the template
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="4"
                      className="ring-1 ring-gray-300 text-black w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
