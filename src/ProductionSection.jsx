import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "./production-section.css";

const equipment = [
  "Форматно-раскроечные и ЧПУ-станки",
  "Кромкооблицовочное оборудование",
  "Принтеры и плоттер для печати графики",
  "Конструкторы, монтажники, художники и маляры",
];

const productionImages = [
  { src: "/assets/production-2.jpg", width: 956, height: 666 },
  { src: "/assets/production-3.jpg", width: 955, height: 717 },
  { src: "/assets/production-4.jpg", width: 956, height: 668 },
  { src: "/assets/production-5.jpg", width: 947, height: 711 },
  "/assets/production-6.jpg",
];

function ProductionSection() {
  const [activeImage, setActiveImage] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % productionImages.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section className="react-home__production" aria-labelledby="production-title">
      <div className="react-home__production-shell react-home__container">
        <motion.div
          className="react-home__production-copy"
          initial={reduceMotion ? false : { opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.2, 0.75, 0.25, 1] }}
        >
          <h2 id="production-title">Производим элементы стенда на собственной площадке</h2>
          <p className="react-home__production-lead">Контролируем изготовление конструкций и подготовку стенда к монтажу. Производство можно посетить и увидеть ход работ.</p>
          <ul className="react-home__production-equipment">
            {equipment.map((item, index) => (
              <li key={item} onMouseEnter={() => setActiveImage(index % productionImages.length)}>
                <span>0{index + 1}</span>{item}
              </li>
            ))}
          </ul>
          <a className="react-home__production-link" href="/manufacturing/">О производстве <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} /></a>
        </motion.div>

        <motion.div
          className="react-home__production-showcase"
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.2, 0.75, 0.25, 1] }}
        >
          <AnimatePresence mode="sync">
            <motion.img
              key={productionImages[activeImage].src}
              src={productionImages[activeImage].src}
              srcSet={`${productionImages[activeImage].src} ${productionImages[activeImage].width}w`}
              sizes="(max-width: 700px) 100vw, 42vw"
              width={productionImages[activeImage].width}
              height={productionImages[activeImage].height}
              alt="Оборудование собственного производства ЭКСПО НЕО"
              initial={reduceMotion ? false : { x: "-100%" }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: "5%" }}
              transition={{ duration: 0.50, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <span className="react-home__production-frame" aria-hidden="true"></span>
          <p>Собственное<br />производство</p>
          <div className="react-home__production-pagination" aria-hidden="true">
            {productionImages.map((image, index) => <span className={index === activeImage ? "react-home__production-pagination-item--active" : ""} key={image.src}></span>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductionSection;
