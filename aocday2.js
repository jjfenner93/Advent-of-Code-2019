//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~Christmas 2019 - Advent of Code:~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Day 2:
"use strict";

const fs = require("fs");

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

function day1() {
	fs.readFile("./day1.txt", "utf-8", (err, data) => {
		const modules = data.toString();
		const modulesArray = modules.split(",");
		const answer = modulesArray.reduce((total, num, index, arr) => {
				return arr;
		}, null).find((item) => {
			if (item > "0") {
				return item;
			}
		});
		console.log(answer);
});
}

day1();
