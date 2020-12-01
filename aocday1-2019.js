//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~Christmas 2019 - Advent of Code:~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Day 1 Part 1 & 2:
"use strict"

const fs = require("fs")

const calculateFuelOnce = num => Math.floor((num / 3) - 2) // The equation for calculating the fuel here first in an arrow function.

/*
// The first way I done below here without .reduce (not recommended).
function storeAnswer(num) {
    	let quotient = calculateFuelOnce(num); // Stores each calculation into several variables.
	let quotient2 = calculateFuelOnce(quotient);
	let quotient3 = calculateFuelOnce(quotient2);
	let quotient4 = calculateFuelOnce(quotient3);
	let quotient5 = calculateFuelOnce(quotient4);
	let quotient6 = calculateFuelOnce(quotient5);
	let quotient7 = calculateFuelOnce(quotient6);
	let quotient8 = calculateFuelOnce(quotient7);
	let quotient9 = calculateFuelOnce(quotient8);
    	let arr = [num, quotient, quotient2, quotient3, quotient4, quotient5,
	quotient6, quotient7, quotient8, quotient9]; // Puts the variables into an array.
	if (quotient9 <= 0) { // Then checks if the 9th quotient is less than 0 so everything below will add up and will be the right answer.
		arr.pop(); // Pops out the 9th quotient seeing as it doesn't count.
		return arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] +
		arr[7] + arr[8];
	} else {
		return arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] +
		arr[7] + arr[8] + arr[9]; // Otherwise it all adds up normally.
	}
}

function day1() {
	let item;
	let total = 0;
	let addUpAllTheFuel = 0;
	for (item of modules) {
		addUpAllTheFuel = storeAnswer(item); // Stores the function into a variable here.
		// And as each number is being iterated over, it will perform the function and add up the parts in it to the answer,
		// one at a time.
		total += addUpAllTheFuel; // Then adds up the result of each part here to get the answer.
	}
	setTimeout(() => {console.log(`Total - part 2 is: ${total}`)}, 1000); // This is delayed so I can show it after the,
	// other method below if this is uncommented.
}

day1();
*/

function day1() {
	fs.readFile("./modules.txt", "utf-8", (err, data) => { // Reads file with parameters of error and data.
		const modules = data.toString().split("\n") // Turns it into an array here, by splitting out the new lines.
		const answer1 = modules.reduce((acc, currentValue) => {
		currentValue = parseInt(currentValue) // Changes it into an integer to do calculation on below.
		let total = acc + calculateFuelOnce(currentValue) // Calculates it once for each iteration.
		return total
	}, 0) // total can be another word for the 'accumulator' above.
	// answer2 unfinished:
	const answer2 = modules.reduce((acc, currentValue) => {
		let total = acc + calculateFuelOnce(currentValue)
		return total // Somehow access whatever has been accumulated and do calc.
	}, 0)
		console.log(`Total - part 1 is: ${answer1}`)
		console.log(`Total - part 2 (refactored): ${answer2}`) // This has not been done right yet (only part 1).
	})
}

day1()
