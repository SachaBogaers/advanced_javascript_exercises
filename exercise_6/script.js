const bigFiveButtons = document.getElementsByClassName("big-five-button");

Array.from(bigFiveButtons).forEach(button => {
	button.addEventListener("click", () => {
		const clickedAnimal = button.innerHTML;
		console.log(clickedAnimal);
		const newLi = document.createElement("li");
		newLi.classList.add("spotted-animals-list-item");
		const spottedAnimalsList = document.querySelector("#spotted-animals-list");
		newLi.innerHTML = `${clickedAnimal}`;
		spottedAnimalsList.appendChild(newLi);
	}
	)
});

const removeFirstItemButton = document.querySelector("#remove-first-item-button");
removeFirstItemButton.addEventListener("click", () => {
	const spottedAnimalsList = document.querySelector("#spotted-animals-list");
	if (spottedAnimalsList.firstElementChild) {
		let removedAnimal = spottedAnimalsList.firstElementChild;
		spottedAnimalsList.removeChild(removedAnimal);
	} else {
		return;
	}
})


const removeAllButton = document.querySelector("#remove-all-button");
removeAllButton.addEventListener("click", () => {
	const spottedAnimalsList = document.querySelector("#spotted-animals-list");
	console.log(spottedAnimalsList)
	while (spottedAnimalsList.firstElementChild) {
		spottedAnimalsList.removeChild(spottedAnimalsList.firstChild);
	}
})