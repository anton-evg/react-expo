import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import "./process-section.css";

const steps = [
  ["01", "Обсуждаем задачу", "Уточняем цели участия, площадь и требования площадки."],
  ["02", "Разрабатываем проект", "Готовим дизайн-проект и технические чертежи."],
  ["03", "Изготавливаем и монтируем", "Подготавливаем конструкцию, доставляем и собираем стенд."],
  ["04", "Демонтируем", "Разбираем стенд после завершения мероприятия."],
];

function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="react-home__process" aria-labelledby="process-title">
      <div className="react-home__process-shell react-home__container">
        <motion.div
          className="react-home__process-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.2, 0.75, 0.25, 1] }}
        >
          <p className="react-home__process-eyebrow">Как работаем</p>
          <div>
            <h2 id="process-title">Четыре этапа от задачи до готового стенда</h2>
            <p>Одна команда отвечает за каждый этап работы и результат на площадке.</p>
          </div>
        </motion.div>

        <ol className="react-home__process-steps">
          <motion.li
            className="react-home__process-line"
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.25, ease: [0.2, 0.75, 0.25, 1] }}
          />
          {steps.map(([number, title, description], index) => (
            <motion.li
              className="react-home__process-step"
              key={number}
              initial={reduceMotion ? false : { opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: reduceMotion ? 0 : 0.16 + index * 0.1, duration: 0.55, ease: [0.2, 0.75, 0.25, 1] }}
              whileHover={reduceMotion ? undefined : { y: -8 }}
            >
              <span className="react-home__process-dot" aria-hidden="true"></span>
              <span className="react-home__process-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.li>
          ))}
        </ol>

        <motion.a
          className="react-home__process-link"
          href="/contacts/"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.45, duration: 0.45 }}
        >
          Получить консультацию <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
        </motion.a>
      </div>
    </section>
  );
}

export default ProcessSection;
