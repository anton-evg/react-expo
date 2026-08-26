import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import "./contacts-section.css";

const contactItems = [
  {
    icon: MapPin,
    label: "Адрес",
    value: "142184, Московская область, г.о. Подольск, мкр. Климовск, ул. Товарная, д. 29",
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

function ContactsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="react-home__contacts" aria-labelledby="contacts-title">
      <div className="react-home__contacts-shell react-home__container">
        <motion.div
          className="react-home__contacts-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.2, 0.75, 0.25, 1] }}
        >
          
          <h2 id="contacts-title">Свяжитесь с нами</h2>
          <p className="react-home__contacts-lead">Обсудим ваш проект, сроки и задачи участия в выставке.</p>
          <div className="react-home__contacts-list">
            {contactItems.map(({ icon: Icon, label, value, href }, index) => (
              <motion.div
                className="react-home__contacts-item"
                key={label}
                initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: reduceMotion ? 0 : 0.14 + index * 0.08, duration: 0.5 }}
              >
                <Icon aria-hidden="true" size={19} strokeWidth={1.6} />
                <div><span>{label}</span>{href ? <a href={href}>{value}</a> : <p>{value}</p>}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="react-home__contacts-map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?text=142184%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C%20%D0%B3.%D0%BE.%20%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%2C%20%D0%BC%D0%BA%D1%80.%20%D0%9A%D0%BB%D0%B8%D0%BC%D0%BE%D0%B2%D1%81%D0%BA%2C%20%D1%83%D0%BB.%20%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D0%BD%D0%B0%D1%8F%2C%20%D0%B4.%2029&z=16"
            title="Карта расположения производства ЭКСПО НЕО"
            loading="lazy"
          ></iframe>
          <span>ЭКСПО НЕО</span>
        </div>
      </div>
    </section>
  );
}

export default ContactsSection;
