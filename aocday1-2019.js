//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~Christmas 2019 - Advent of Code:~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Day 1 Part 1 & 2:
"use strict"

import { readFile } from "fs"

// The equation for calculating the fuel here first in an arrow function.
const calculateFuelOnce = num => Math.floor((num / 3) - 2)

/*
// The solution in OOP:
function storeAnswer(num) {

	// Stores each calculation into several variables.
    let quotient = calculateFuelOnce(num)
	let quotient2 = calculateFuelOnce(quotient)
	let quotient3 = calculateFuelOnce(quotient2)
	let quotient4 = calculateFuelOnce(quotient3)
	let quotient5 = calculateFuelOnce(quotient4)
	let quotient6 = calculateFuelOnce(quotient5)
	let quotient7 = calculateFuelOnce(quotient6)
	let quotient8 = calculateFuelOnce(quotient7)
	let quotient9 = calculateFuelOnce(quotient8)

	// Puts the variables into an array.
    let arr = [num, quotient, quotient2, quotient3, quotient4, quotient5,
	quotient6, quotient7, quotient8, quotient9]

	// Then checks if the 9th quotient is less than 0.
	if (quotient9 <= 0) {

		// Pops out the 9th quotient seeing as it doesn't count.
		arr.pop()

		return arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] +
		arr[7] + arr[8]
	} else {
		// Otherwise it all adds up normally.
		return arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] +
		arr[7] + arr[8] + arr[9]
	}
}

function day1() {
	let item, total = 0, addUpAllTheFuel = 0
	for (item of modules) {

		// Stores the function into a variable.
		// And as each value in the array is being iterated over,
		// it will perform the function and 
		// add up the parts in it to the answer, one at a time.
		addUpAllTheFuel = storeAnswer(item)


		// Then adds up the result of each part to get the answer.
		total += addUpAllTheFuel
	}
	console.log(`Total - part 2 is: ${total}`)
}

day1()

*/

// The solution in FP:
function day1() {
	readFile("./modules.txt", "utf-8", (err, data) => {

		// Turns it into an array, by splitting out the new lines.
		const modules = data.toString().split("\n")
		const answer1 = modules.reduce((acc, currentValue) => {

		// Changes it into an integer to do the calculation.
		currentValue = parseInt(currentValue)

		// Calculates it once for each iteration.
		let total = acc + calculateFuelOnce(currentValue)

		// total can be another word for the 'accumulator'.
		return total
	}, 0)

	// answer2 unfinished:
	// const answer2 = modules.reduce((acc, currentValue) => {
		// let total = acc + calculateFuelOnce(currentValue)

		// Somehow access whatever has been accumulated and do calc.
		// return total
	// }, 0)
		console.log(`Total - part 1 is: ${answer1}`)

		// This has not been done right yet (only part 1).
		// console.log(`Total - part 2 (refactored): ${answer2}`)
	})
}

day1()
