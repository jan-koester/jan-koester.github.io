// scripts: evaluate navigation lists and hide lists with less than 2 items
(function () {
  function updateNavLists() {
    const nav = document
      .querySelector("nav.md-nav--primary")
      .querySelectorAll(":scope > ul.md-nav__list > li")

    nav.forEach((li) => {

      const visibleDirectChildren = Array.from(li.children).filter(el => {
        return window.getComputedStyle(el).display !== "none";
      });
      
      if (visibleDirectChildren.length < 2) {
        li.style.display = "none";
      } else {
        li.style.removeProperty("display");
      }
    });
  }

  // Hook into Material SPA instant navigation lifecycle
  if (typeof document$ !== "undefined") {
    document$.subscribe(updateNavLists);
  } else {
    document.addEventListener("DOMContentLoaded", updateNavLists);
  }
})();

