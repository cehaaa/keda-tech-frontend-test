// run `jest c/index.test.js` to test this file

const solution = require("./index");

describe("Task 3 test", () => {
	test("return true for palindromes", () => {
		expect(solution("civic")).toBe(true);
		expect(solution("Anna")).toBe(true);
		expect(solution("bib")).toBe(true);
		expect(solution("TeNet")).toBe(true);
		expect(solution("WoW")).toBe(true);
	});

	test("return false for palindromes", () => {
		expect(solution("civics")).toBe(false);
		expect(solution("Annas")).toBe(false);
		expect(solution("bibs")).toBe(false);
		expect(solution("TeNets")).toBe(false);
		expect(solution("WoWs")).toBe(false);
	});
});
