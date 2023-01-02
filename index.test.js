const solutionTaskA = require("./a/index");

const solutionTaskB = require("./b/index");

// describe("Task A", () => {
// 	const RESULT = [
// 		"1",
// 		"2",
// 		"fish",
// 		"4",
// 		"bash",
// 		"fish",
// 		"7",
// 		"8",
// 		"fish",
// 		"bash",
// 		"11",
// 		"fish",
// 		"13",
// 		"14",
// 		"fish bash",
// 		"16",
// 		"17",
// 		"fish",
// 		"19",
// 		"bash",
// 		"fish",
// 		"22",
// 		"23",
// 		"fish",
// 		"bash",
// 		"26",
// 		"fish",
// 		"28",
// 		"29",
// 		"fish bash",
// 	];

// 	test("Test case 1", () => {
// 		expect(solutionTaskA(30)).toStrictEqual(RESULT.slice(0, RESULT.length));
// 	});

// 	test("Test case 2", () => {
// 		expect(solutionTaskA(15)).toStrictEqual(RESULT.slice(0, 15));
// 	});

// 	test("Test case 3", () => {
// 		expect(solutionTaskA(10)).toStrictEqual(RESULT.slice(0, 10));
// 	});
// });

describe("Task B", () => {
	test("Test case 1", () => {
		expect(solutionTaskB([50, 12, 100, 9, 1, 22, 3])).toStrictEqual([
			1, 3, 9, 12, 22, 50, 100,
		]);
	});

	test("Test case 2", () => {
		expect(solutionTaskB([55, 3, 2, 56, 8, 99, 88, 101])).toStrictEqual([
			2, 3, 8, 55, 56, 88, 99, 101,
		]);
	});

	test("Test case 3", () => {
		expect(
			solutionTaskB([14, 19, 20, 21, 76, 54, 32, 21, 1, 6, 5])
		).toStrictEqual([1, 5, 6, 14, 19, 20, 21, 21, 32, 54, 76]);
	});
});
