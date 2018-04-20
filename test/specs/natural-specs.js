/*
Каждая группа тестов имеет форму:
describe("Название группы", function (){
        Тест1
        Тест2
        ...
        ТестN
})
*/
describe("COM_NN_D", function() {
    /* Каждый тест имеет форму it("Название", function() {
        assert.equal(SomethingToBeTested, Result);
    }) */
    it("При сравнении 123456 и 123456 результат 0", function(){
        assert.equal(COM_NN_D(new Natural("123456"), new Natural("123456")), 0);
    });
    it("При сравнении 123 и 245 результат 1", function(){
        assert.equal(COM_NN_D(new Natural("123"), new Natural("245")), 1);
    });
    it("При сравнении 243123123 и 234456 результат 2", function(){
        assert.equal(COM_NN_D(new Natural("243123123"), new Natural("234456")), 2);
    });
});

describe("ADD_1N_D", function() {
    it("999 + 1 = 1000", function(){
        assert.equal(ADD_1N_N(new Natural("999")), 1000);
    });
    it("0 + 1 = 1", function(){
        assert.equal(ADD_1N_N(new Natural("0")), 1);
    });
    it("123456 + 1 = 123457", function(){
        assert.equal(ADD_1N_N(new Natural("123456")), 123457);
    });
});

