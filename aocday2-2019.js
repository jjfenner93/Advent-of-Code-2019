"use strict"

import { readFile } from "fs"

function day2() {
	readFile("./intcode.txt", "utf-8", (err, data) => {
		const intcode = data.toString()
		const intcodeArray = intcode.split(",")
		const answer = intcodeArray.reduce((total, num) => {
			if (num === "99") {
				parsedNum = parseInt(num)
				total += parsedNum
			}
			return total
		}, null)
		console.log(answer)
	})
}

day2()
