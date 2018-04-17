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