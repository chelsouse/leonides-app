import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Sidebar from "./components/pages/HomePage/Sidebar/Sidebar";
import About from "./components/pages/About/About";
import Images from "./components/pages/HomePage/Images/Images";
import Need from "./components/pages/Need/Need";
import Contact from "./components/pages/Contact/Contact";
import Map from "./components/pages/HomePage/Map/Map";

import menuButton from "./elements/images/menu.svg";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  const handleScroll = () => {
    const sections = ["about", "need", "contact"];
    let foundActive = "";

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          foundActive = sectionId;
        }
      }
    });

    setActiveButton(foundActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveButton(sectionId);
    }
  };
  return (
    <div className="App">
      <nav className={styles.navbar}>
        <button
          className={`${styles.navButton} ${
            activeButton === "about" ? styles.active : ""
          }`}
          onClick={() => scrollToSection("about")}
        >
          01
        </button>
        <button
          className={`${styles.navButton} ${
            activeButton === "need" ? styles.active : ""
          }`}
          onClick={() => scrollToSection("need")}
        >
          02
        </button>
        <button className={styles.menuButton} onClick={() => setIsOpen(true)}>
          <img src={menuButton} alt="Menu Button " />
        </button>
        <button
          className={`${styles.navButton} ${
            activeButton === "contact" ? styles.active : ""
          }`}
          onClick={() => scrollToSection("contact")}
        >
          03
        </button>
      </nav>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <About id="about" />
      <Images />
      <Need id="need" />
      <Map />
      <Contact id="contact" />
    </div>
  );
}

export default App;
