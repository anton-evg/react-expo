import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "./portfolio-page.css";

const portfolioImageFiles = [
  "_DSC0244.JPG",
  "_DSC0714.JPG",
  "002.jpg",
  "011.jpg",
  "20230908_092346.jpg",
  "5268b146-9ebc-4371-a46e-f30667675cbe.jpeg",
  "АгрофирмаПоиск.jpg",
  "АмиБьюти1.jpg",
  "АмиБьюти2.jpg",
  "Изображение WhatsApp 2023-05-22 в 16.34.55.jpg",
  "Изображение WhatsApp 2023-05-23 в 18.24.09.jpg",
  "КрасныеКрыши.jpg",
  "портБронка2.jpg",
  "Трессе.jpg",
  "Cntyl_Treesse.jpg",
  "IMG_0156_V2.jpg",
  "IMG_0842.jpg",
  "IMG_0863.jpg",
  "IMG_20180910_185811.jpg",
  "IMG_20220926_174315.jpg",
  "IMG_8068.jpg",
  "Safeed_Зернокомбикорма 2018.jpg",
];

const projectNames = {
  "АгрофирмаПоиск.jpg": "Агрофирма Поиск",
  "АмиБьюти2.jpg": "Проект Academy",
  "КрасныеКрыши.jpg": "Красные Крыши",
  "портБронка2.jpg": "Проект Бронка",
  "Трессе.jpg": "Проект Трессе",
  "IMG_20180910_185811.jpg": "Проект Крым",
};

const portfolioProjects = portfolioImageFiles.map((fileName, index) => {
  const title = projectNames[fileName] || `Выставочный проект ${String(index + 1).padStart(2, "0")}`;

  return {
    title,
    image: `/assets/portfolio/${encodeURIComponent(fileName)}`,
    alt: `Выставочный стенд ЭКСПО НЕО: ${title}`,
  };
});

function PortfolioPage() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const reduceMotion = useReducedMotion();
  const selectedProject = selectedProjectIndex === null ? null : portfolioProjects[selectedProjectIndex];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedProjectIndex === null) return;

      if (event.key === "Escape") setSelectedProjectIndex(null);
      if (event.key === "ArrowRight") setSelectedProjectIndex((index) => (index + 1) % portfolioProjects.length);
      if (event.key === "ArrowLeft") setSelectedProjectIndex((index) => (index - 1 + portfolioProjects.length) % portfolioProjects.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectIndex]);

  const showPreviousProject = () => setSelectedProjectIndex((index) => (index - 1 + portfolioProjects.length) % portfolioProjects.length);
  const showNextProject = () => setSelectedProjectIndex((index) => (index + 1) % portfolioProjects.length);

  return (
    <main className="react-portfolio-page">
      <section className="react-portfolio-page__hero react-home__container" aria-labelledby="portfolio-page-title">
       
        <motion.h1
          id="portfolio-page-title"
          initial={reduceMotion ? false : { opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.72, ease: [0.2, 0.75, 0.25, 1] }}
        >
          Портфолио выставочных стендов ЭКСПО НЕО
        </motion.h1>
        <motion.p
          className="react-portfolio-page__lead"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.58 }}
        >
          Показываем реальные работы ЭКСПО НЕО для разных отраслей и выставок. Нажмите на карточку, чтобы открыть фото.
        </motion.p>
      </section>

      <section className="react-portfolio-page__gallery" aria-labelledby="portfolio-gallery-title">
        <div className="react-portfolio-page__shell react-home__container">
          <div className="react-portfolio-page__gallery-heading">
            <p>Реальные проекты</p>
            <h2 id="portfolio-gallery-title">Портфолио выставочных стендов</h2>
          </div>
          <div className="react-portfolio-page__grid" role="list" aria-label="Проекты ЭКСПО НЕО">
            {portfolioProjects.map((project, index) => (
              <motion.button
                className="react-portfolio-page__card"
                type="button"
                key={project.title}
                onClick={() => setSelectedProjectIndex(index)}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: reduceMotion ? 0 : index * 0.07, duration: 0.55, ease: [0.2, 0.75, 0.25, 1] }}
                role="listitem"
                aria-label={`Открыть фото: ${project.title}`}
              >
                <img src={project.image} alt={project.alt} />
                <span className="react-portfolio-page__card-overlay" aria-hidden="true"></span>
                <span className="react-portfolio-page__card-number">0{index + 1}</span>
                <span className="react-portfolio-page__card-content"><span>{project.title}</span><ZoomIn aria-hidden="true" size={20} strokeWidth={1.5} /></span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="react-portfolio-page__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Просмотр проекта: ${selectedProject.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProjectIndex(null)}
          >
            <motion.div
              className="react-portfolio-page__lightbox-content"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.2, 0.75, 0.25, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="react-portfolio-page__lightbox-close" type="button" onClick={() => setSelectedProjectIndex(null)} aria-label="Закрыть просмотр"><X aria-hidden="true" size={24} /></button>
              <button className="react-portfolio-page__lightbox-previous" type="button" onClick={showPreviousProject} aria-label="Предыдущее фото"><ChevronLeft aria-hidden="true" size={30} /></button>
              <img key={selectedProject.image} src={selectedProject.image} alt={selectedProject.alt} />
              <button className="react-portfolio-page__lightbox-next" type="button" onClick={showNextProject} aria-label="Следующее фото"><ChevronRight aria-hidden="true" size={30} /></button>
              <p>{selectedProject.title}<span>{selectedProjectIndex + 1} / {portfolioProjects.length}</span></p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default PortfolioPage;
