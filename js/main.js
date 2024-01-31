const navbarAnimation = () => {
  const navList = document.querySelector(".navbar__list");
  const navBurger = document.querySelector(".navbar__burger");
  const BurgerOne = document.querySelector(".navbar__burger-one");
  const BurgerTwo = document.querySelector(".navbar__burger-two");
  const BurgerThere = document.querySelector(".navbar__burger-there");
  navBurger.addEventListener("click", () => {
    navList.classList.toggle("active");
    if (navList.classList.contains("active")) {
      navList.style.transform = "translate(0)";
      // navBurger.style.z-index = "999";
      navList.style.transition = "transform 0.3s";
    } else {
      navList.style.transform = "translate(-100%)";
    }
    navBurger.classList.toggle("BurgerActive");
  });
};
navbarAnimation();
