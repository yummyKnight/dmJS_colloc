describe("DIV_PP_P", function() {
    it("2x^6-x^5+12x^3-72x^2+3 / x^3+2x^2-1 = +2/1x^3-5/1x^2+10/1x^1-6/1", function(){
        assert.equal(DIV_PP_P(new Polynome("2x^6-1x^5+12x^3-72x^2+3"), new Polynome("x^3+2x^2-1")).toString(), "+2/1x^3-5/1x^2+10/1x^1-6/1");
    });
    it("x^2+x+1 / x + 1 = x", function() {
      assert.equal(DIV_PP_P(new Polynome("x^2+x+1"), new Polynome("x+1")).toString(), "+1/1x^1");
    });
    it("x^2+2x+1 / x + 1 = x + 1", function() {
      assert.equal(DIV_PP_P(new Polynome("x^2+2x+1"), new Polynome("x+1")).toString(), "+1/1x^1+1/1");
    });
});
describe("DEG_P_N", function() {
    it("x^4+x^5+x^1566341564 = 1566341564", function(){
        assert.equal(DEG_P_N(new Polynome("x^4+x^5+x^1566341564")),1566341564);
    });
    it("487/5454x^7 + 12154848/878x^11 + 488/4584x^9 = 11", function(){
        assert.equal(DEG_P_N(new Polynome("487/5454x^7 + 12154848/878x^11 + 488/4584x^9")),11);
    });
    it("0", function(){
        assert.equal(DEG_P_N(new Polynome("-214798749812647")),0);
    });
});
describe("ADD_PP_P", function()
{
  it("451875245/1x^32 + 24255/1x^15 + 2524465/1x^2 + 1/1x^32+5/1x^2+1/1", function() {
    assert.equal(ADD_PP_P(new Polynome ("451875245/1x^32 + 24255/1x^15 + 2524465/1x^2"), new Polynome ("1/1x^32+5/1x^2+1/1"))
    , "+451875246/1x^32+24255/1x^15+2524470/1x^2+1/1");
  });
  it("(4x^3+2x+10)+(x^2+10010) = 4x^3+x^2+2x+10020", function() {
    assert.equal(ADD_PP_P(new Polynome ("4x^3+2x+10"), new Polynome ("x^2+10010")), "+4/1x^3+1/1x^2+2/1x^1+10020/1");
  });
  it("(50x^98 +3)+(38x^98+x^97)=88x^98+x^97+3", function() {
    assert.equal(ADD_PP_P(new Polynome ("50x^98 +3"), new Polynome ("38x^98+x^97")),"+88/1x^98+1/1x^97+3/1");
  });
});
describe("SUB_PP_P", function()
{
  it("(451875245/1 x^32 + 24255/1 x^15 + 2524465/1 x^2) - (1/1 x^32+5/1 x^2+1/1) = 451875244/1 x^32 + 24255/1 x^15 + 2524450/1 x^2 -1", function() {
    assert.equal(SUB_PP_P(new Polynome ("451875245/1x^32 + 24255/1x^15+2524465/1 x^2"), new Polynome ("1/1x^32+5/1x^2+1/1")).toString()
    , "+451875244/1x^32+24255/1x^15+2524460/1x^2-1/1");
  });
  it("(x^4-3x^2+1)-(x^4-5x^2+2) = 2x^2-1", function() {
    assert.equal(SUB_PP_P(new Polynome ("x^4-3x^2+1"), new Polynome ("x^4-5x^2+2")), "+2/1x^2-1/1");
  });
  it("(x^100 + 1) - (x + 100) = x^100 - x - 99", function() {
    assert.equal(SUB_PP_P(new Polynome ("x^100 + 1"), new Polynome ("x + 100")).toString(),"+1/1x^100-1/1x^1-99/1");
  });
});

describe("DER_P_P", function() {
  it("(+1/1x^3+1/1x^2+1/1)\'=+3/1x^2+2/1x", function() {
    assert.equal(DER_P_P(new Polynome("+1/1x^3+1/1x^2+1")).toString(), "+3/1x^2+2/1x^1");
  });
  it("(1/1)'= 0", function() {
    assert.equal(DER_P_P(new Polynome("1")).toString(), "0");
  })

    assert.equal(DER_P_P(new Polynome("1")).toString(), "0");
  });
describe("NMR_P_P", function() {
  it("x^2+2x+1 = x + 1", function() {
    assert.equal(NMR_P_P(new Polynome("x^2+2x+1")).toString(), "+1/1x^1+1/1");
  });
});
describe("MOD_PP_P", function()
{
  it("(3x^5+2x^4-12x^8-4)/(x^3-3) => -99x^2+6/1x-4", function() {
    assert.equal(MOD_PP_P(new Polynome ("3x^5+2x^4-12x^8-4"), new Polynome ("x^3-3")).toString()
    , "-99/1x^2+6/1x^1-4/1");
  });
  
});
