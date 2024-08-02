const stepperEls = document.querySelectorAll(".stepper");

if (stepperEls) {
	stepperEls.forEach(stepperEl => {
		const stepperInputEl = stepperEl.querySelector(".stepper__input");
		const stepperBtnMinusEl = stepperEl.querySelector(".stepper__btn--minus");
		const stepperBtnPlusEl = stepperEl.querySelector(".stepper__btn--plus");

		const stepperMin = Number(stepperInputEl.getAttribute("min"));
		const stepperMax = Number(stepperInputEl.getAttribute("max"));

		let count = Number(stepperInputEl.value);

		stepperInputEl.addEventListener("change", () => {
			stepperBtnMinusEl.disabled = false;
			stepperBtnPlusEl.disabled = false;
			if (stepperInputEl.value < stepperMin) {
				stepperInputEl.value = stepperMin;
				stepperBtnMinusEl.disabled = true;
			}

			if (stepperInputEl.value > stepperMax) {
				stepperInputEl.value = stepperMax;
				stepperBtnMinusEl.disabled = true;
			}
		});

		stepperBtnPlusEl.addEventListener("click", () => {
			count = Number(stepperInputEl.value);
			if (count < stepperMax) {
				stepperBtnMinusEl.disabled = false;
				stepperBtnPlusEl.disabled = false;
				count++;
				stepperInputEl.value = count;
			}
			if (count === stepperMax) {
				stepperBtnMinusEl.disabled = true;
			}
		});

		stepperBtnMinusEl.addEventListener("click", () => {
			count = Number(stepperInputEl.value);
			if (count > stepperMin) {
				stepperBtnMinusEl.disabled = false;
				stepperBtnPlusEl.disabled = false;
				count--;
				stepperInputEl.value = count;
			}
			if (count === stepperMin) {
				stepperBtnMinusEl.disabled = true;
			}
		});
	});
}
