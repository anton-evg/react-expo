import { motion, useReducedMotion } from "framer-motion";
import AboutSection from "./AboutSection";
import "./about-page.css";

function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="react-about-page">
      <section className="react-about-page__hero react-home__container" aria-labelledby="about-page-title">
        <motion.p
          className="react-about-page__label"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          О компании
        </motion.p>
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
          От разработки дизайна стенда до демонтажа после мероприятия: берем на себя все этапы работы.
        </motion.p>
      </section>
      <AboutSection />
    </main>
  );
}

export default AboutPage;
