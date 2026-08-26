import { motion, useReducedMotion } from "framer-motion";
import AboutSection from "./AboutSection";
import "./about-page.css";

function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="react-about-page">
      <section className="react-about-page__hero react-home__container" aria-labelledby="about-page-title">
        <motion.h1
          id="about-page-title"
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.72, ease: [0.2, 0.75, 0.25, 1] }}
        >
          ЭКСПО НЕО — команда для участия в выставке под ключ
        </motion.h1>
        <motion.p
          className="react-about-page__lead"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.58 }}
        >
          «Exponeo» — компания, которая поможет организовать участие в выставке под ключ: от разработки дизайна стенда до его демонтажа после мероприятия.
        </motion.p>
      </section>
      <AboutSection variant="detailed" />
    </main>
  );
}

export default AboutPage;
