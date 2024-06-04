// задача 1

function createPhoneNumber(numbers) {
	return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// задача 2

function findOutlier(integers) {
	let total = integers.reduce((a, b) => {
		return a + b;
	});

	if (total % 2 === 0) {
		for (let i = 0; i < integers.length; i++) {
			if (integers[i] % 2 === 0) {
				// console.log(integers[i]);
				return integers[i];
			}
		}
	} else {
		for (let i = 0; i < integers.length; i++) {
			if (integers[i] % 2 === 1) {
				// console.log(integers[i]);
				return integers[i];
			}
		}
	}
}

// findOutlier([
// 	-113582900, -29045906, -125604608, -109716726, -114278168, -187523460,
// 	128668112, 148825362, 779750, -61041354, 57091974, -33534710, 132343032,
// 	-145886106, 61507670, -59819372, -86740078, 64839780, 187040192, 41173828,
// 	-36759138, 154466920, -48471598, 123072640, -63082695, -63562832, -6094004,
// 	-129318380, -99239346, 62699116, 150482084, 71079870, 15101804, -63754346,
// 	173197232, 127993080, -85461356,
// ]);

//   задача 3

function getMiddle(s) {
	let arr = s.split("");
	while (arr.length > 2) {
		arr.pop();
		arr.shift();
	}
	return arr.join("");
}

// getMiddle("middle");

// задача 4

String.prototype.toJadenCase = function () {
	let a = this.split(" ");
	let b = [];
	for (let i = 0; i < a.length; i++) {
		let f = a[i].slice(0, 1).toUpperCase() + a[i].slice(1);
		b.push(f);
	}

	return b.join(" ");
};

// "How can mirrors be real if our eyes aren't real".toJadenCase();

//   задача 5

var isSquare = function (n) {
	const a = Math.sqrt(n);

	if (a % 1 == 0) {
		return true;
	} else {
		return false;
	}
};

// isSquare(3);

// задача 6

function order(words) {
	let a = words.split(" ");
	const f = {};
	a = a.map((i) => {
		let num = parseInt(i.match(/\d+/));
		f[num] = i;
	});
	const g = [];
	for (let i in f) {
		g.push(f[i]);
	}

	return g.join(" ");
}

// order("is2 Thi1s T4est 3a");

//   задача 7

var uniqueInOrder = function (iterable) {
	if (!iterable) {
		return [];
	}

	let f = [iterable[0]];
	for (let i = 1; i < iterable.length; i++) {
		if (iterable[i] !== iterable[i - 1]) {
			f.push(iterable[i]);
		}
	}

	return f;
};

// uniqueInOrder("AAAABBBCCDAABBB");

// задача 8

function pigIt(str) {
	let s = str
		.split(" ")
		.map((i) => {
			if (i === "!" || i === "?" || i === "." || i === ",") {
				console.log(i);
				return i.slice(1) + i.slice(0, 1);
			} else {
				return i.slice(1) + i.slice(0, 1) + "ay";
			}
		})
		.join(" ");
}

// pigIt("Pig latin is cool");

//задача 9

// решение 1

function arrayDif(a, b) {
	if (a.length === 0 || b.length === 0) {
		return a;
	} else {
		return b.map((i) => {
			return a.filter((j) => (i === j ? false : true));
		});
	}
}

// arrayDif([1, 2], [1]);

// решение 2

function arrayDiff(a, b) {
	if (a.length === 0 || b.length === 0) {
		return a;
	} else {
		return a.reduce((result, current) => {
			if (!b.includes(current)) {
				result.push(current);
			}
			return result;
		}, []);
	}
}

// arrayDiff([1, 2], [1]);

// задача 10

function count(string) {
	if (string === "" || !string) {
		return {};
	} else {
		return [...string].reduce((a, b) => {
			a[b] = (a[b] || 0) + 1;
			return a;
		}, {});
	}
}

// count("ABA");

// задача 11

function high(x) {
	const a = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	const f = x.split(" ");

	let lem = f.reduce((result, b) => {
		const ss = [...b].map((el) => {
			return a.indexOf(el, 0) + 1;
		});

		result.push(ss);

		return result;
	}, []);

	lem = lem.map((i) => {
		const sum = i.reduce((prev, current) => {
			return prev + current;
		}, 0);

		return sum;
	});

	const max = Math.max.apply(null, lem);

	const hh = f.map((i, index) => {
		const object = {};
		object.sum = lem[index];
		object.string = i;

		return object;
	});

	const dd = hh.find((i) => {
		return i.sum === max;
	});

	return dd.string;
}

// high("what time are we climbing up the volcano");

// задача 12

function spinWords(string) {
	const a = string
		.split(" ")
		.map((i) => [...i].reverse().join(""))
		.join(" ");

	return a;
}

spinWords("Hey fellow warriors");

//задача 13

function expandedForm(num) {
	let a = Array.from(String(num), Number);

	const b = a.slice(1).reduce((a, b) => a + b);
	let ff = [];

	if (a.length === 1 || b === 0) {
		return num.toString();
	}

	a = a
		.map((i, index) => {
			if (i !== 0) {
				ff = [[i]];
				for (let i = 0; i < a.length - (index + 1); i++) {
					ff.push([0]);
				}
				return ff.join("");
			}
		})
		.filter((i) => i !== undefined)
		.join(" + ");
	return a;
}

expandedForm(12);

//задача 14

function merge(nums1, m, nums2, n) {
	let a = 0;
	for (let i = m; i < m + n; i++) {
		nums1[i] = nums2[a++];
	}
	nums1.sort((a, b) => a - b);
}

merge([1], 1, [], 0);

//задача 15

function removeElement(nums, val) {
	for (let i = 0; i < nums.length; i) {
		if (nums[i] === val) nums.splice(i, 1);
		else i++;
	}
}

// function removeElement(nums, val) {
// 	// console.time('test')
//     let a = 0;
// 	for(let i of nums) {
// 		if(i !== val) {
// 			nums[a++] = i;
// 			console.log(a);
// 		};
// 	}
// 	// console.timeEnd('test')
// 	console.log(nums);
// };

// removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

//      задача 16

function generateHashtag(str) {
	const heshStr = str.split(" ").filter((i) => i !== "");
	if (
		str === "" ||
		heshStr.length === 0 ||
		heshStr.join("").length >= 140 ||
		str === "#"
	)
		return false;
	const result = heshStr
		.map((i) => {
			const firsLetter = i.slice(0, 1).toUpperCase();
			const word = i.slice(1).toLowerCase();
			return firsLetter + word;
		})
		.join("");
	return `#${result}`;
}

// generateHashtag("          ");

//      задача 17

function rot13(message) {
	const alfabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	let result = [];
	let upperCase;

	message.split("").map((i) => {
		if (i === i.toUpperCase()) upperCase = true;
		else upperCase = false;
		if (!/[A-Za-z]/.test(i)) result.push(i);
		else
			alfabet.forEach((j, index) => {
				if (i.toLowerCase() === j) {
					if (index + 13 > alfabet.length - 1) {
						if (upperCase)
							result.push(
								alfabet[index + 12 - (alfabet.length - 1)].toUpperCase()
							);
						else result.push(alfabet[index + 12 - (alfabet.length - 1)]);
					} else if (upperCase) result.push(alfabet[index + 13].toUpperCase());
					else result.push(alfabet[index + 13]);
				} else return;
			});
		console.log(result.join(""));
		return result;
	});
	return result.join("");
}

//   rot13("test")

//      задача 18

function moveZeros(arr) {
	let b = [];
	let v = [];
	arr.forEach((i) => {
		if (i === 0) {
			v.push(i);
			return;
		}
		b.push(i);
	});
	v.forEach((i) => {
		b.push(i);
	});

	return b;
}

// moveZeros([0,false, 1, 0, 1, 2, 0, 1, 3, "a"]);

//      задача 19

function findOdd(A) {
	const f = A.reduce((a, b) => {
		if (a[b]) a[b]++;
		else a[b] = 1;
		return a;
	}, {});
	for (let i in f) {
		if (f[i] % 2 === 1) return [+i];
	}
}

// findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);

// function rotateMatrix(matrix) {
// 	const flippedArray = [];
// 	for (let i = 0; i < matrix[0].length; i++) {
// 		const column = [];
// 		for (let j = 0; j < matrix.length; j++) {
// 			column.push(matrix[j][i]);
// 		}
// 		flippedArray.push(column);
// 	}

// 	console.log(flippedArray);
// 	return flippedArray;
// }

//      задача 20

function rotateMatrix(arr) {
	const a = arr[0].reduce((acc, item, index) => {
		const b = arr.map((i) => i[index]);
		acc.push(b);
		return acc;
	}, []);

	console.log(a);
}

// rotateMatrix([
// 	[-1, 4, 5],
// 	[2, 3, 4],
// ]);

//      задача 21

function countRedBeads(num) {
	if (num < 2) return 0;
	return num + num - 2;
}

// countRedBeads(5);

//      задача 22

function findSmallestInt(arr) {
	arr.reduce((acc, item) => {
		if (acc < item) return acc;
		else return item;
	});
}

// findSmallestInt([34, -345, -1, 100]);

//      задача 23

const countSheep = function (num) {
	let a = "";
	for (let i = 1; i <= num; i++) {
		a = a + `${i} sheep...`;
	}
	return a;
};

// countSheep(3);

//      задача 24

function isItLetter(character) {
	const a = character.charCodeAt();
	if ((a >= 65 && a <= 90) || (a >= 97 && a <= 122)) console.log(true);
	else console.log(false);
}

// isItLetter("1");

//      задача 25

function rpsls(pl1, pl2) {
	if (pl1 === pl2) return "Draw!";
	if (pl1 === "rock") {
		if (pl2 === "lizard" || pl2 === "scissors") return "Player 1 Won!";
		else return "Player 2 Won!";
	}

	if (pl1 === "lizard") {
		if (pl2 === "spock" || pl2 === "paper") return "Player 1 Won!";
		else return "Player 2 Won!";
	}

	if (pl1 === "paper") {
		if (pl2 === "rock" || pl2 === "spock") return "Player 1 Won!";
		else return "Player 2 Won!";
	}

	if (pl1 === "spock") {
		if (pl2 === "rock" || pl2 === "scissors") return "Player 1 Won!";
		else return "Player 2 Won!";
	}

	if (pl1 === "scissors") {
		if (pl2 === "paper" || pl2 === "lizard") return "Player 1 Won!";
		else return "Player 2 Won!";
	}
}

// rpsls("rock", "rock");

//      задача 26

function firstNSmallest(array, n) {
	while (array.length !== n) {
		array.splice([...array].lastIndexOf(Math.max(...array)), 1);
	}
	return array;
}

// firstNSmallest([-3, 7, 0, 3, -3, 10, 0, 0, 2, 10, -6, 2, -9, 0, 5, 5, -1, -3] , 3);
// [-3, -6, -9]
// [-6, -9, -3]

function evenOrOdd(number) {
	if (number % 2 !== 1 && number % 2 !== -1) return "Even";
	else return "Odd";
}
// evenOrOdd(0);

function getCount(str) {
	const a = ["a", "e", "i", "o", "u"];

	return str.split("").reduce((acc, item) => {
		if (a.includes(item)) acc++;
		return acc;
	}, 0);
}

// getCount("abracadabra");

function cookingTime(neededPower, minutes, seconds, power) {
	const np = parseInt(neededPower);
	const p = parseInt(power);
	const s = (60 * minutes + seconds) / (p / np);
	let min = Math.floor(s / 60);
	let second = Math.ceil(s - 60 * min);
	if (second === 60) {
		min++;
		second = 0;
	}
	console.log(195 % 60);
	return `${min} minutes ${second} seconds`;
}

// cookingTime("450W", 3, 25, "950W");

function sorter(textbooks) {
	return textbooks.sort((a, b) => {
		if (a.toLowerCase() < b.toLowerCase()) return -1;
		if (a.toLowerCase() > b.toLowerCase()) return 1;
		return 0;
	});
}

// console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']))

function invert(array) {
	return array.map((i) => i * -1);
}

// console.log(invert([1, -2, 3, 4, 5]));

function differenceInAges(ages) {
	return [
		Math.max(...ages),
		Math.min(...ages),
		Math.max(...ages) - Math.min(...ages),
	];
}

// console.log(differenceInAges([82, 15, 6, 38, 35]));

function arrayPlusArray(arr1, arr2) {
	return arr1.concat(arr2).reduce((acc, item) => {
		return acc + item;
	});
}

//   console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

function greet(name) {
	if (name === "Johnny") return "Hello, my love!";
	return "Hello, " + name + "!";
}

// console.log(greet("Johnny"));

function getPlanetName(id) {
	var name;
	switch (id) {
		case 1:
			name = "Mercury";
			break;
		case 2:
			name = "Venus";
			break;
		case 3:
			name = "Earth";
			break;
		case 4:
			name = "Mars";
			break;
		case 5:
			name = "Jupiter";
			break;
		case 6:
			name = "Saturn";
			break;
		case 7:
			name = "Uranus";
			break;
		case 8:
			name = "Neptune";
			break;
	}

	return name;
}

//   console.log(getPlanetName(5));

function divCon(x) {
	return x.reduce((acc, item) => typeof item === "string" ? acc - Number(item) : acc += item, 0);
}

console.log(divCon(["7", 1]));
