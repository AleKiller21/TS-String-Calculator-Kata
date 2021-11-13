import { Calculator } from '../src/Calculator';

describe('String Calculator Kata', () => {
    let calculator: Calculator;

    beforeAll(() => {
        calculator = new Calculator();
    });
    it("Given the user input is empty when calculating the sum then it should return zero.", () => {
      expect(calculator.sum()).toBe(0);
    });

    it('Given the user input is one number when calculating the sum then it should return the same number. (example "3" should equal 3).', () => {
      expect(calculator.sum("3")).toBe(3);
    });

    it('Given the user input is two numbers when calculating the sum then it should return the sum of those numbers. (example "1,2" should equal 3).', () => {
        expect(calculator.sum("1,2")).toBe(3);
    });

    it('Given the user input is an unknown amount of numbers when calculating the sum then it should return the sum of all the numbers. (example "1,2,3" should equal 6).', () => {
        expect(calculator.sum("1,2,3")).toBe(6);
    });

    it('Given the user input is multiple numbers with new line and comma delimiters when calculating the sum then it should return the sum of all the numbers. (example "1\n2,3" should equal 6).', () => {
        expect(calculator.sum("1\n2,3")).toBe(6);
    });

    it("Given the user input is multiple numbers with a custom single-character delimiter when calculating the sum then it should return the sum of all the numbers. (example “//;\n1;2” should return 3).", () => {
        expect(calculator.sum("//;\n1;2")).toBe(3);
    });

    it('Given the user input contains one negative number when calculating the sum then it should throw an exception "negatives not allowed: x" (where x is the negative number).', () => {
        expect(() => calculator.sum("1,2,-3")).toThrow("negatives not allowed: -3");
    });

    it('Given the user input contains multiple negative numbers mixed with positive numbers when calculating the sum then it should throw an exception "negatives not allowed: x, y, z" (where x, y, z are only the negative numbers).', () => {
        expect(() => calculator.sum("1,2,-3,-4,-5")).toThrow("negatives not allowed: -3, -4, -5");
    });

    it("Given the user input contains numbers larger than 1000 when calculating the sum it should only sum the numbers less than 1001. (example 2 + 1001 = 2)", () => {
        expect(calculator.sum("2,1000,1001")).toBe(1002);
    });

    it("Given the user input is multiple numbers with a custom multi-character delimiter when calculating the sum then it should return the sum of all the numbers. (example: “//[***]\n1***2***3” should return 6).", () => {
        expect(calculator.sum("//[***]\n1***2***3")).toBe(6);
    });

    it("Given the user input is multiple numbers with multiple custom delimiters when calculating the sum then it should return the sum of all the numbers. (example “//[*][%]\n1*2%3” should return 6).", () => {
      expect(calculator.sum("//[*][%]\n1*2%3")).toBe(6);
    });
    
});
