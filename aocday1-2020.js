
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~Christmas 2020 - Advent of Code:~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Day 1:

/*
Notes:

Find two entries that would add up to 2020 and then multiply them.
For each value in the array see if after adding the difference it adds up to 2020?

Find what two values in the array add up to 2020.
i % 2 == 0 // Divides by 2 without a remainder.

*/
"use strict"

import { readFile } from "fs"

function day1() {
	readFile("./report.txt", "utf-8", (err, data) => {
		const modules = data.toString().split("\n")

		modules.reduce((currentValue, index, arr) => {
			currentValue = parseInt(currentValue)

			console.table(currentValue)
		})
	})
}

day1()
