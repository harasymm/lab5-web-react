import Header from "./Components/Header";
import Summary from "./Components/Summary";
import PersonalInfo from "./Components/PersonalInfo";
import SocialMedia from "./Components/SocialMedia";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Reviews from "./Components/Reviews";
import ContactForm from "./Components/ContactForm";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 7 && currentHour < 21) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <div
      className={
        theme === "dark"
          ? "relative min-h-screen flex flex-col items-center overflow-hidden bg-[#111] text-white"
          : "relative min-h-screen flex flex-col items-center overflow-hidden bg-gray-200 text-black"
      }
    >
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 bg-[#1d3d72] text-white px-4 py-2 rounded cursor-pointer"
        >
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
        <div className="bg-white">
              <img
                src="src/images/16833522_10154869194603787_1517635754_o-1-1024x971.png"
                alt="LPNU"
                className={`
                  absolute
                  left-[-5px]
                  top-1/2
                  -translate-y-1/2
                  rotate-[-25deg]
                  w-[450px]
                  pointer-events-none
                  select-none
                  ${theme === "dark" ? "opacity-30 bg-white rounded-full" : "opacity-10"}
                `}
              />

              <img
                src="src/images/arton141.png"
                alt="LPNU"
                className={`
                  absolute
                  right-[-5px]
                  top-1/2
                  -translate-y-1/2
                  rotate-[25deg]
                  w-[450px]
                  pointer-events-none
                  select-none
                  ${theme === "dark" ? "opacity-30 bg-white rounded-full" : "opacity-10"}
                `}
              />
        </div>

        <ContactForm />

        <div className="relative z-10 px-5 py-10">
          <div
            className={
              theme === "dark"
                ? "max-w-3xl mx-auto bg-gray-800 p-3 rounded-t-2xl shadow-lg "
                : "max-w-3xl mx-auto bg-white p-3 rounded-t-2xl shadow-lg"
            }
          >
            <Header/>
            <Summary theme={theme}/>
            <PersonalInfo theme={theme}/>
            <Education theme={theme} />
            <Skills theme={theme} />
            <Projects theme={theme} />
            <SocialMedia theme={theme} />
            <Reviews theme={theme}/>
          </div>

          <Footer />
        </div>
    </div>
  );
}

export default App;