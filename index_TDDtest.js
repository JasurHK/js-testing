var assert = require("assert");
var Calculate =  require('./index_TDD.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('it will test if the factorial of inputNumber is equal to expectedNumber', ()=>{
      const input = 5 ;
      const expected = 120 ;
      const actual = Calculate.factorial(input) ;
      assert.equal(actual,expected);
    });
    it('it will test if the factorial of 0 is equal to 0', ()=>{
      assert.equal(Calculate.factorial(0), 0)
    });
  });
});
