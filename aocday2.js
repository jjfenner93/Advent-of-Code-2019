//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~Christmas 2019 - Advent of Code:~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Day 2:
"use strict";

const fs = require("fs");

const calculateFuelOnce = num => Math.floor((num / 3) - 2);

function day2() {
	fs.readFile("./intcode.txt", "utf-8", (err, data) => {
		const intcode = data.toString();
		const intcodeArray = intcode.split(",");
		const answer = intcodeArray.reduce((total, num, index, arr) => {

			if (num === "99") {
				num = parseInt(num);
				total += num;
			}

			return total;
		}, null);
		console.log(answer);
});
}

day2();
