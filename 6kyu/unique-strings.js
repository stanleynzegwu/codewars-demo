// Given a string that contains only letters, you have to find out the number of unique strings (including the string itself) that can be produced by re-arranging the letters of the string. Strings are case insensitive.

// HINT: Generating all the unique strings and calling length on that isn't a great solution for this problem. It can be done a lot faster...

// Examples
// uniqCount("AB") = 2n      // "AB", "BA"
// uniqCount("ABC") = 6n     // "ABC", "ACB", "BAC", "BCA", "CAB", "CBA"
// uniqCount("ABA") = 3n     // "AAB", "ABA", "BAA"
// uniqCount("ABBb") = 4n    // "ABBB", "BABB", "BBAB", "BBBA"
// uniqCount("AbcD") = 24n   // "ABCD", etc.

// // Note that you should return a BigInt, not a Number

//                              solution

const uniqCount = xs => {
	const getFactorial = num => {
		let res = 1n;
		for (let i = 1n; i <= num; i++) {
			res *= i;
		}
		return res;
	}

	let numerator = getFactorial(xs.length), strArr = xs.toLowerCase().split(''), data = {};
	
	for (let i = 0; i < strArr.length; i++) {
		const key = strArr[i];
		data[key] = data[key] ? data[key] + 1n : 1n;
	}

	const mults = Object.values(data).filter(el => el > 1n).map(el => getFactorial(el));
	const denominator = mults.length ? mults.reduce((acc, current) => acc * current) : 1n;
	return numerator / denominator;
}
