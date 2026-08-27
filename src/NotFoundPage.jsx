import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import "./not-found-page.css";

function NotFoundPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="react-not-found-page">
      <section className="react-not-found-page__hero react-home__container" aria-labelledby="not-found-title">
        <motion.div
          className="react-not-found-page__code"
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.75, 0.25, 1] }}
        >
          404
        </motion.div>
        <motion.div
          className="react-not-found-page__content"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7, ease: [0.2, 0.75, 0.25, 1] }}
        >
          <h1 id="not-found-title">Похоже, этот стенд еще не построен</h1>
          <p className="react-not-found-page__lead">Запрошенный адрес не существует или был изменен. Вернитесь на главную и продолжите знакомство с ЭКСПО НЕО.</p>
          <div className="react-not-found-page__actions">
            <a className="react-not-found-page__primary-link" href="/"><ArrowLeft aria-hidden="true" size={18} strokeWidth={1.8} /> На главную</a>
            <a className="react-not-found-page__secondary-link" href="/contacts/">Связаться с нами <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} /></a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default NotFoundPage;
