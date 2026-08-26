import { Palette, Ruler, UsersRound, WalletCards } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import "./about-section.css";

const advantages = [
  {
    icon: Palette,
    number: "01",
    title: "Бесплатный дизайн-проект",
    text: "Разрабатываем дизайн и чертежи для клиентов.",
  },
  {
    icon: UsersRound,
    number: "02",
    title: "Команда специалистов",
    text: "Менеджеры, дизайнеры, конструкторы, монтажники, художники и маляры работают над проектом совместно.",
  },
  {
    icon: Ruler,
    number: "03",
    title: "Персональный менеджер",
    text: "Сопровождает проект от первой консультации до завершения выставки.",
  },
  {
    icon: WalletCards,
    number: "04",
    title: "Работа без посредников",
    text: "Все задачи выполняет собственная команда.",
  },
];

function AboutSection() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 };

  return (
    <section className="react-home__about" aria-labelledby="about-title">
      <div className="react-home__about-shell react-home__container">
        <motion.div
          className="react-home__about-heading"
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.65, ease: [0.2, 0.75, 0.25, 1] }}
        >
          <p className="react-home__about-eyebrow">О компании</p>
          <h2 id="about-title">Команда для выставочных задач любой сложности</h2>
          <p className="react-home__about-lead">
            Создаем стенды от конструктора до эксклюзивных двухэтажных проектов.
            Ведем задачу одной командой от первого разговора до завершения выставки.
          </p>
          <a className="react-home__about-link" href="/about/">Подробнее о компании <span aria-hidden="true">↗</span></a>
        </motion.div>

        <motion.figure
          className="react-home__about-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2.35, ease: [0.2, 0.75, 0.25, 1] }}
        >
          <img src="/assets/about-production.jpg" alt="Работа специалистов ЭКСПО НЕО на производстве" />
          
          <span className="react-home__about-visual-line" aria-hidden="true"></span>
        </motion.figure>

        <div className="react-home__about-advantages">
          {advantages.map(({ icon: Icon, number, title, text }, index) => (
            <motion.article
              className="react-home__about-advantage"
              key={number}
              initial={reduceMotion ? false : { opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: reduceMotion ? 0 : index * 0.09, duration: 1.55, ease: [0.2, 0.75, 0.25, 1] }}
              whileHover={reduceMotion ? undefined : { x: 8 }}
            >
              <div className="react-home__about-advantage-meta"><span>{number}</span><Icon aria-hidden="true" size={20} strokeWidth={1.6} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
