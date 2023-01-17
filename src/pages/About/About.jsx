// CSS Module
import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className={styles.container__about}>
      <h2>
        Sobre o Life <span>Shared</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end.
      </p>
      <Link className="btn" to="/posts/create">
        Criar postagem
      </Link>
    </section>
  );
};

export default About;
