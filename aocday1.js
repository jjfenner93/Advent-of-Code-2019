//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~Christmas 2019 - Advent of Code:~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Day 1 Part 1:

let modules = [
74819,
111192,
104476,
53965,
89875,
147914,
120203,
73658,
80054,
75468,
88811,
73140,
90128,
51639,
70417,
102818,
106523,
77151,
118711,
146183,
143477,
89008,
67987,
94512,
98199,
118483,
91978,
53595,
144819,
130211,
103326,
113805,
50204,
138909,
113345,
142697,
121281,
128132,
98383,
127929,
88562,
135418,
65123,
94330,
107136,
85822,
86208,
93398,
110176,
143538,
98851,
56280,
84734,
52873,
51898,
66332,
91624,
75662,
125892,
137867,
114748,
124360,
81075,
140638,
77417,
86881,
50250,
131326,
88877,
141095,
147701,
103934,
101008,
140186,
117845,
149923,
138631,
93188,
74299,
89504,
75185,
72688,
53057,
50200,
124950,
110233,
114558,
94047,
112376,
122374,
115571,
136289,
115146,
80924,
140787,
125638,
99960,
61024,
138366,
127943
];

const calculateFuelOnce = num => Math.floor((num / 3) - 2);

function storeAnswer(num) {
    let quotient = calculateFuelOnce(num);
	let quotient2 = calculateFuelOnce(quotient);
	let quotient3 = calculateFuelOnce(quotient2);
	let quotient4 = calculateFuelOnce(quotient3);
	let quotient5 = calculateFuelOnce(quotient4);
	let quotient6 = calculateFuelOnce(quotient5);
	let quotient7 = calculateFuelOnce(quotient6);
	let quotient8 = calculateFuelOnce(quotient7);
	let quotient9 = calculateFuelOnce(quotient8);
    let arr = [num, quotient, quotient2, quotient3, quotient4, quotient5, 
	quotient6, quotient7, quotient8, quotient9];
	if (quotient9 <= 0) {
		arr.pop();
		return arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] +
		arr[7] + arr[8];
	} else {
		return arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] +
		arr[7] + arr[8] + arr[9];
	}
}

function totalFuelRequirements() {
	let total = 0;
	let total2 = 0;
	let addUpAllTheFuel = 0;
	for (item of modules) {
		addUpAllTheFuel = storeAnswer(item);
		total += calculateFuelOnce(item);
		total2 += addUpAllTheFuel;
	}
	console.log("Total - part 1: " + total);
	console.log("Total fuel requirements - part 2: " + total2);
}

totalFuelRequirements();
