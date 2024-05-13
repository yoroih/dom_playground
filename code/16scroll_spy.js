const d = document;

export default function scrollSpy() {
  const $section = d.querySelectorAll("section[data-scroll-spy]");
  
  const cb = (entries) => {
    console.log("entries", entries)
  }

  const observer = new IntersectionObserver(cb, {});

  $section.forEach(el => observer.observe(el));
};


