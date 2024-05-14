const calculateBonus = require("./task_2_4_4");

test("sum is 0, bonus is equal to 0", () => {
  expect(calculateBonus(0, 0)).toEqual(0);
});

test("sum is 49, bonus is equal to 49", () => {
  expect(calculateBonus(25, 24)).toEqual(49);
});

test("sum is 50, bonus is equal to 50", () => {
  expect(calculateBonus(50, 0)).toEqual(50);
});

test("sum is 51, bonus is equal to 50", () => {
  expect(calculateBonus(50, 1)).toEqual(50);
});

test("sum is 100100, bonus is equal to 50", () => {
  expect(calculateBonus(100000, 100)).toEqual(50);
});
