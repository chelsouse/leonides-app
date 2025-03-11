import styles from "./About.module.css";

import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import IntersectionAnimation from "../../shared/IntersectionAnimation";
import SharedMenuElement from "../../shared/SharedMenuElement/SharedMenuElement";

import moneyPicture from "../../../elements/assets/images/money copy.png";
import menuAbout1 from "../../../elements/assets/menu/menu-about-1.jpg";
import menuAbout2 from "../../../elements/assets/menu/menu-about-2.jpg";
import menuAbout3 from "../../../elements/assets/menu/menu-about-3.jpg";

function About({ id }) {
  const containerRef = IntersectionAnimation(
    styles.menuAboutElement,
    styles.visible
  );

  return (
    <section className={styles.aboutSection} id={id}>
      <div className={styles.aboutContainer}>
        <SectionHeader
          title="O spoločnosti"
          subtitle="LEONEDIS"
          className={styles.aboutHeader}
        />

        <div className={styles.menuAboutContainer} ref={containerRef}>
          <SharedMenuElement
            title="Inšpirovaný históriou"
            image={menuAbout1}
            altText="Menu About 1"
            className={styles.menuAboutElement}
          />

          <SharedMenuElement
            title=" Vízia a poslanie"
            image={menuAbout2}
            altText="Menu About 2"
            className={styles.menuAboutElement}
          />

          <SharedMenuElement
            title="Hodnoty leonedis"
            image={menuAbout3}
            altText="Menu About 3"
            className={styles.menuAboutElement}
          />
        </div>

        <article>
          <h2>Inšpirovaný históriou</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            rutrum risus, at faucibus elit. Aliquam condimentum, neque quis
            tristique consectetur, diam nibh tempus est, imperdiet ultricies
            velit erat vel est. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Fusce ultrices sed felis
            non vulputate. Cras justo nibh, pretium at sem vitae, fringilla
            venenatis elit. Etiam rhoncus pellentesque porta. Aenean id
            efficitur nisl, nec tristique ante. Nullam non augue tristique,
            elementum quam non, finibus mauris. Proin nec vulputate lectus, eu
            ultrices ex.
          </p>

          <p>
            Mauris nec enim ultricies, viverra turpis in, feugiat metus.
            Vestibulum et ullamcorper risus, sit amet egestas odio. Maecenas
            eget nibh pulvinar, facilisis elit vitae, porta mi. In sit amet arcu
            ac sem placerat lobortis. Quisque vulputate blandit feugiat.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Proin lobortis urna justo, et mollis sem
            rutrum id. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Etiam placerat diam risus. Nam
            aliquam, tortor vel egestas vehicula, ante eros elementum nunc, sit
            amet elementum massa lectus id nisi. Sed aliquam, neque a tempus
            ornare, odio urna gravida urna, sed commodo nulla urna quis nunc.
            Nulla viverra tempor ipsum, vel vestibulum ligula pretium dignissim.
            Etiam lacinia convallis venenatis. Cras egestas sed nunc nec
            finibus. Nullam sit amet pharetra tellus, in consectetur lorem.
            Maecenas tellus dui, aliquam eget fringilla ac, tincidunt
            consectetur enim.
          </p>
        </article>
        <article>
          <h2>Vízia a poslanie</h2>
          <p>
            Donec convallis eros sem, vitae commodo tellus pharetra vel. Nam
            suscipit euismod lectus, sit amet semper massa bibendum vel. Mauris
            justo ante, elementum in tincidunt non, faucibus vel magna. Nullam
            ipsum turpis, iaculis a dolor vitae, tristique faucibus quam.
            Phasellus dignissim accumsan purus at venenatis. Phasellus ut
            ullamcorper metus. Sed venenatis elit id metus vestibulum feugiat.
            Vivamus accumsan erat dui, eu consectetur dolor interdum et. Ut ex
            dui, efficitur a sem eget, volutpat sagittis leo. Duis feugiat, nibh
            ac rhoncus consectetur, diam libero viverra purus, et posuere massa
            dolor ut arcu. Etiam accumsan tristique mattis. Praesent nec finibus
            ex, et posuere nisi. Maecenas ut erat quis dui tincidunt mattis.
            Quisque commodo nibh urna, ut dignissim nulla dapibus nec. Nulla non
            lorem lectus.
          </p>
        </article>

        <article>
          <h2>Hodnoty</h2>
          <ul>
            <li>Transparentnosť</li>
            <li>Etika</li>
            <li>Odvaha</li>
            <li>Viera</li>
            <li>Líderstvo</li>
            <li>Vzdelávanie</li>
            <li>Tímovosť</li>
            <li>Presvedčenie</li>
          </ul>
        </article>
        <article>
          <h2>Stabilita a zázemie spoločnosti</h2>
          <ul>
            <li>Vznik od roku 2009</li>
            <li>Viac ako 10 ročná prax v odbore</li>
            <li>Sme členom AFISP</li>
            <li>Povolenie NBS PAG</li>
            <li>Certifikát solventných firiem</li>
            <li>Ocenený TOP externý parnter za roky 2014-2015</li>
          </ul>
        </article>
      </div>
      <div className={styles.picture}>
        <img src={moneyPicture} alt="Money" />
      </div>
    </section>
  );
}

export default About;
