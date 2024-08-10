const filtersBtnEl = document.querySelector(".catalog__mobile-btn");

if (filtersBtnEl) {
	filtersBtnEl.addEventListener("click", () => {
		const filtersEl = document.querySelector(".filters");
		filtersBtnEl.classList.toggle("catalog__mobile-btn--active");
		filtersEl.classList.toggle("filters--active");
	});
}
