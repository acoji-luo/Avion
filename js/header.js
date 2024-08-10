const headerListEl = document.querySelector(".header__list");

if (headerListEl) {
	new TransferElements({
		sourceElement: headerListEl,
		breakpoints: {
			767: {
				targetElement: document.querySelector(".header__bottom"),
				targetPosition: 1,
			},
		},
	});
}
