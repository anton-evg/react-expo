import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "./portfolio-section.css";

const projects = [
  {
    title: "Выставочный проект Крым",
    image: "/assets/portfolio-krym.jpg",
    thumbnail: "/assets/portfolio/thumbs/19.jpg",
    width: 800,
    height: 600,
    alt: "Выставочный стенд Крым с посетителями",
  },
  {
    title: "Выставочный проект Academy",
    image: "/assets/portfolio-academy.jpg",
    thumbnail: "/assets/portfolio/thumbs/09.jpg",
    width: 800,
    height: 531,
    alt: "Выставочный стенд Academy с демонстрационной зоной",
  },
  {
    title: "Выставочный проект Бронка",
    image: "/assets/portfolio-bronka.jpg",
    thumbnail: "/assets/portfolio/thumbs/13.jpg",
    width: 800,
    height: 600,
    alt: "Выставочный стенд Бронка",
  },
];

function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <section className="react-home__portfolio" aria-labelledby="portfolio-title">
      <div className="react-home__portfolio-shell react-home__container">
        <motion.div
          className="react-home__portfolio-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.2, 0.75, 0.25, 1] }}
        >
          <div>
            <h2 id="portfolio-title">Реализованные выставочные стенды</h2>
            <p>Реальные проекты ЭКСПО НЕО для разных отраслей и выставок.</p>
          </div>
          <a className="react-home__portfolio-link" href="/portfolio/">Смотреть все проекты <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} /></a>
        </motion.div>

        <div className="react-home__portfolio-grid">
          {projects.map((project, index) => (
            <motion.button
              className="react-home__portfolio-card"
              type="button"
              key={project.title}
              onClick={() => setSelectedProject(project)}
              initial={reduceMotion ? false : { opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: reduceMotion ? 0 : index * 0.12, duration: 0.7, ease: [0.2, 0.75, 0.25, 1] }}
            >
              <img src={project.thumbnail} srcSet={`${project.thumbnail} 800w`} sizes="(max-width: 700px) 100vw, 33vw" width={project.width} height={project.height} alt={project.alt} loading="lazy" decoding="async" fetchPriority="low" />
              <span className="react-home__portfolio-overlay" aria-hidden="true"></span>
              <span className="react-home__portfolio-card-meta"><span>0{index + 1}</span><ArrowUpRight aria-hidden="true" size={22} strokeWidth={1.5} /></span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="react-home__portfolio-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Просмотр проекта: ${selectedProject.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="react-home__portfolio-modal-content"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.2, 0.75, 0.25, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selectedProject.image} width={selectedProject.width} height={selectedProject.height} alt={selectedProject.alt} loading="eager" decoding="async" />
              <p>{selectedProject.title}</p>
              <button type="button" onClick={() => setSelectedProject(null)} aria-label="Закрыть просмотр"><X aria-hidden="true" size={24} /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default PortfolioSection;
