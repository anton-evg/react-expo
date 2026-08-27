import { Clock3, Mail, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import "./contacts-page.css";

const contactItems = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (495) 142 68 80",
    href: "tel:+74951426880",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@exponeo.ru",
    href: "mailto:info@exponeo.ru",
  },
  {
    icon: Clock3,
    label: "Режим работы",
    value: "Пн–Пт, 9:00–18:00",
  },
];

function ContactsPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="react-contacts-page">
      <section className="react-contacts-page__hero react-home__container" aria-labelledby="contacts-page-title">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.2, 0.75, 0.25, 1] }}
        >
          <h1 id="contacts-page-title">Контакты ЭКСПО НЕО</h1>
          <p className="react-contacts-page__lead">Расскажите о задаче, сроках и площадке. Подскажем оптимальное решение и организуем работу под ключ.</p>
        </motion.div>
        <motion.a
          className="react-contacts-page__phone"
          href="tel:+74951426880"
          initial={reduceMotion ? false : { opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.16, duration: 0.65, ease: [0.2, 0.75, 0.25, 1] }}
        >
          <span>Позвонить</span>
          +7 (495) 142 68 80
        </motion.a>
      </section>

      <section className="react-contacts-page__details" aria-labelledby="contacts-details-title">
        <div className="react-contacts-page__shell react-home__container">
          <h2 id="contacts-details-title">Как с нами связаться</h2>
          <div className="react-contacts-page__details-grid">
            {contactItems.map(({ icon: Icon, label, value, href }, index) => (
              <motion.article
                className="react-contacts-page__detail-card"
                key={label}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.52, ease: [0.2, 0.75, 0.25, 1] }}
              >
                <Icon aria-hidden="true" size={22} strokeWidth={1.5} />
                <p>{label}</p>
                {href ? <a href={href}>{value}</a> : <span>{value}</span>}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default ContactsPage;
