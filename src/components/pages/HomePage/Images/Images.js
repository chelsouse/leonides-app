import styles from "./Images.module.css";
import image01 from "../../../../elements/assets/images/image01.jpg";
import image02 from "../../../../elements/assets/images/image02.jpg";
import image03 from "../../../../elements/assets/images/image03.jpg";
import image04 from "../../../../elements/assets/images/image04.jpg";

function Images() {
  return (
    <section className={styles.imageContainer}>
      <div className={styles.image01}>
        <img src={image01} alt="" />
        <div className={styles.overlay}>
          <p>
            Zmeň svoj život <br></br> <strong>vo svojej kariére</strong>
          </p>
        </div>
      </div>
      <div className={styles.image02}>
        <img src={image02} alt="" />
        <div className={styles.overlay}>
          <p>
            Zmeň svoj život <br></br> <strong>vo svojej kariére</strong>
          </p>
        </div>
      </div>
      <div className={styles.image03}>
        <img src={image03} alt="" />
        <div className={styles.overlay}>
          <p>
            Zmeň svoj život <br></br> <strong>vo svojej kariére</strong>
          </p>
        </div>
      </div>
      <div className={styles.image04}>
        <img src={image04} alt="" />
        <div className={styles.overlay}>
          <p>
            Zmeň svoj život <br></br> <strong>vo svojej kariére</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Images;
