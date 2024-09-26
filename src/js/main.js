const burgerBtn = document.querySelector(".burger-btn");
const xmark = document.querySelector(".fa-xmark");
const bars = document.querySelector(".fa-bars");
const navLinks = document.querySelectorAll(".nav__link");
const navMobile = document.querySelector(".nav-mobile");
// const aboutBtns = document.querySelectorAll(".about-us__card-btn");
// const aboutCardTexts = document.querySelectorAll(".about-us__card-text");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
	navMobile.classList.toggle("nav-mobile--active");
	xmark.classList.toggle("hide");
	bars.classList.toggle("hide");

	navLinks.forEach((item) => {
		item.addEventListener("click", () => {
			navMobile.classList.remove("nav-mobile--active");
			xmark.classList.add("hide");
			bars.classList.remove("hide");
		});
	});
};


const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

burgerBtn.addEventListener("click", handleNav);
