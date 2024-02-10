const clickHandler = (event) => {
	if (event.target.tagName !== "BUTTON") return;
	const table = document.querySelector("x-table");
	if (event.target.id === "reset") table.removeAttribute("hide");

	const display = event.target.dataset.display;
	const tense = event.target.parentNode.attributes?.tense?.value;
	const gender = event.target.parentNode.attributes?.gender?.value;
	const plural = event.target.parentNode.attributes?.plural?.value;

	if (tense) {
		table.setAttribute("hide", table.getAttribute("hide") + " " + tense);
	}
	if (gender) {
		table.setAttribute("hide", table.getAttribute("hide") + " " + gender);
	}
	if (plural !== undefined) {
		table.setAttribute("hide", table.getAttribute("hide") + " plural");
	}
};

document.addEventListener("click", clickHandler);
const controlsTemplate = document.getElementById("controls");
const headings = document.querySelectorAll("x-tense, x-gender");
headings.forEach((heading) => {
	heading.appendChild(controlsTemplate.content.cloneNode(true));
});
