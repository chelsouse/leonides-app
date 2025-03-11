import styles from "./Sidebar.module.css";

import menuImage from "../../../../elements/assets/images/image04.jpg";
import menuIconImage from "../../../../elements/assets/menu/menu-need-2.jpg";
import closeButton from "../../../../elements/images/menu-rot.svg";

function Sidebar({ isOpen, setIsOpen }) {
  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.content}>
        <div className={styles.headerMenu}>
          <h2>Menu</h2>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
          >
            <img src={closeButton} alt="Close button" />
          </button>
        </div>

        <div className={styles.contentMenu}>
          <div
            className={styles.menuElement}
            onClick={() => scrollToSection("about")}
          >
            <img src={menuIconImage} alt=" " />
            <p className={styles.menuNumber}>01</p>
            <p className={styles.menuLabel}>O spoločnosti</p>
          </div>
          <div className={styles.menuElement}>
            <img src={menuIconImage} alt=" " />
            <p className={styles.menuNumber}>02</p>
            <p className={styles.menuLabel}>Čo ponúka Leonides?</p>
          </div>
          <div
            className={styles.menuElement}
            onClick={() => scrollToSection("need")}
          >
            <img src={menuIconImage} alt=" " />
            <p className={styles.menuNumber}>03</p>
            <p className={styles.menuLabel}>Potreby ľudí</p>
          </div>

          <div className={styles.menuElement}>
            <img src={menuIconImage} alt=" " />
            <p className={styles.menuNumber}>04</p>
            <p className={styles.menuLabel}>Zmeň svoj život</p>
          </div>
          <div className={styles.menuElement}>
            <img src={menuIconImage} alt=" " />
            <p className={styles.menuNumber}>05</p>
            <p className={styles.menuLabel}>Partneri</p>
          </div>
          <div
            className={styles.menuElement}
            onClick={() => scrollToSection("contact")}
          >
            <img src={menuIconImage} alt=" " />
            <p className={styles.menuNumber}>06</p>
            <p className={styles.menuLabel}>Kontakt</p>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img src={menuImage} alt=" " />
      </div>
    </div>
  );
}

export default Sidebar;
