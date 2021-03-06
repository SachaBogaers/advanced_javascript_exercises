const superheroes = [
	{
		"name": "Batman",
		"publisher": "DC Comics",
		"alter_ego": "Bruce Wayne",
		"first_appearance": "Detective Comics #27",
		"weight": "210"
	},
	{
		"name": "Superman",
		"publisher": "DC Comics",
		"alter_ego": "Kal-El",
		"first_appearance": "Action Comics #1",
		"weight": "220"
	},
	{
		"name": "Flash",
		"publisher": "DC Comics",
		"alter_ego": "Jay Garrick",
		"first_appearance": "Flash Comics #1",
		"weight": "195"
	},
	{
		"name": "Green Lantern",
		"publisher": "DC Comics",
		"alter_ego": "Alan Scott",
		"first_appearance": "All-American Comics #16",
		"weight": "186"
	},
	{
		"name": "Green Arrow",
		"publisher": "DC Comics",
		"alter_ego": "Oliver Queen",
		"first_appearance": "All-American Comics #16",
		"weight": "195"
	},
	{
		"name": "Wonder Woman",
		"publisher": "DC Comics",
		"alter_ego": "Princess Diana",
		"first_appearance": "The Incredible Hulk #180",
		"weight": "165"
	},
	{
		"name": "Blue Beetle",
		"publisher": "DC Comics",
		"alter_ego": "Dan Garret",
		"first_appearance": "Mystery Men Comics #1",
		"weight": "145"
	},
	{
		"name": "Spider Man",
		"publisher": "Marvel Comics",
		"alter_ego": "Peter Parker",
		"first_appearance": "Amazing Fantasy #15",
		"weight": "167"
	},
	{
		"name": "Captain America",
		"publisher": "Marvel Comics",
		"alter_ego": "Steve Rogers",
		"first_appearance": "Captain America Comics #1",
		"weight": "220"
	},
	{
		"name": "Iron Man",
		"publisher": "Marvel Comics",
		"alter_ego": "Tony Stark",
		"first_appearance": "Tales of Suspense #39",
		"weight": "250"
	},
	{
		"name": "Thor",
		"publisher": "Marvel Comics",
		"alter_ego": "Thor Odinson",
		"first_appearance": "Journey into Myster #83",
		"weight": "200"
	},
	{
		"name": "Hulk",
		"publisher": "Marvel Comics",
		"alter_ego": "Bruce Banner",
		"first_appearance": "The Incredible Hulk #1",
		"weight": "1400"
	},
	{
		"name": "Wolverine",
		"publisher": "Marvel Comics",
		"alter_ego": "James Howlett",
		"first_appearance": "The Incredible Hulk #180",
		"weight": "200"
	},
	{
		"name": "Daredevil",
		"publisher": "Marvel Comics",
		"alter_ego": "Matthew Michael Murdock",
		"first_appearance": "Daredevil #1",
		"weight": "200"
	},
	{
		"name": "Silver Surfer",
		"publisher": "Marvel Comics",
		"alter_ego": "Norrin Radd",
		"first_appearance": "The Fantastic Four #48",
		"weight": "unknown"
	}
]


// Array with all names
const allNames = array => array.map(hero => hero.name);
console.log(allNames(superheroes))

const allLightSuperheroes = array => array.filter(hero => hero.weight < 190);
console.log(allLightSuperheroes(superheroes));


const all200PoundsSuperheroes = array => array.filter(hero => hero.weight === "200").map(hero => hero.name);
console.log(all200PoundsSuperheroes(superheroes))

const allComics = array => array.map(hero => hero.first_appearance);
console.log(allComics(superheroes))

const allDCComics = array => array.filter(hero => hero.publisher === "DC Comics");
console.log(allDCComics(superheroes));

const allMarvelComics = array => array.filter(hero => hero.publisher === "Marvel Comics");
console.log(allMarvelComics(superheroes));

const totalWeightDC = array => array.filter(hero => hero.publisher === "DC Comics").map(hero => hero.weight).reduce((currentTotal, weight) => {
	const weightNumber = parseInt(weight);
	if (weightNumber > 0) {
		return weightNumber + currentTotal
	} else {
		return currentTotal
	}
}, 0);

const totalWeightMarvel = array => array.filter(hero => hero.publisher === "Marvel Comics").map(hero => hero.weight).reduce((currentTotal, weight) => {
	const weightNumber = parseInt(weight);
	if (weightNumber > 0) {
		return weightNumber + currentTotal
	} else {
		return currentTotal
	}
}, 0);

console.log(totalWeightDC(superheroes));
console.log(totalWeightMarvel(superheroes));


const heaviestHero = array => array.reduce(function (prev, current) {
	console.log("Previous", prev, "current", current)
	if (current.weight === "unknown") {
		return prev;
	} else {
		return (parseInt(prev.weight) > parseInt(current.weight)) ? prev : current
	}
})
console.log(heaviestHero(superheroes))