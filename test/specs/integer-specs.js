describe("ABS_Z_N", function() {
    it("-12312447685764 = 12312447685764", function(){
        assert.equal(ABS_Z_N(new Integer("-12312447685764")),12312447685764);
    });
    it("316474923658743 = 316474923658743", function(){
        assert.equal(ABS_Z_N(new Integer("316474923658743")),316474923658743);
    });
    it("-214798749812647 = 214798749812647", function(){
        assert.equal(ABS_Z_N(new Integer("-214798749812647")), 214798749812647);
    });
});

describe("POZ_Z_D", function() {
    it("-12312447685764 => 1", function(){
        assert.equal(POZ_Z_D(new Integer("-12312447685764")), 1);
    });
    it("316474923658743 => 2", function(){
        assert.equal(POZ_Z_D(new Integer("316474923658743")), 2);
    });
    it("0 => 0", function(){
        assert.equal(POZ_Z_D(new Integer("0")), 0);
    });
});

describe("MUL_ZM_Z", function() {
    it("-12312447685764 => 12312447685764", function(){
        assert.equal(MUL_ZM_Z(new Integer("-12312447685764")), 12312447685764);
    });
    it("316474923658743 => -316474923658743", function(){
        assert.equal(MUL_ZM_Z(new Integer("316474923658743")), -316474923658743);
    });
    it("0 => 0", function(){
        assert.equal(MUL_ZM_Z(new Integer("0")), 0);
    });
});

describe("TRANS_N_Z", function() {
    it("12312447685764 => +12312447685764", function(){
        assert.equal(TRANS_N_Z(new Natural("12312447685764")), 12312447685764);
    });
    it("316474923658743 => +316474923658743", function(){
        assert.equal(TRANS_N_Z(new Natural("316474923658743")), 316474923658743);
    });
    it("0 => +0", function(){
        assert.equal(TRANS_N_Z(new Natural("0")), 0);
    });
});

describe("TRANS_Z_N", function() {
    it("-12312447685764 => +12312447685764", function(){
        assert.equal(TRANS_Z_N(new Integer("-12312447685764")), 12312447685764);
    });
    it("-316474923658743 => +316474923658743", function(){
        assert.equal(TRANS_Z_N(new Integer("-316474923658743")), 316474923658743);
    });
    it("0 => +0", function(){
        assert.equal(TRANS_Z_N(new Integer("0")), 0);
    });
});

describe("ADD_ZZ_Z", function() {
    it("999 + -1 = 998", function(){
        assert.equal(ADD_ZZ_Z(new Integer("999"), new Integer("-1")),998);
    });
    it("-45785147 + 24781447 = -21003700", function(){
        assert.equal(ADD_ZZ_Z(new Integer("-45785147"), new Integer("24781447")),-21003700);
    });
    it("-7987987 + -8798798 = -16786785", function(){
        assert.equal(ADD_ZZ_Z(new Integer("-7987987"), new Integer("-8798798")),-16786785);
    });
    it("-7987987 + 8798798 = 810811", function(){
        assert.equal(ADD_ZZ_Z(new Integer("-7987987"), new Integer("8798798")),810811);
    });
    it("-8749879879879 + 787991454 = ", function(){
        assert.equal(ADD_ZZ_Z(new Integer("-8749879879879"), new Integer("787991454")),-8749091888425);
    });
});

describe("SUB_ZZ_Z", function() {
    it("999 - -1 = 1000", function(){
        assert.equal(SUB_ZZ_Z(new Integer("999"), new Integer("-1")), 1000);
    });
    it("-45785147 - 24781447 = -70566594", function(){
        assert.equal(SUB_ZZ_Z(new Integer("-45785147"), new Integer("24781447")),-70566594);
    });
    it("-7987987 - -8798798 = 810811", function(){
        assert.equal(SUB_ZZ_Z(new Integer("-7987987"), new Integer("-8798798")), 810811);

    });
});

describe("MUL_ZZ_Z", function() {
    it("12312447685764 * -8 = -98499581486112 ", function(){
        assert.equal(MUL_ZZ_Z(new Integer("12312447685764"), new Integer("-8")), -98499581486112);
    });
    it("-316474923658743 * 3215 = -1017466879562858800", function(){
        assert.equal(MUL_ZZ_Z(new Integer("-316474923658743"), new Integer("3215")), -1017466879562858800);
    });
    it("0 * -43254767 = 0", function(){
        assert.equal(MUL_ZZ_Z(new Integer("0"), new Integer("-43254767")), 0);
    });
});

//надо проверить
describe("DIV_ZZ_Z", function() {
    it("12312447685764 / -8 = -1539055960720 ", function(){
        assert.equal(DIV_ZZ_Z(new Integer("12312447685764"), new Integer("-8")), -1539055960720);
    });
    it("-316474923658743 / 3215 = -98436990251", function(){
        assert.equal(DIV_ZZ_Z(new Integer("-316474923658743"), new Integer("3215")), -98436990251);
    });
    it("0 / -43254767 = 0", function(){
        assert.equal(DIV_ZZ_Z(new Integer("0"), new Integer("-43254767")), 0);
    });
});

describe("MOD_ZZ_Z", function() {
    it("12312447685764 % -8 = -4 ", function(){
        assert.equal(MOD_ZZ_Z(new Integer("12312447685764"), new Integer("-8")), -4);
    });
    it("316474923658743 % 3215 = 1778", function(){
        assert.equal(MOD_ZZ_Z(new Integer("316474923658743"), new Integer("3215")), "1778");
    });
    it("0 / -43254767 = 0", function(){
        assert.equal(MOD_ZZ_Z(new Integer("0"), new Integer("-43254767")), 0);
    });
    

});
