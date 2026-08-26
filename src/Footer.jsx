import "./footer.css";

const footerLinks = [
  ["О компании", "/about/"],
  ["Портфолио", "/portfolio/"],
  ["Производство", "/manufacturing/"],
  ["Контакты", "/contacts/"],
];

function Footer() {
  return (
    <footer className="react-home__footer">
      <div className="react-home__footer-shell react-home__container">
        <span>© ЭКСПО НЕО</span>
        <nav aria-label="Навигация в подвале">
          {footerLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <noindex><a className="react-home__footer-agency" href="https://ledoffsky.agency/" rel="nofollow">LEDOFFSKY AGENCY</a></noindex>
      </div>
    </footer>
  );
}

export default Footer;
