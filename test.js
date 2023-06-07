// задача 1

function createPhoneNumber(numbers) {
	return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

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

findOutlier([
	-113582900, -29045906, -125604608, -109716726, -114278168, -187523460,
	128668112, 148825362, 779750, -61041354, 57091974, -33534710, 132343032,
	-145886106, 61507670, -59819372, -86740078, 64839780, 187040192, 41173828,
	-36759138, 154466920, -48471598, 123072640, -63082695, -63562832, -6094004,
	-129318380, -99239346, 62699116, 150482084, 71079870, 15101804, -63754346,
	173197232, 127993080, -85461356,
]);

//   задача 3

function getMiddle(s) {
	let arr = s.split("");
	while (arr.length > 2) {
		arr.pop();
		arr.shift();
	}
	return arr.join("");
}

getMiddle("middle");

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

"How can mirrors be real if our eyes aren't real".toJadenCase();

//   задача 5

var isSquare = function (n) {
	const a = Math.sqrt(n);

	if (a % 1 == 0) {
		return true;
	} else {
		return false;
	}
};

isSquare(3);

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

order("is2 Thi1s T4est 3a");

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

uniqueInOrder("AAAABBBCCDAABBB");

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

pigIt("Pig latin is cool");

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

arrayDif([1, 2], [1]);

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

arrayDiff([1, 2], [1]);

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

count("ABA");

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

	const dd = hh.find((i)=> {
		return i.sum === max
	})

	return dd.string;
}


high('what time are we climbing up the volcano');

// задача 12

function spinWords(string){
	const a = string.split(" ")
	.map((i)=> [...i].reverse().join("")).join(" ")

	console.log(a);
	return a
}

spinWords("Hey fellow warriors")

//задача 13

function expandedForm(num) {
	
  }

  expandedForm()

//   if ("testing" % 2 === 0) {
// 	console.log("четный");
// } else {
// 	console.log("не четный");
// }
