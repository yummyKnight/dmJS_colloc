describe("INT_Q_B", function()
{
  it("10 на 5 - вернет 1", function() {
    assert.equal(INT_Q_B(new Rational ("10/5")), '1'); // Проверяет на совпадение value_1 и value_2
  });
  it("2 на 3 - вернет 0", function() {
    assert.equal(INT_Q_B(new Rational ("2/3")), '0'); // Проверяет на совпадение value_1 и value_2
  });
  it("500 на 34 вернет 0", function() {
    assert.equal(INT_Q_B(new Rational ("500/34")), '0'); // Проверяет на совпадение value_1 и value_2
  });
});

describe("MUL_QQ_Q", function()
{
  it("Тест 1 : 3/2 * 10/8 = 15/8", function() {
    assert.equal(MUL_QQ_Q(new Rational ("3/2"), new Rational ("10/8")), 15/8); // Проверяет на совпадение value_1 и value_2
  });
  it("Тест 2 : 1/1000 * 54/99 = 3/5500", function() {
    assert.equal(MUL_QQ_Q(new Rational ("1/1000"), new Rational ("54/99")), 1/5500); // Проверяет на совпадение value_1 и value_2
  });
  it("Тест 3 : 833/500 * 653/1000000000 = 543949/5000000000000", function() {
    assert.equal(MUL_QQ_Q(new Rational ("833/500"), new Rational ("653/1000000000")),543949/5000000000000); // Проверяет на совпадение value_1 и value_2
  });
});

describe("ADD_QQ_Q", function()
{
  it("Тест 1 : 3/2 + 11/8 = 23/8", function() {
    assert.equal(ADD_QQ_Q(new Rational ("3/2"), new Rational ("10/8")), 23/8); // Проверяет на совпадение value_1 и value_2
  });
  it("Тест 2 : 1/1000 + 54/99 = 6011/11000", function() {
    assert.equal(ADD_QQ_Q(new Rational ("1/1000"), new Rational ("54/99")), 6011/11000); // Проверяет на совпадение value_1 и value_2
  });
  it("Тест 3 : 833/500 + 653/1000000000 = 1666000653/1000000000", function() {
    assert.equal(ADD_QQ_Q(new Rational ("833/500"), new Rational ("653/1000000000")),1666000653/1000000000); // Проверяет на совпадение value_1 и value_2
  });
});

describe("SUB_QQ_Q", function()
{
  it("Тест 1 : 3/2 - 11/8 = 1/8", function() {
    assert.equal(ADD_QQ_Q(new Rational ("3/2"), new Rational ("11/8")), 1/8); // Проверяет на совпадение value_1 и value_2
  });
  it("Тест 2 : 1/1000 - 54/99 = - 5989/11000", function() {
    assert.equal(ADD_QQ_Q(new Rational ("1/1000"), new Rational ("54/99")), -5989/11000); // Проверяет на совпадение value_1 и value_2
  });
  it("Тест 3 : 833/500 - 653/1000000000 = 665999347/1000000000", function() {
    assert.equal(ADD_QQ_Q(new Rational ("833/500"), new Rational ("653/1000000000")),665999347/1000000000); // Проверяет на совпадение value_1 и value_2
  });
});
