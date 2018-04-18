describe("INT_Q_B", function() {
it("10 на 5 - вернет 1", function() {
assert.equal(INT_Q_B(new Rational ("10/5")), 1); // Проверяет на совпадение value_1 и value_2
});
it("2 на 3 - вернет 0", function() {
assert.equal(INT_Q_B(new Rational ("2/3")), 0); // Проверяет на совпадение value_1 и value_2
});
it("500 на 34 вернет 0", function() {
assert.equal(INT_Q_B(new Rational ("500/34")), 0); // Проверяет на совпадение value_1 и value_2
});
});
