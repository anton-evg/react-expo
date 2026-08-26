import { useEffect } from "react";

const siteUrl = "https://expo-neo.ru";

const pageData = {
  home: {
    path: "/",
    title: "Застройка выставочных стендов под ключ | ЭКСПО НЕО",
    description: "ЭКСПО НЕО проектирует, производит и монтирует выставочные стенды под ключ. Собственное производство, аккредитация на площадках России.",
    name: "Застройка выставочных стендов под ключ",
  },
  about: {
    path: "/about/",
    title: "О компании ЭКСПО НЕО | Выставочные стенды под ключ",
    description: "ЭКСПО НЕО организует участие в выставках под ключ: дизайн, производство, монтаж и демонтаж стендов любой сложности.",
    name: "О компании ЭКСПО НЕО",
  },
  portfolio: {
    path: "/portfolio/",
    title: "Портфолио выставочных стендов | ЭКСПО НЕО",
    description: "Реализованные выставочные стенды ЭКСПО НЕО: проекты для разных отраслей и выставок. Смотрите фото работ компании.",
    name: "Портфолио выставочных стендов",
  },
  manufacturing: {
    path: "/manufacturing/",
    title: "Производство выставочных стендов | ЭКСПО НЕО",
    description: "Собственное производство выставочных стендов ЭКСПО НЕО: конструкторы, монтажники, современное оборудование и контроль качества.",
    name: "Производство выставочных стендов",
  },
  contacts: {
    path: "/contacts/",
    title: "Контакты ЭКСПО НЕО | Выставочные стенды",
    description: "Контакты ЭКСПО НЕО: телефон, email, адрес производства в Подольске и режим работы. Свяжитесь с нами по вашему выставочному проекту.",
    name: "Контакты ЭКСПО НЕО",
  },
};

function updateMeta(name, content) {
  let element = document.querySelector(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.append(element);
  }

  element.content = content;
}

function updateProperty(property, content) {
  let element = document.querySelector(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.append(element);
  }

  element.content = content;
}

function Seo({ page }) {
  useEffect(() => {
    const currentPage = pageData[page];
    const pageUrl = `${siteUrl}${currentPage.path}`;

    document.title = currentPage.title;
    updateMeta("description", currentPage.description);
    updateMeta("robots", "noindex, nofollow, noarchive");
    updateProperty("og:title", currentPage.title);
    updateProperty("og:description", currentPage.description);
    updateProperty("og:type", "website");
    updateProperty("og:url", pageUrl);
    updateMeta("twitter:card", "summary_large_image");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = pageUrl;

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "ЭКСПО НЕО",
          url: siteUrl,
          logo: `${siteUrl}/favicon.svg`,
          telephone: "+7 (495) 142 68 80",
          email: "info@exponeo.ru",
          address: {
            "@type": "PostalAddress",
            postalCode: "142184",
            addressCountry: "RU",
            addressRegion: "Московская область",
            addressLocality: "Подольск, мкр. Климовск",
            streetAddress: "ул. Товарная, д. 29",
          },
        },
        {
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: currentPage.name,
          description: currentPage.description,
          inLanguage: "ru-RU",
          about: { "@id": `${siteUrl}/#organization` },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
            ...(page === "home" ? [] : [{ "@type": "ListItem", position: 2, name: currentPage.name, item: pageUrl }]),
          ],
        },
      ],
    };

    let script = document.querySelector('script[data-seo="structured-data"]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seo = "structured-data";
      document.head.append(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [page]);

  return null;
}

export default Seo;
