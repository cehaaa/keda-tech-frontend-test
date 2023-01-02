const solution = require("./index");

describe("Task 2 test", () => {
	test("return sorted array", () => {
		expect(solution([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
		expect(solution([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
		expect(solution([5, 3, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
		expect(solution([1, 3, 5, 2, 4])).toEqual([1, 2, 3, 4, 5]);
	});
});
