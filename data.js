// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.


/*---------------
	FUNCTIONS
---------------*/
function printIcon(container, object) {
    const icon = `
		<div class="icon-box">
			<i class="${object.family} ${object.prefix}${object.name}" style="color: ${object.color};"></i>
			<h6 class="ico-name">${object.name}</h6>
		</div>
    `;

    container.innerHTML += icon;
}

/*------------
	MAIN
------------*/
// 1. Creo un array di oggetti
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// 2. Prendo il container dall'HTML
const iconContainer = document.querySelector(".icon-container");

// 3. Con un ciclo forEach creo tutti i vari post
icons.forEach((elm) => printIcon(iconContainer, elm));

// 4. Creo un evento al cambio della select
const selectElement = document.querySelector("#typo");

selectElement.addEventListener('change', 
	function (event) {
		// SE il value della select è uguale a all
		// ALLORA stampo in html tutte le icone
		if (event.target.value === "all") {
			iconContainer.innerHTML = " ";
			icons.forEach((elm) => printIcon(iconContainer, elm));
			// SE il value della select è uguale a animal
			// ALLORA stampo in html le icone con typo = "animal"
		} else if (event.target.value === "animal") {
			iconContainer.innerHTML = " ";
			const animalIcons = icons.filter(elm => elm.type === 'animal');
			animalIcons.forEach((elm) => printIcon(iconContainer, elm));
			// SE il value della select è uguale a vegetable
			// ALLORA stampo in html le icone con typo = "vegetable"
		} else if (event.target.value === "vegetable") {
			iconContainer.innerHTML = " ";
			const vegetableIcons = icons.filter(elm => elm.type === 'vegetable');
			vegetableIcons.forEach((elm) => printIcon(iconContainer, elm));
			// SE il value della select è uguale a user
			// ALLORA stampo in html le icone con typo = "user"
		} else if (event.target.value === "user") {
			iconContainer.innerHTML = " ";
			const userIcons = icons.filter(elm => elm.type === 'user');
			userIcons.forEach((elm) => printIcon(iconContainer, elm));
		}
	}
);