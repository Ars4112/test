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
	console.log(b.join(" "));
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



//   if ("testing" % 2 === 0) {
// 	console.log("четный");
// } else {
// 	console.log("не четный");
// }
