const burgerEl = document.querySelector(".burger");

if (burgerEl) {
	const body = document.body;
	const menuEl = document.querySelector(".header__bottom");

	burgerEl.addEventListener("click", () => {
		burgerEl.classList.toggle("burger--active");
		menuEl.classList.toggle("header__bottom--active");
		body.classList.toggle("stop-scroll");
	});
}
