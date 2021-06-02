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
