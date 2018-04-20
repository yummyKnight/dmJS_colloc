describe("DIV_PP_P", function() {
    it("2x^6-x^5+12x^3-72x^2+3 / x^3+2x^2-1 = +2/1x^3-5/1x^2+10/1x-6/1", function(){
        assert.equal(DIV_PP_P(new Polynome("2x^6-x^5+12x^3-72x^2+3"), new Polynome("x^3+2x^2-1")), "+2/1x^3-5/1x^2+10/1x-6/1");
    });
});