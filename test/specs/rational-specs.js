

describe("RED_Q_Q", function()
{
  it("10 / 5 = 2", function() {
    assert.equal(RED_Q_Q(new Rational ("10/5")), "2/1");
  });
  it("231234124 / 33242414 = 115617062 / 16621207", function() {
    assert.equal(RED_Q_Q(new Rational ("231234124/33242414")), "115617062/16621207");
  });
  it("100 / -2 = -50", function() {
    assert.equal(RED_Q_Q(new Rational ("-100/2")), "-50/1");
  });
});

describe("INT_Q_B", function()
{
  it("10 на 5 - вернет 1", function() {

    assert.equal(INT_Q_B(new Rational ("10/5")), 1);
  });
  it("2 на 3 - вернет 0", function() {
    assert.equal(INT_Q_B(new Rational ("2/3")), '0');
  });
  it("500 на 34 вернет 0", function() {
    assert.equal(INT_Q_B(new Rational ("500/34")), '0');
  });
});

describe("TRANS_Z_Q", function()
{
  it("5 => 5/1", function() {
    assert.equal(TRANS_Z_Q(new Integer ("5")), "5/1");  //вроде так
  });
  it("124546351 => 124546351/1", function() {
    assert.equal(TRANS_Z_Q(new Integer ("124546351")), "124546351/1");
  });
  it("124546351 => 124546351/1", function() {
    assert.equal(TRANS_Z_Q(new Integer ("2147159725915")), "2147159725915/1");
  });
});

describe("TRANS_Q_Z", function()
{
  it("10/1 => 10", function() {
    assert.equal(TRANS_Q_Z(new Rational ("10/1")), '10');
  });
  it("23765986375627/1 => 23765986375627", function() {
    assert.equal(TRANS_Q_Z(new Rational ("23765986375627/1")), '23765986375627');
  });
  it("500/1 => 500", function() {
    assert.equal(TRANS_Q_Z(new Rational ("500/1")), '500');
  });
});

describe("ADD_QQ_Q", function()
{
  it("Тест 1 : 3/2 + 11/8 = 23/8", function() {
    assert.equal(ADD_QQ_Q(new Rational ("3/2"), new Rational ("11/8")), "23/8");
  });
  it("Тест 2 : 1/1000 + 54/99 = 6011/11000", function() {
    assert.equal(ADD_QQ_Q(new Rational ("1/1000"), new Rational ("54/99")), "6011/11000");
  });
  it("Тест 3 : 833/500 + 653/1000000000 = 1666000653/1000000000", function() {
    assert.equal(ADD_QQ_Q(new Rational ("833/500"), new Rational ("653/1000000000")),"1666000653/1000000000");
  });
});

describe("SUB_QQ_Q", function()
{
  it("Тест 1 : 3/2 - 11/8 = 1/8", function() {
    assert.equal(SUB_QQ_Q(new Rational ("3/2"), new Rational ("11/8")), "1/8");
  });
  it("Тест 2 : 1/1000 - 54/99 = - 5989/11000", function() {
    assert.equal(SUB_QQ_Q(new Rational ("1/1000"), new Rational ("54/99")), "-5989/11000");
  });
  it("Тест 3 : 833/500 - 653/1000000000 = 1665999347/1000000000", function() {
    assert.equal(SUB_QQ_Q(new Rational ("833/500"), new Rational ("653/1000000000")),"1665999347/1000000000");
  });
});

describe("MUL_QQ_Q", function()
{
  it("Тест 1 : 3/2 * 10/8 = 15/8", function() {
    assert.equal(MUL_QQ_Q(new Rational ("3/2"), new Rational ("10/8")), "15/8");
  });
  it("Тест 2 : 1/1000 * 54/99 = 3/5500", function() {
    assert.equal(MUL_QQ_Q(new Rational ("1/1000"), new Rational ("54/99")), "3/5500");
  });
  it("Тест 3 : 833/500 * 653/1000000000 = 543949/5000000000000", function() {
    assert.equal(MUL_QQ_Q(new Rational ("833/500"), new Rational ("653/10000000000")).toString(),"543949/5000000000000");
  });
});

describe("DIV_QQ_Q", function()
{
  it("Тест 1 : 3/2 / 10/8 = 6/5", function() {
    assert.equal(DIV_QQ_Q(new Rational ("3/2"), new Rational ("10/8")), '6/5');
  });
  it("Тест 2 : 1/1000 / 54/99 = 11/6000", function() {
    assert.equal(DIV_QQ_Q(new Rational ("1/1000"), new Rational ("54/99")), '11/6000');
  });
  it("Тест 3 : 833/500 / 653/1000000000 = 1666000000/653", function() {
    assert.equal(DIV_QQ_Q(new Rational ("833/500"), new Rational ("653/1000000000")),'1666000000/653');

  });
});
