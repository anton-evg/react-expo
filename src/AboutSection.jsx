import { ArrowUpRight, BadgeCheck, Factory, Palette, UsersRound, WalletCards } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import "./about-section.css";

const summaryAdvantages = [
  {
    icon: Factory,
    number: "01",
    title: "Собственное производство",
    text: "Выполняем работы своей командой и контролируем качество на каждом этапе.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Бесплатный дизайн",
    text: "Разрабатываем дизайн-проект и чертежи для клиентов.",
  },
  {
    icon: BadgeCheck,
    number: "03",
    title: "Аккредитация",
    text: "Аккредитованы во всех крупных выставочных комплексах России.",
  },
  {
    icon: WalletCards,
    number: "04",
    title: "Персональный менеджер",
    text: "Сопровождает проект от первой консультации до завершения выставки.",
  },
];

const detailedAdvantages = [
  {
    icon: BadgeCheck,
    number: "01",
    title: "Аккредитация везде",
    text: "Официально аккредитованы во всех крупных выставочных комплексах страны. Вам не нужно беспокоиться о согласованиях.",
  },
  {
    icon: Factory,
    number: "02",
    title: "Свое производство",
    text: "Не передаем заказы другим компаниям: контролируем качество, соблюдаем сроки и предлагаем цены без наценок посредников.",
  },
  {
    icon: UsersRound,
    number: "03",
    title: "Команда профессионалов",
    text: "Менеджеры сопровождают проект, дизайнеры создают технически правильный дизайн, производственники воплощают проект в реальность.",
  },
  {
    icon: WalletCards,
    number: "04",
    title: "Один подрядчик на все задачи",
    text: "Экономите время и деньги: не нужно искать несколько исполнителей. Стенд будет готов вовремя и точно таким, как вы задумали.",
  },
];

function AboutSection({ variant = "summary" }) {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 };
  const isDetailed = variant === "detailed";
  const advantages = isDetailed ? detailedAdvantages : summaryAdvantages;

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
          <p className="react-home__about-eyebrow">{isDetailed ? "Почему это удобно и выгодно" : "О компании"}</p>
          <h2 id="about-title">{isDetailed ? "Берем ответственность за выставочный проект на всех этапах" : "Команда для выставочных задач любой сложности"}</h2>
          <p className="react-home__about-lead">
            {isDetailed
              ? "От согласований и разработки дизайна до производства, монтажа и демонтажа — все этапы ведет одна команда ЭКСПО НЕО."
              : "Создаем стенды от конструктора до эксклюзивных двухэтажных проектов. Ведем задачу одной командой от первого разговора до завершения выставки."}
          </p>
          {!isDetailed && <a className="react-home__about-link" href="/about/">Подробнее о компании <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} /></a>}
        </motion.div>

        <motion.figure
          className="react-home__about-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2.35, ease: [0.2, 0.75, 0.25, 1] }}
        >
          <img src="/assets/about-production.jpg" srcSet="/assets/about-production.jpg 955w" sizes="(max-width: 700px) 100vw, 33vw" width={955} height={672} alt="Работа специалистов ЭКСПО НЕО на производстве" loading="lazy" decoding="async" fetchPriority="low" />
          
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
