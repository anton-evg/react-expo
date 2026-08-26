import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import AboutSection from "./AboutSection";
import ProcessSection from "./ProcessSection";
import PortfolioSection from "./PortfolioSection";
import ProductionSection from "./ProductionSection";
import ContactsSection from "./ContactsSection";
import Footer from "./Footer";
import PortfolioPage from "./PortfolioPage";
import ManufacturingPage from "./ManufacturingPage";
import "./styles.css";
import "./header.css";

const facts = [
  ["10+", "лет в выставочной индустрии"],
  ["2 000+", "м² собственного производства"],
  ["350+", "реализованных стендов"],
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigationItems = [["О компании", "/about/"], ["Портфолио", "/portfolio/"], ["Производство", "/manufacturing/"], ["Контакты", "/contacts/"]];

  return <header className="react-home__header"><div className="react-home__header-content react-home__container"><a className="react-home__logo" href="/" aria-label="ЭКСПО НЕО — главная страница"><img src="/assets/logo.png" alt="Логотип ЭКСПО НЕО" /></a><span className="react-home__header-tagline">Выставочные<br />решения под ключ</span><nav className={`react-home__navigation ${isOpen ? "react-home__navigation--open" : ""}`} aria-label="Основная навигация">{navigationItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav><a className="react-home__phone" href="tel:+74951426880">+7 (495) 142 68 80</a><button className={`react-home__menu-button ${isOpen ? "react-home__menu-button--open" : ""}`} type="button" aria-label={isOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}><span></span><span></span></button></div></header>;
}

function App() {
  const isPortfolioPage = window.location.pathname.startsWith("/portfolio");
  const isManufacturingPage = window.location.pathname.startsWith("/manufacturing");

  return <><Header />{isPortfolioPage ? <PortfolioPage /> : isManufacturingPage ? <ManufacturingPage /> : <main className="react-home">
      <section className="react-home__hero react-home__container">
        <div className="react-home__content">
          <motion.h1
            className="react-home__title"
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.75, 0.25, 1] }}
          >
            Застройка выставочных стендов
            <br /> под ключ
          </motion.h1>
          <motion.div
            className="react-home__intro"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <p>
              От дизайн-проекта до монтажа и демонтажа. Сами проектируем,
              производим и строим стенды для выставок.
            </p>
            <a href="/contacts/">
              Получить консультацию <span>↗</span>
            </a>
          </motion.div>
          <motion.div
            className="react-home__facts"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { delayChildren: 0.42, staggerChildren: 0.1 },
              },
            }}
          >
            {facts.map(([number, label]) => (
              <motion.div
                className="react-home__fact"
                key={number}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <strong>{number}</strong>
                <span>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="react-home__visual"
          initial={{ clipPath: "polygon(100% 0,100% 0,100% 100%,100% 100%)" }}
          animate={{ clipPath: "polygon(12% 0,100% 0,100% 100%,0 100%)" }}
          transition={{ duration: 1.25, ease: [0.2, 0.75, 0.25, 1] }}
        >
          <motion.img
            src="/assets/hero.avif"
            alt="Пространство мероприятия для делового общения"
            initial={{ scale: 1.18 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
         
          <div className="react-home__accent" />
          <p>
            Аккредитованы
            <br />
            на крупных выставочных
            <br />
            площадках России
          </p>
        </motion.div>
      </section>
      <AboutSection />
      <ProcessSection />
      <PortfolioSection />
      <ProductionSection />
      <ContactsSection />
    </main>}<Footer /></>;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
