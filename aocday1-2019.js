"use strict"

import { readFile } from "fs"

const calculateFuelOnce = num => Math.floor((num / 3) - 2)

function storeAnswer(num) {

    let quotient = calculateFuelOnce(num)
	let quotient2 = calculateFuelOnce(quotient)
	let quotient3 = calculateFuelOnce(quotient2)
	let quotient4 = calculateFuelOnce(quotient3)
	let quotient5 = calculateFuelOnce(quotient4)
	let quotient6 = calculateFuelOnce(quotient5)
	let quotient7 = calculateFuelOnce(quotient6)
	let quotient8 = calculateFuelOnce(quotient7)
	let quotient9 = calculateFuelOnce(quotient8)

    let arr = [num, quotient, quotient2, quotient3, quotient4, quotient5,
	quotient6, quotient7, quotient8, quotient9]

	if (quotient9 <= 0) {
		arr.pop()
		return arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] +
		arr[7] + arr[8]
	} else {
		return arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] +
		arr[7] + arr[8] + arr[9]
	}
}

function day1OOP() {
	let item, total = 0, addUpAllTheFuel = 0
	for (item of modules) {
		addUpAllTheFuel = storeAnswer(item)
		total += addUpAllTheFuel
	}
	console.log(`Total - part 2 is: ${total}`)
}

day1OOP()

function day1FP() {
	readFile("./modules.txt", "utf-8", (err, data) => {

		const modules = data.toString().split("\n")
		const answer1 = modules.reduce((acc, currentValue) => {

		currentValue = parseInt(currentValue)
	
		let total = acc + calculateFuelOnce(currentValue)

		return total
	}, 0)

	const answer2 = modules.reduce((acc, currentValue) => {
		let total = acc + calculateFuelOnce(currentValue)
		return total
	}, 0)
		console.log(`Total - part 1 is: ${answer1}`)

		console.log(`Total - part 2 (refactored): ${answer2}`)
	})
}

day1FP()
