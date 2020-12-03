//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~Christmas 2019 - Advent of Code:~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Day 2:
"use strict"

const fs = require("fs")

function day2() {
	fs.readFile("./intcode.txt", "utf-8", (err, data) => {
		const intcode = data.toString()
		const intcodeArray = intcode.split(",") // Turns it into an array.
		const answer = intcodeArray.reduce((total, num) => {
			if (num === "99") {
				num = parseInt(num)

				// The num values that are 99 will be parsed to an integer
				// for Maths calculations.
				total += num
			}
			return total
		}, null)
		console.log(answer)
	})
}

day2()
