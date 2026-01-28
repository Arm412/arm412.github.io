import { AboutMeNavLocations } from "../../helpers/helpers";

type SideMenuProps = {
  navigateFunction: (location: AboutMeNavLocations) => void;
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
};

export default function SideMenu({
  navigateFunction = () => { },
  showMenu = false,
  setShowMenu = () => { },
  darkMode = false,
  setDarkMode = () => { },
}: SideMenuProps) {
  return (
    <div id="sideMenu" className={`side-menu font-mono bg-primary text-mainText flex flex-col h-full w-[250px] fixed top-0 right-0 z-50 shadow-lg transition-transform duration-300 ease-in-out ${showMenu ? "translate-x-0" : "translate-x-full"
      }`}>
      <div className="flex justify-between items-center p-2">
        <button
          className="relative w-10 h-10 bg-transparent border-none cursor-pointer z-50 flex items-center justify-center"
          onClick={() => setShowMenu(false)}
        >
          <span className="absolute w-full h-0.5 bg-textMain left-0 top-1/2 transition-all duration-300 ease rotate-45"></span>
          <span className="absolute w-full h-0.5 bg-textMain left-0 top-1/2 transition-all duration-300 ease -rotate-45"></span>
        </button>
        <label
          className="flex items-center justify-center text-textMain hover:text-textMain cursor-pointer select-none h-fit pr-4"
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
              <span className="ms-3 text-sm font-mono max-w-[50px] text-center">
                {darkMode ? "Dark Theme" : "Light Theme"}
              </span>
            </div>
          </div>
        </label>
      </div>
      <div className="flex flex-col h-full w-full text-textMain">
        <button className="w-full py-5 text-center text-[clamp(1rem,1.5vw,2.5rem)] border-t border-secondary cursor-pointer hover:text-primary hover:bg-secondary last:border-b" onClick={() => {
          navigateFunction(AboutMeNavLocations.AboutMe);
          setShowMenu(false);
        }}>
          <h4>About Me</h4>
        </button>
        <button className="w-full py-5 text-center text-[clamp(1rem,1.5vw,2.5rem)] border-t border-secondary cursor-pointer hover:text-primary hover:bg-secondary last:border-b" onClick={() => {
          navigateFunction(AboutMeNavLocations.Skills);
          setShowMenu(false);
        }}>
          <h4>Skills</h4>
        </button>
        <button className="w-full py-5 text-center text-[clamp(1rem,1.5vw,2.5rem)] border-t border-secondary cursor-pointer hover:text-primary hover:bg-secondary last:border-b" onClick={() => {
          navigateFunction(AboutMeNavLocations.WorkExperience);
          setShowMenu(false);
        }}>
          <h4>Work Experience</h4>
        </button>
        <button className="w-full py-5 text-center text-[clamp(1rem,1.5vw,2.5rem)] border-t border-secondary cursor-pointer hover:text-primary hover:bg-secondary last:border-b" onClick={() => {
          navigateFunction(AboutMeNavLocations.Portfolio);
          setShowMenu(false);
        }}>
          <h4>Portfolio</h4>
        </button>
        <button className="w-full py-5 text-center text-[clamp(1rem,1.5vw,2.5rem)] border-t border-secondary cursor-pointer hover:text-primary hover:bg-secondary last:border-b" onClick={() => {
          navigateFunction(AboutMeNavLocations.Education);
          setShowMenu(false);
        }}>
          <h4>Education</h4>
        </button>
        <button className="w-full py-5 text-center text-[clamp(1rem,1.5vw,2.5rem)] border-t border-secondary cursor-pointer hover:text-primary hover:bg-secondary last:border-b" onClick={() => {
          navigateFunction(AboutMeNavLocations.ContactInfo);
          setShowMenu(false);
        }}>
          <h4>Contact Info</h4>
        </button>
        <div className="flex flex-row w-full h-[100px] mt-auto justify-around items-center">
          <button className="border-none shadow-[gray_-2px_2px_1px] bg-white flex items-center justify-center w-[50px] h-[50px] hover:bg-gray-100 hover:shadow-[gray_-4px_4px_3px] hover:translate-x-[1px] hover:-translate-y-[1px]" onClick={() => window.open("https://www.linkedin.com/in/adam-mitro-3b1a6a142/", "_blank")}>
            <img src="/icons/linkedin.png" alt="LinkedIn" className="w-[30px] h-[30px]" />
          </button>
          <button className="border-none shadow-[gray_-2px_2px_1px] bg-white flex items-center justify-center w-[50px] h-[50px] hover:bg-gray-100 hover:shadow-[gray_-4px_4px_3px] hover:translate-x-[1px] hover:-translate-y-[1px]" onClick={() => window.open("https://www.github.com/Arm412", "_blank")}>
            <img src="/icons/github.png" alt="GitHub" className="w-[30px] h-[30px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
