import styles from "./Need.module.css";

import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import IntersectionAnimation from "../../shared/IntersectionAnimation";
import SharedMenuElement from "../../shared/SharedMenuElement/SharedMenuElement";

import head from "../../../elements/images/head.svg";
import menuNeed1 from "../../../elements/assets/menu/menu-need-1.jpg";
import menuNeed2 from "../../../elements/assets/menu/menu-need-2.jpg";
import menuNeed3 from "../../../elements/assets/menu/menu-need-3.jpg";
import menuNeed4 from "../../../elements/assets/menu/menu-need-4.jpg";

function Need({ id }) {
  const containerRef = IntersectionAnimation(
    styles.menuNeedElement,
    styles.visible
  );

  return (
    <div>
      <div className={styles.head}>
        <img src={head} alt="Head " />
        <div>
          <h1>LEONIDES</h1>
          <p>Transform your life!</p>
        </div>
      </div>
      <section className={styles.needSection} id={id}>
        <div className={styles.needContainer}>
          <SectionHeader
            title="Potreby ľudí"
            subtitle="LEONEDIS"
            className={styles.needHeader}
          />
          <div className={styles.menuNeedContainer} ref={containerRef}>
            <SharedMenuElement
              title="deti"
              image={menuNeed1}
              altText="Menu Need 1"
              className={styles.menuNeedElement}
            />
            <SharedMenuElement
              title="bývanie"
              image={menuNeed2}
              altText="Menu Need 2"
              className={styles.menuNeedElement}
            />

            <SharedMenuElement
              title="sporenie"
              image={menuNeed3}
              altText="Menu Need 3"
              className={styles.menuNeedElement}
            />
            <SharedMenuElement
              title="dôchodok"
              image={menuNeed4}
              altText="Menu Need 4"
              className={styles.menuNeedElement}
            />
          </div>
          <p className={styles.colorParagraph}>
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
          <ol>
            <li>
              <h2>deti</h2>
              <p>
                Donec convallis eros sem, vitae commodo tellus pharetra vel. Nam
                suscipit euismod lectus, sit amet semper massa bibendum vel.
                Mauris justo ante, elementum in tincidunt non, faucibus vel
                magna. Nullam ipsum turpis, iaculis a dolor vitae, tristique
                faucibus quam. Phasellus dignissim accumsan purus at venenatis.
                Phasellus ut ullamcorper metus. Sed venenatis elit id metus
                vestibulum feugiat. Vivamus accumsan erat dui, eu consectetur
                dolor interdum et. Ut ex dui, efficitur a sem eget, volutpat
                sagittis leo. Duis feugiat, nibh ac rhoncus consectetur, diam
                libero viverra purus, et posuere massa dolor ut arcu. Etiam
                accumsan tristique mattis. Praesent nec finibus ex, et posuere
                nisi. Maecenas ut erat quis dui tincidunt mattis. Quisque
                commodo nibh urna, ut dignissim nulla dapibus nec. Nulla non
                lorem lectus.
              </p>
            </li>
            <li>
              <h2>bývanie</h2>
              <p>
                Donec convallis eros sem, vitae commodo tellus pharetra vel. Nam
                suscipit euismod lectus, sit amet semper massa bibendum vel.
                Mauris justo ante, elementum in tincidunt non, faucibus vel
                magna. Nullam ipsum turpis, iaculis a dolor vitae, tristique
                faucibus quam. Phasellus dignissim accumsan purus at venenatis.
                Phasellus ut ullamcorper metus. Sed venenatis elit id metus
                vestibulum feugiat. Vivamus accumsan erat dui, eu consectetur
                dolor interdum et. Ut ex dui, efficitur a sem eget, volutpat
                sagittis leo. Duis feugiat, nibh ac rhoncus consectetur, diam
                libero viverra purus, et posuere massa dolor ut arcu. Etiam
                accumsan tristique mattis. Praesent nec finibus ex, et posuere
                nisi. Maecenas ut erat quis dui tincidunt mattis. Quisque
                commodo nibh urna, ut dignissim nulla dapibus nec. Nulla non
                lorem lectus.
              </p>
            </li>
            <li>
              <h2>sporenie</h2>
              <p>
                Donec convallis eros sem, vitae commodo tellus pharetra vel. Nam
                suscipit euismod lectus, sit amet semper massa bibendum vel.
                Mauris justo ante, elementum in tincidunt non, faucibus vel
                magna. Nullam ipsum turpis, iaculis a dolor vitae, tristique
                faucibus quam. Phasellus dignissim accumsan purus at venenatis.
                Phasellus ut ullamcorper metus. Sed venenatis elit id metus
                vestibulum feugiat. Vivamus accumsan erat dui, eu consectetur
                dolor interdum et. Ut ex dui, efficitur a sem eget, volutpat
                sagittis leo. Duis feugiat, nibh ac rhoncus consectetur, diam
                libero viverra purus, et posuere massa dolor ut arcu. Etiam
                accumsan tristique mattis. Praesent nec finibus ex, et posuere
                nisi. Maecenas ut erat quis dui tincidunt mattis. Quisque
                commodo nibh urna, ut dignissim nulla dapibus nec. Nulla non
                lorem lectus.
              </p>
            </li>
            <li>
              <h2>dôchodok</h2>
              <p>
                Donec convallis eros sem, vitae commodo tellus pharetra vel. Nam
                suscipit euismod lectus, sit amet semper massa bibendum vel.
                Mauris justo ante, elementum in tincidunt non, faucibus vel
                magna. Nullam ipsum turpis, iaculis a dolor vitae, tristique
                faucibus quam. Phasellus dignissim accumsan purus at venenatis.
                Phasellus ut ullamcorper metus. Sed venenatis elit id metus
                vestibulum feugiat. Vivamus accumsan erat dui, eu consectetur
                dolor interdum et. Ut ex dui, efficitur a sem eget, volutpat
                sagittis leo. Duis feugiat, nibh ac rhoncus consectetur, diam
                libero viverra purus, et posuere massa dolor ut arcu. Etiam
                accumsan tristique mattis. Praesent nec finibus ex, et posuere
                nisi. Maecenas ut erat quis dui tincidunt mattis. Quisque
                commodo nibh urna, ut dignissim nulla dapibus nec. Nulla non
                lorem lectus.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Need;
