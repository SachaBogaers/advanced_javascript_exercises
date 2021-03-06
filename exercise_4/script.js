const superheroes = [
	{ name: "Batman", alter_ego: "Bruce Wayne" },
	{ name: "Superman", alter_ego: "Clark Kent" },
	{ name: "Spiderman", alter_ego: "Peter Parker" }]

// Hier komt jouw functie
const findSpiderman = array => {
	return array.find(element => element.name === "Spiderman");
}
console.log(findSpiderman(superheroes))
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

const doubleArrayValues = array => {
	const newArray = [];
	const forEach = array.forEach(element => newArray.push(element * 2))
	console.log(newArray);
	const map = array.map(element => element * 2);
	console.log(map);
	return map;
}
doubleArrayValues([1, 2, 3])
// result should be [2, 4, 6]

const containsNumberBiggerThan10 = array => array.some(element => element > 10)

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]))
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]))
// result should be false

const isItalyInTheGreat7 = array => array.includes("Italy");
console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));
// result should be true

const tenfold = array => {
	let tenfoldArray = [];
	array.forEach(element => tenfoldArray.push(element * 10))
	return tenfoldArray;
}
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]


const isBelow100 = array => array.every((item) => {
	return item <= 100
});

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false


const bigSum = array => array.reduce((currentTotal, item) => {
	return item + currentTotal
}, 0)

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118