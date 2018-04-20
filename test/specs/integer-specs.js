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
