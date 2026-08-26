import { Clock3, Mail, MapPin, Phone, Route } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import "./contacts-page.css";

const contactItems = [
  {
    icon: MapPin,
    label: "Адрес",
    value: "142184, Московская область, г.о. Подольск, мкр. Климовск, ул. Товарная, д. 29",
    href: "https://yandex.ru/maps/?text=142184%2C%20Московская%20область%2C%20г.о.%20Подольск%2C%20мкр.%20Климовск%2C%20ул.%20Товарная%2C%20д.%2029",
  },
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
                {href ? <a href={href} target={label === "Адрес" ? "_blank" : undefined} rel={label === "Адрес" ? "noreferrer" : undefined}>{value}</a> : <span>{value}</span>}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="react-contacts-page__map-section" aria-labelledby="contacts-map-title">
        <div className="react-contacts-page__shell react-home__container">
          <div className="react-contacts-page__map-heading">
            <div>
              <h2 id="contacts-map-title">Приезжайте в ЭКСПО НЕО</h2>
            </div>
            <a href="https://yandex.ru/maps/?text=142184%2C%20Московская%20область%2C%20г.о.%20Подольск%2C%20мкр.%20Климовск%2C%20ул.%20Товарная%2C%20д.%2029" target="_blank" rel="noreferrer">Построить маршрут <Route aria-hidden="true" size={19} strokeWidth={1.7} /></a>
          </div>
          <motion.div
            className="react-contacts-page__map"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.72, ease: [0.2, 0.75, 0.25, 1] }}
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?text=142184%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C%20%D0%B3.%D0%BE.%20%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%2C%20%D0%BC%D0%BA%D1%80.%20%D0%9A%D0%BB%D0%B8%D0%BC%D0%BE%D0%B2%D1%81%D0%BA%2C%20%D1%83%D0%BB.%20%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D0%BD%D0%B0%D1%8F%2C%20%D0%B4.%2029&z=16"
              title="Карта расположения производства ЭКСПО НЕО"
              loading="lazy"
            ></iframe>
            <span>ЭКСПО НЕО</span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default ContactsPage;
