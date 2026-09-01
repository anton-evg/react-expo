import { ArrowUpRight, Clock3, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import "./contacts-section.css";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "ks@expo-neo.ru",
    href: "mailto:ks@expo-neo.ru",
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

        <aside className="react-home__contacts-card">
          <a className="react-home__contacts-card-phone" href="tel:+74951426880">+7 (495) 142 68 80</a>
          <p className="react-home__contacts-card-note">Ответим на вопросы и предложим решение под вашу выставку.</p>
          <a className="react-home__contacts-card-link" href="/contacts/">Все контакты <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} /></a>
        </aside>
      </div>
    </section>
  );
}

export default ContactsSection;
