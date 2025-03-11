import { useState } from "react";
import styles from "./Contact.module.css";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import logoHead from "../../../elements/images/logo-head.svg";
import ornament from "../../../elements/images/ornament.svg";

function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (wasSubmitted) {
      validateField(name, value);
    }
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    if (name === "name" || name === "email" || name === "phone") {
      if (!value.trim()) {
        newErrors[name] = "Toto pole musí byť vyplnené";
      } else {
        newErrors[name] = "";
      }
    }

    if (name === "message") {
      if (value.length < 10) {
        newErrors[name] = "Správa musí obsahovať aspoň 10 znakov";
      } else {
        newErrors[name] = "";
      }
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Toto pole musí byť vyplnené";
      formIsValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Toto pole musí byť vyplnené";
      formIsValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Toto pole musí byť vyplnené";
      formIsValid = false;
    }

    if (formData.message.length < 10) {
      newErrors.message = "Správa musí obsahovať aspoň 10 znakov";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWasSubmitted(true);

    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div>
      <div className={styles.head}></div>
      <section className={styles.contactSection} id={id}>
        <div className={styles.contactContainer}>
          <SectionHeader
            title="Kontakt"
            subtitle="LEONEDIS"
            className={styles.contactHeader}
          />
          <div className={styles.contactInfo}>
            <p>
              <span className={styles.label}>Adresa </span> Levočská 5, Prešov,
              080 01
            </p>
            <p>
              <span className={styles.label}>Telefón </span> +421 905 181 972
            </p>
            <p>
              <span className={styles.label}>Mesto </span> Prešov / Slovakia
            </p>
          </div>
          <div className={styles.formContainer}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formLeft}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Meno</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div className={styles.errorMessage}>{errors.name}</div>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className={styles.errorMessage}>{errors.email}</div>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Telefón</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <div className={styles.errorMessage}>{errors.phone}</div>
                    )}
                  </div>
                </div>
                <div className={styles.formRight}>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Odkaz</label>
                    <textarea
                      id="message"
                      name="message"
                      className={styles.formMessage}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && (
                      <div className={styles.errorMessage}>
                        {errors.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.formSubmit}>
                <button type="submit" className={styles.btnSubmit}>
                  Odoslať
                </button>
              </div>
            </form>
          </div>
          <div className={styles.footer}>
            <img src={logoHead} alt="Logo Head " />
            <img src={ornament} alt="Ornament " />
            <p>Copyright 2016</p>
            <p>Vsetky prava vyhradene.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
