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
        assert.equal(ADD_1N_N(new Natural("999")), "1000");
    });
    it("0 + 1 = 1", function(){
        assert.equal(ADD_1N_N(new Natural("0")), "1");
    });
    it("123456 + 1 = 123457", function(){
        assert.equal(ADD_1N_N(new Natural("123456")), "123457");
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
    it("3549561 на 54231, остаток = 24546", function(){
        assert.equal(MOD_NN_N(new Natural ("3549561"), new Natural("54231")),24546);
    });
    it("12 на 3, остаток = 0", function(){
        assert.equal(MUL_ND_N(new Natural("12"), new Natural("3")), 0);
    });
    it("9999999999 на 15978642 = 13348749", function(){
        assert.equal(MUL_ND_N(new Natural("9999999999"), new Natural("15978642")), 13348749);
    });
});
