const toggleNav = document.querySelector(".toggle-nav");
const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const navigationLinks = Array.from(document.querySelectorAll(".navigation-links"));

toggleNav.addEventListener("click", () => {
	openNav.classList.toggle("hidden");
	closeNav.classList.toggle("!flex");
	navigationLinks.reverse();

	navigationLinks.forEach((navigationLink, index) => {
		setTimeout(function () {
			navigationLink.classList.toggle("translate-x-[150%]");
		}, 100 * index);
	});
});
