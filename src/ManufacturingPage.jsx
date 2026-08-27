import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "./manufacturing-page.css";

const teamMembers = [
  ["Конструкторы", "Продумывают и просчитывают конструкцию стенда."],
  ["Монтажники", "Подготавливают элементы в цехе и собирают стенд на площадке."],
  ["Художники", "Создают оформление, которое помогает стенду привлекать внимание."],
  ["Маляры", "Отвечают за отделку и покраску конструкций."],
];

const equipment = [
  ["Форматно-раскроечные станки", "Точная резка материалов для будущих конструкций."],
  ["ЧПУ-станки", "Изготовление сложных деталей с высокой точностью."],
  ["Кромкооблицовочное оборудование", "Аккуратная обработка краев деталей."],
  ["Принтеры и плоттер", "Печать крупной графики для оформления стендов."],
];

const manufacturingImages = Array.from({ length: 8 }, (_, index) => ({
  image: `/assets/manufacturing/${index + 1}.JPG`,
  alt: `Производство ЭКСПО НЕО, фотография ${index + 1}`,
}));

function ManufacturingPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const reduceMotion = useReducedMotion();
  const selectedImage = selectedImageIndex === null ? null : manufacturingImages[selectedImageIndex];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImageIndex === null) return;

      if (event.key === "Escape") setSelectedImageIndex(null);
      if (event.key === "ArrowRight") setSelectedImageIndex((index) => (index + 1) % manufacturingImages.length);
      if (event.key === "ArrowLeft") setSelectedImageIndex((index) => (index - 1 + manufacturingImages.length) % manufacturingImages.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  const showPreviousImage = () => setSelectedImageIndex((index) => (index - 1 + manufacturingImages.length) % manufacturingImages.length);
  const showNextImage = () => setSelectedImageIndex((index) => (index + 1) % manufacturingImages.length);

  return (
    <main className="react-manufacturing-page">
      <section className="react-manufacturing-page__hero react-home__container" aria-labelledby="manufacturing-page-title">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.2, 0.75, 0.25, 1] }}
        >
          <h1 id="manufacturing-page-title">Производство выставочных стендов под контролем ЭКСПО НЕО</h1>
          <p className="react-manufacturing-page__lead">Собственная производственная площадка и команда специалистов позволяют держать качество и сроки под контролем от заготовки до монтажа.</p>
        </motion.div>
        <motion.figure
          className="react-manufacturing-page__hero-image"
          initial={reduceMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ delay: 0.16, duration: 1.05, ease: [0.2, 0.75, 0.25, 1] }}
        >
          <img src={manufacturingImages[0].image} alt="Цех собственного производства ЭКСПО НЕО" />
          <figcaption>Более 1 500 м² собственной производственной площадки</figcaption>
        </motion.figure>
      </section>

      <section className="react-manufacturing-page__team" aria-labelledby="manufacturing-team-title">
        <div className="react-manufacturing-page__shell react-home__container">
          <div className="react-manufacturing-page__section-heading">
            <p>Люди производства</p>
            <h2 id="manufacturing-team-title">Специалисты, которые превращают проект в готовый стенд</h2>
          </div>
          <div className="react-manufacturing-page__team-grid">
            {teamMembers.map(([title, description], index) => (
              <motion.article
                className="react-manufacturing-page__team-card"
                key={title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: [0.2, 0.75, 0.25, 1] }}
              >
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="react-manufacturing-page__equipment" aria-labelledby="manufacturing-equipment-title">
        <div className="react-manufacturing-page__shell react-home__container">
          <div className="react-manufacturing-page__section-heading">
            
            <h2 id="manufacturing-equipment-title">Оснащение для точного производства</h2>
          </div>
          <div className="react-manufacturing-page__equipment-grid">
            {equipment.map(([title, description], index) => (
              <motion.article
                className="react-manufacturing-page__equipment-card"
                key={title}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.48 }}
              >
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="react-manufacturing-page__gallery" aria-labelledby="manufacturing-gallery-title">
        <div className="react-manufacturing-page__shell react-home__container">
          <div className="react-manufacturing-page__section-heading">
         
            <h2 id="manufacturing-gallery-title">Производство в процессе</h2>
          </div>
          <div className="react-manufacturing-page__gallery-grid" role="list" aria-label="Фотографии производства ЭКСПО НЕО">
            {manufacturingImages.map((item, index) => (
              <motion.button
                className="react-manufacturing-page__gallery-card"
                type="button"
                key={item.image}
                onClick={() => setSelectedImageIndex(index)}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ delay: index * 0.06, duration: 0.52 }}
                role="listitem"
                aria-label={`Открыть фотографию производства ${index + 1}`}
              >
                <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                <span className="react-manufacturing-page__gallery-shade" aria-hidden="true"></span>
                <span className="react-manufacturing-page__gallery-number">0{index + 1}</span>
                <ZoomIn aria-hidden="true" size={21} strokeWidth={1.5} />
              </motion.button>
            ))}
          </div>
          <p className="react-manufacturing-page__visit">Вы можете приехать на производство и лично посмотреть, как идет работа над вашим стендом.</p>
          <a className="react-manufacturing-page__contact-link" href="/contacts/">Связаться с нами <ArrowUpRight aria-hidden="true" size={19} strokeWidth={1.8} /></a>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="react-manufacturing-page__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Просмотр фотографии производства"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
          >
            <motion.div
              className="react-manufacturing-page__lightbox-content"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.2, 0.75, 0.25, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="react-manufacturing-page__lightbox-close" type="button" onClick={() => setSelectedImageIndex(null)} aria-label="Закрыть просмотр"><X aria-hidden="true" size={24} /></button>
              <button className="react-manufacturing-page__lightbox-previous" type="button" onClick={showPreviousImage} aria-label="Предыдущее фото"><ChevronLeft aria-hidden="true" size={30} /></button>
              <img src={selectedImage.image} alt={selectedImage.alt} loading="eager" decoding="async" />
              <button className="react-manufacturing-page__lightbox-next" type="button" onClick={showNextImage} aria-label="Следующее фото"><ChevronRight aria-hidden="true" size={30} /></button>
              <p>Производство ЭКСПО НЕО <span>{selectedImageIndex + 1} / {manufacturingImages.length}</span></p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default ManufacturingPage;
