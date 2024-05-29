const myDivAccordion = document.getElementById("div-accordion");
const opacityStep = 0.1; // Change in opacity per animation frame
const transitionDuration = 500; // Transition duration in milliseconds

/** redirect to Street Gallery **/
const myDivStreet = document.getElementById("div-street");
const overlayStreet = myDivAccordion.querySelector(
	".item-accordion:nth-child(1)"
);
const overlayStreetTitle = myDivAccordion.querySelector(
	".overlay-title-street"
);

myDivStreet.addEventListener("click", function () {
	window.location.href = "hkstudio-lens/index_street.html";
});
myDivStreet.addEventListener("mouseover", () => {
	overlayStreet.style.opacity = 0.7;
	overlayStreetTitle.style.display = "block";
	let currentOpacity = 0;
	const intervalId = setInterval(() => {
		currentOpacity = Math.min(currentOpacity + opacityStep, 1); // Limit to 1
		overlayStreetTitle.style.opacity = currentOpacity;

		if (currentOpacity === 1) {
			clearInterval(intervalId);
		}
	}, transitionDuration / (1 / opacityStep));
});
myDivStreet.addEventListener("mouseout", () => {
	overlayStreet.style.opacity = 1;
	overlayStreetTitle.style.display = "none";
	let currentOpacity = 0;
	const intervalId = setInterval(() => {
		currentOpacity = Math.max(currentOpacity - opacityStep, 0); // Limit to 0
		overlayStreetTitle.style.opacity = currentOpacity;

		if (currentOpacity === 0) {
			clearInterval(intervalId);
			overlayStreetTitle.style.display = "none"; // Hide after fade out
		}
	}, transitionDuration / (1 / opacityStep));
});

/** redirect to Reflect Gallery **/
const myDivReflect = document.getElementById("div-reflect");
const overlayReflect = myDivAccordion.querySelector(
	".item-accordion:nth-child(2)"
);
const overlayReflectTitle = myDivAccordion.querySelector(
	".overlay-title-reflect"
);

myDivReflect.addEventListener("click", function () {
	window.location.href = "hkstudio-lens/index_reflect.html";
});
myDivReflect.addEventListener("mouseover", () => {
	overlayReflect.style.opacity = 0.7;
	overlayReflectTitle.style.display = "block";
	let currentOpacity = 0;
	const intervalId = setInterval(() => {
		currentOpacity = Math.min(currentOpacity + opacityStep, 1); // Limit to 1
		overlayReflectTitle.style.opacity = currentOpacity;

		if (currentOpacity === 1) {
			clearInterval(intervalId);
		}
	}, transitionDuration / (1 / opacityStep));
});
myDivReflect.addEventListener("mouseout", () => {
	overlayReflect.style.opacity = 1;
	overlayReflectTitle.style.display = "none";
	let currentOpacity = 0;
	const intervalId = setInterval(() => {
		currentOpacity = Math.max(currentOpacity - opacityStep, 0); // Limit to 0
		overlayReflectTitle.style.opacity = currentOpacity;

		if (currentOpacity === 0) {
			clearInterval(intervalId);
			overlayReflectTitle.style.display = "none"; // Hide after fade out
		}
	}, transitionDuration / (1 / opacityStep));
});

/** redirect to Archi Gallery **/
const myDivArchi = document.getElementById("div-archi");
const overlayArchi = myDivAccordion.querySelector(
	".item-accordion:nth-child(3)"
);
const overlayArchiTitle = myDivAccordion.querySelector(".overlay-title-archi");

myDivArchi.addEventListener("click", function () {
	window.location.href = "hkstudio-lens/index_archi.html";
});
myDivArchi.addEventListener("mouseover", () => {
	overlayArchi.style.opacity = 0.7;
	overlayArchiTitle.style.display = "block";
	let currentOpacity = 0;
	const intervalId = setInterval(() => {
		currentOpacity = Math.min(currentOpacity + opacityStep, 1); // Limit to 1
		overlayArchiTitle.style.opacity = currentOpacity;

		if (currentOpacity === 1) {
			clearInterval(intervalId);
		}
	}, transitionDuration / (1 / opacityStep));
});
myDivArchi.addEventListener("mouseout", () => {
	overlayArchi.style.opacity = 1;
	overlayArchiTitle.style.display = "none";
	let currentOpacity = 0;
	const intervalId = setInterval(() => {
		currentOpacity = Math.max(currentOpacity - opacityStep, 0); // Limit to 0
		overlayArchiTitle.style.opacity = currentOpacity;

		if (currentOpacity === 0) {
			clearInterval(intervalId);
			overlayArchiTitle.style.display = "none"; // Hide after fade out
		}
	}, transitionDuration / (1 / opacityStep));
});

/** redirect to Landscape Gallery **/
const myDivLands = document.getElementById("div-landscape");
const overlayLands = myDivAccordion.querySelector(
	".item-accordion:nth-child(4)"
);
const overlayLandsTitle = myDivAccordion.querySelector(
	".overlay-title-landscape"
);

myDivLands.addEventListener("click", function () {
	window.location.href = "hkstudio-lens/index_landscape.html";
});
myDivLands.addEventListener("mouseover", () => {
	overlayLands.style.opacity = 0.7;
	overlayLandsTitle.style.display = "block";
	let currentOpacity = 0;
	const intervalId = setInterval(() => {
		currentOpacity = Math.min(currentOpacity + opacityStep, 1); // Limit to 1
		overlayLandsTitle.style.opacity = currentOpacity;

		if (currentOpacity === 1) {
			clearInterval(intervalId);
		}
	}, transitionDuration / (1 / opacityStep));
});
myDivLands.addEventListener("mouseout", () => {
	overlayLands.style.opacity = 1;
	overlayLandsTitle.style.display = "none";
	let currentOpacity = 0;
	const intervalId = setInterval(() => {
		currentOpacity = Math.max(currentOpacity - opacityStep, 0); // Limit to 0
		overlayLandsTitle.style.opacity = currentOpacity;

		if (currentOpacity === 0) {
			clearInterval(intervalId);
			overlayLandsTitle.style.display = "none"; // Hide after fade out
		}
	}, transitionDuration / (1 / opacityStep));
});
