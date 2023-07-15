export const scrollToFunction = (sectionId) => {
  const section = document.getElementById(sectionId);
  const yOffset =
    sectionId === "about-me-section"
      ? -300
      : sectionId === "projects-section"
      ? -50
      : sectionId === "technical-skills-section"
      ? -50
      : sectionId === "contact-section"
      ? -160
      : 0;
  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};