describe("ADD_NN_N", function() {
    it("999 + 1 = 1000", function(){
        assert.equal(ADD_NN_N(new Natural("999"), new Natural("1")),1000);
    });
    it("45785147 + 24781447 = 70566594", function(){
        assert.equal(ADD_NN_N(new Natural("45785147"), new Natural("24781447")),70566594);
    });
    it("7987987987854354 + 87987987987887987 = 95975975975742341", function(){
        assert.equal(ADD_NN_N(new Natural("7987987987854354"), new Natural("87987987987887987")),95975975975742341);
    });
});
describe("SUB_NN_N", function() {
    it("999 - 999 = 0", function(){
        assert.equal(SUB_NN_N(new Natural("999"), new Natural("999")),0);
    });
    it("45785147 - 24781447 = 21003700", function(){
        assert.equal(SUB_NN_N(new Natural("45785147"), new Natural("24781447")),21003700);
    });
    it("87974848488789754 - 87974838488789754 = 10000000000", function(){
        assert.equal(SUB_NN_N(new Natural("87974848488789754"), new Natural("87974838488789754")),10000000000);
    });
});
describe("MUL_Nk_N", function() {
    it("5 * 10 ^ 5 = 500000", function(){
        assert.equal(MUL_Nk_N("5","5"),500000);
    });
    it("6487878 * 10 ^ 10 = 64878780000000000", function(){
        assert.equal(MUL_Nk_N("6487878","10"),64878780000000000);
    });
    it("87974848488789754 * 10 ^ 17 = 8797484848878975400000000000000000", function(){
        assert.equal(MUL_Nk_N("87974848488789754", "17"),8797484848878975400000000000000000);
    });
});
describe("MUL_ND_N", function() {
    it("35469 * 3 = 106407", function(){
        assert.equal(MUL_ND_N(new Natural ("35469"), new Natural("3")),106407);
    });
    it("6487878 * 7 = 45415146", function(){
        assert.equal(MUL_ND_N(new Natural("6487878"), new Natural("7")),45415146);
    });
    it("9999999999 * 9 = 89999999991", function(){
        assert.equal(MUL_ND_N(new Natural("9999999999"), new Natural("9")),89999999991);
    });
});
describe("MOD_NN_N", function() {
    it("3549561 % 54231 = 24546", function(){
        assert.equal(MOD_NN_N(new Natural("3549561"), new Natural("54231")), "24546");
    });
    it("12 % 3 = 0", function(){
        assert.equal(MOD_NN_N(new Natural("12"), new Natural("3")), "0");
    });
    it("9999999999 % 15978642 = 13348749", function(){
        assert.equal(MOD_NN_N(new Natural("9999999999"), new Natural("15978642")), "13348749");
    });
    it("12 % 12 = 0", function(){
        assert.equal(MOD_NN_N(new Natural("12"), new Natural("12")), "0");
    });
    it("12312447685764 % 8 = 4", function(){
        assert.equal(MOD_NN_N(new Natural("12312447685764"), new Natural("8")), "4");
    });
    it("316474923658743 % 3215 = 1778", function(){
        assert.equal(MOD_NN_N(new Natural("316474923658743"), new Natural("3215")), 1778);
    });
});
describe("GCF_NN_N", function() {
    it("8253467589 на 1554, НОД = 3", function(){
        assert.equal(GCF_NN_N(new Natural ("8253467589"), new Natural("1554")), "3");
    });
    it("12 на 12, НОД = 12", function(){
        assert.equal(GCF_NN_N(new Natural("12"), new Natural("12")), "12");
    });
    it("1005 на 328, НОД = 1", function(){
        assert.equal(GCF_NN_N(new Natural("1005"), new Natural("328")), "1");
    });
});
describe("SUB_NDN_N", function() {
    it("15 - 3*5 = 0", function(){
        assert.equal(SUB_NDN_N(new Natural ("15"), new Natural("3"), new Natural("5")), "0");
    });
    it("4547878 - 45458 * 9 = 4138756", function(){
        assert.equal(SUB_NDN_N(new Natural("4547878"), new Natural("9"), new Natural("45458")), "4138756");
    });
    it("5468498787897987 - 78754454688 * 8 = 5467868752260483", function(){
        assert.equal(SUB_NDN_N(new Natural("5468498787897987"), new Natural("8"), new Natural("78754454688")), "5467868752260483");
    });
});
describe("LCM_NN_N", function() {
    it("84987878 на 4878787, НОK = 414637754343986", function(){
        assert.equal(LCM_NN_N(new Natural ("84987878"), new Natural("4878787")), 414637754343986);
    });
    it("5698 на 95987, НОK = 546933926", function(){
        assert.equal(LCM_NN_N(new Natural("5698"), new Natural("95987")), 546933926);
    });
    it("8498146 на 68879874984, НОK = 292675617037889860", function(){
        assert.equal(LCM_NN_N(new Natural("8498146"), new Natural("68879874984")), 292675617037889860);
    });
});
describe("MUL_NN_N", function() {
    it("35469 * 84787 = 3007310103", function(){
        assert.equal(MUL_NN_N(new Natural ("35469"), new Natural("84787")),3007310103);
    });
    it("6487878 * 35156484 = 228090979100952", function(){
        assert.equal(MUL_NN_N(new Natural("6487878"), new Natural("35156484")),228090979100952);
    });
    it("9999999999 * 8798798798794 = 87987987979141201201206", function(){
        assert.equal(MUL_NN_N(new Natural("9999999999"), new Natural("8798798798794")),87987987979141201201206);
    });
});
describe("DIV_NN_N", function() {
    it("84987878 / 4547 = 18690", function(){
        assert.equal(DIV_NN_N(new Natural ("84987878"), new Natural("4547")),"18690");
    });
    it("684987987987987 / 687687878 =  996073", function(){
        assert.equal(DIV_NN_N(new Natural("684987987987987"), new Natural("687687878")), "996073");
    });
    it("1 / 6 = 0", function(){
        assert.equal(DIV_NN_N(new Natural("1"), new Natural("6")),0);
    });
});
describe("DIV_NN_Dk", function() {
    it("42 / 42 ^ 42", function(){
        assert.equal(DIV_NN_Dk(new Natural ("42"), new Natural("42")),"1");
    });
    it("123 20", function(){
        assert.equal(DIV_NN_Dk(new Natural("123"), new Natural("20")), "6");
    });
    it("123 33", function(){
        assert.equal(DIV_NN_Dk(new Natural("123"), new Natural("33")),"3");
    });
});