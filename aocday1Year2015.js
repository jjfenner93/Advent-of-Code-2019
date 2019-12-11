//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~Christmas 2015 - Advent of Code:~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Day 1:

const fs = require("fs");

function day1Year2015() {
	fs.readFile("./santa.txt", (err, data) => {
		console.time("santa-time");
		const directions = data.toString();
		const directionsArray = directions.split("");
		const answer = directionsArray.reduce((acc, currentValue) => {
		if (currentValue === "(") {
			return acc += 1;
		} else if (currentValue === ")") {
			return acc -+ 1;
		}
	}, 0);
		console.timeEnd("santa-time");
		console.log("answer", answer);
});
}

day1Year2015();
