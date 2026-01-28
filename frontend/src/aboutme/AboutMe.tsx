import React, { useEffect, useState } from "react";
import WorkExperienceItem from "../components/WorkExperienceItem/WorkExperienceItem";
import { workExperiences, AboutMeNavLocations, PortfolioProjects, LanguageIcons, ToolIcons, FrameworkIcons } from "../helpers/helpers";
import PortfolioItem from "../components/PortfolioItem/PortfolioItem";
import SideMenu from "../components/SideMenu/SideMenu";
import IconListItem from "../components/IconListItem/IconListItem";

const AboutMe: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [showMenu, setShowMenu] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setModalImage(src);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));

    const sideMenu = document.getElementById("aboutMe");
    if (sideMenu) {
      sideMenu.classList.toggle("dark-theme", darkMode);
    }
  }, [darkMode]);

  useEffect(() => {
    const queryParam = document.URL.split("?")[1];
    if (queryParam) {
      const section = queryParam.split("=")[1];
      if (section) {
        goTo(section as AboutMeNavLocations);
      }
    }
  }, []);

  function goTo(location: AboutMeNavLocations) {
    const element = document.getElementById(location);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for fixed header height
        behavior: "smooth"
      });
    }
  }

  return (
    <div id="aboutMe" className="font-mono bg-primary">
      <div className="fixed top-2 right-2 w-[50px] h-[50px] z-30 flex flex-col justify-center items-center gap-1 cursor-pointer md:hidden bg-primary" onClick={() => setShowMenu(true)}>
        <span className="block w-8 h-1 bg-textMain rounded"></span>
        <span className="block w-8 h-1 bg-textMain rounded"></span>
        <span className="block w-8 h-1 bg-textMain rounded"></span>
      </div>
      <SideMenu navigateFunction={goTo}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        darkMode={darkMode}
        setDarkMode={setDarkMode} />
      <div className="w-full h-20 bg-primary border-b-2 border-b-secondary md:flex hidden shadow-lg fixed z-10">
        {/* <button className="absolute flex top-0 left-0 items-center text-secondary hover:text-textMain w-50 h-20 pl-4" onClick={() => window.history.back()}>
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          <span>Back</span>
        </button> */}
        <div className="flex w-full justify-center">
          <div className="flex items-center w-1/2 justify-evenly gap-5">
            <button className="h-full flex-1 flex items-center justify-center text-secondary hover:text-textMain py-auto" onClick={() => goTo(AboutMeNavLocations.WorkExperience)}>
              <span>Work Experience</span>
            </button>
            <button className="h-full flex-1 flex items-center justify-center text-secondary hover:text-textMain py-auto" onClick={() => goTo(AboutMeNavLocations.Portfolio)}>
              <span>Portfolio</span>
            </button>
            <button className="h-full flex-1 flex items-center justify-center text-secondary hover:text-textMain py-auto" onClick={() => goTo(AboutMeNavLocations.Education)}>
              <span>Education</span>
            </button>
            <button className="h-full flex-1 flex items-center justify-center text-secondary hover:text-textMain py-auto" onClick={() => goTo(AboutMeNavLocations.ContactInfo)}>
              <span>Contact Info</span>
            </button>
          </div>
        </div>
        <label
          className="absolute right-0 top-0 flex items-center justify-center text-secondary hover:text-textMain cursor-pointer select-none h-20 pr-4"
          onClick={(e) => {
            e.preventDefault();
            setDarkMode(!darkMode);
          }}
        >
          <div className="flex justify-center items-center flex-col">
            <div className="inline-flex items-center">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode}
                onChange={() => { }}
                readOnly
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600 bg-secondary" />
              <span className="ms-3 text-sm font-mono">
                {darkMode ? "Dark Mode" : "Light Mode"}
              </span>
            </div>
          </div>
        </label>
      </div>
      <div className="min-h-screen text-white py-5">
        <section className="flex flex-col md:flex-row items-center gap-8 p-6 max-w-7xl mx-auto md:my-20">
          <div className="w-fit px-[50px] md:px-0">
            <img src="Adam.png" alt="Adam Mitro" className="rounded-full shadow-lg w-full h-auto object-cover border-4 border-secondary" />
          </div>

          <div className="bg-cardBg p-6 rounded-lg border border-secondary shadow-lg w-fit">
            <h2 className="text-secondary text-3xl font-bold mb-4 font-mono">About Me</h2>
            <p className="text-lg text-textMain font-mono">
              Hi, I'm Adam Mitro. I'm a full-stack engineer passionate about building projects that keep me on the cutting edge of programming languages and technologies.
              I thrive on exploring new tools and frameworks to continuously sharpen my skills and stay ahead in the ever-evolving world of software development.
            </p>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="flex flex-col md:flex-row items-center gap-8 py-6 w-full mx-auto mb-20">
          <div className="bg-cardBg p-6 border-y border-secondary shadow-lg overflow-hidden w-full">
            <h2 className="text-secondary text-3xl font-bold pb-6 font-mono">Languages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Object.entries(LanguageIcons).map(([key, language]) => (
                <IconListItem icon={language.icon} name={language.name} key={key} />
              ))}
            </div>

            <h2 className="text-secondary text-3xl font-bold pb-6 font-mono mt-10">Tools and Testing</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Object.entries(ToolIcons).map(([key, tool]) => (
                <IconListItem icon={tool.icon} name={tool.name} key={key} />
              ))}
            </div>

            <h2 className="text-secondary text-3xl font-bold pb-6 font-mono mt-10">Frameworks & Libraries</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Object.entries(FrameworkIcons).map(([key, framework]) => (
                <IconListItem icon={framework.icon} name={framework.name} key={key} />
              ))}
            </div>
          </div>
        </section>
        {/* Work Experience Section */}
        <section id="workExperience" className="flex flex-col md:flex-row items-center gap-8 py-6 w-full mx-auto mb-20">
          <div className="bg-cardBg p-6 border-y border-secondary shadow-lg overflow-hidden w-full">
            <h2 className="text-secondary text-3xl font-bold pb-6 font-mono">Work Experience</h2>
            {workExperiences.map((experience, index) => (
              <React.Fragment key={index}>
                {index > 0 && <hr className="border-secondary my-4" />}
                <WorkExperienceItem
                  companyName={experience.companyName}
                  jobDuties={experience.jobDuties}
                  programmingLanguages={experience.programmingLanguages}
                  media={experience.media || []}
                  onImageClick={handleImageClick}
                />
              </React.Fragment>
            ))}
          </div>
        </section>
        {/* Portfolio Section */}
        <section id="portfolio" className="flex flex-col md:flex-row items-center gap-8 py-6 w-full mx-auto mb-20">
          <div className="bg-cardBg p-6 border-y border-secondary shadow-lg w-full">
            <h2 className="text-secondary text-3xl font-bold pb-6 font-mono">Portfolio Projects</h2>
            {PortfolioProjects.map((project, projIndx) => (
              <React.Fragment key={projIndx}>
                {projIndx > 0 && <hr className="border-secondary my-4" />}
                <PortfolioItem
                  key={projIndx}
                  projectName={project.projectName}
                  features={project.features}
                  programmingLanguages={project.programmingLanguages}
                />
              </React.Fragment>
            ))}
          </div>
        </section>
        {/* Education Section */}
        <section id="education" className="flex flex-col lg:flex-row items-start gap-8 py-6 w-full mx-auto mb-20">
          <div className="flex flex-col lg:flex-row bg-cardBg p-6 border-y border-secondary shadow-lg w-full justify-between">
            <div className="w-full lg:w-1/2">
              <h2 className="text-secondary text-3xl font-bold mb-4 font-mono">Education</h2>
              <p className="text-lg text-textMain font-mono">
                University of Pittsburgh, B.S. in Computer Science
              </p>
              <p className="text-lg text-textMain font-mono">Start: 2013</p>
              <p className="text-lg text-textMain font-mono">End: 2017</p>
              <p className="text-lg text-textMain font-mono">GPA: 3.3; Honors Graduate</p>
            </div>
            <div className="flex items-center gap-4 w-full lg:w-1/2 justify-center mt-6 lg:mt-0">
              <div className="h-full max-h-[150px] aspect-square flex items-center">
                <img src="/Pitt.png" alt="Pitt" className="max-h-full object-contain" />
              </div>
              <div className="h-full max-h-[150px] aspect-square flex items-center">
                <img src="/PittPanther.png" alt="Panther" className="max-h-full object-contain" />
              </div>
              <div className="h-full max-h-[150px] aspect-square flex items-center">
                <img src="/PantherPaw.png" alt="Paw" className="max-h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section id="contactInfo" className="flex flex-col md:flex-row items-center gap-8 py-6 w-full mx-auto mb-20">
          <div className="bg-cardBg p-6  border-y border-secondary w-full shadow-lg">
            <h2 className="text-secondary text-3xl font-bold mb-4 font-mono">Contact Info</h2>
            <p className="text-lg text-textMain font-mono">
              Email - <a href="mailto:adam.mitro@gmail.com" className="text-secondary hover:text-textMain">adam.mitro@gmail.com</a>
            </p>
            <p className="text-lg text-textMain font-mono">
              Github - <a href="https://www.github.com/Arm412" className="text-secondary hover:text-textMain">Arm412</a>
            </p>
            <p className="text-lg text-textMain font-mono">
              LinkedIn - <a href="https://www.linkedin.com/in/adam-mitro-3b1a6a142/" className="text-secondary hover:text-textMain">Adam Mitro</a>
            </p>
          </div>
        </section>
        <div className="flex flex-col md:flex-column items-center gap-8 p-6 max-w-7xl mx-auto mb-20">
          <h2 className="text-secondary text-3xl font-bold mb-4 font-mono">Credit</h2>
          <p className="text-textMain">Icons by Icons8 —
            <a href="https://icons8.com" className="text-secondary hover:text-textMain"> https://icons8.com </a></p>
        </div>
      </div>
      {/* Modal for image preview */}
      {modalImage && (
        <div className="fixed p-4 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setModalImage(null)}>
          <div className="relative flex flex-col items-center max-w-full p-10" style={{ width: "fit-content" }} onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white text-2xl font-bold z-10" onClick={() => setModalImage(null)}>&times;</button>
            <img src={modalImage} alt="Preview" className="max-h-[80vh] w-auto rounded shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutMe;
