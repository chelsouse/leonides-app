import styles from "./SharedMenuElement.module.css";

function SharedMenuElement({ title, image, altText, className }) {
  return (
    <div className={`${styles.menuElement} ${className}`}>
      <h2>{title}</h2>
      <img src={image} alt={altText} />
    </div>
  );
}

export default SharedMenuElement;
