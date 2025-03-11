import styles from "./SectionHeader.module.css";
import ornament from "../../../elements/images/ornament.svg";

function SectionHeader({ title, subtitle, className }) {
  return (
    <div className={`${styles.header} ${className}`}>
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
      <img src={ornament} alt="Ornament" />
    </div>
  );
}

export default SectionHeader;
