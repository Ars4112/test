const identity = <T>(text: T): T => {
	return text;
};

const first = <T>(text: T[]): T | undefined => {
	if (text.length > 0) {
		return text[0];
	}
	return undefined;
};

const last = <T>(text: T[]): T | undefined => {
	if (text.length > 0) {
		return text[text.length - 1];
	}
	return undefined;
};

// средние

const filter = <T>(arr: T[], fun: (a: T) => boolean): T[] => {
	const resultArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (fun(arr[i])) {
			resultArr.push(arr[i]);
		}
	}
	return resultArr;
};

const map = <T>(arr: T[], fun: (a: T) => T): T[] => {
	const resultArr = [];
	for (let i = 0; i < arr.length; i++) {
		resultArr.push(fun(arr[i]));
	}
	return resultArr;
};

const pair = <A, T>(a: A, b: T): [A, T] => {
	return [a, b];
};

// сложные

const reduce = <A,T>(arr: T[], fun: (a: A, b: A | T) => A, startValue: A): A => {
	let result = startValue;

	for (let i = 0; i < arr.length; i++) {
		result = fun(result, arr[i]);
	}
	return result;
};

const PromiseWrapper = <A, T>(fun: (a: A)=> Promise<T>) => {
	
};

const fetchUserData = (id: number): Promise<{ name: string, email: string}> => Promise.resolve({name: 'User name', email: 'email@email.com'});
PromiseWrapper(fetchUserData) // Возвращает `Promise` с тем же типом что и `fetchUserData`


const extractProperty = <A, T extends keyof A>(obj: A, value: T): A[T] => {
	return obj[value]
};


