const assert = require('assert');
const Rooster = require('./index');

describe('Rooster', ()=>{
  describe('.announceDawn', ()=>{
    it('returns a Rooster call', ()=>{
      //setup
      const expected = 'cock-a-doodle-doo!';
      //exercise
      const actual = Rooster.announceDawn()
      //verify
      assert.equal(expected , actual)
    });
  });
  describe('.timeAtDawn',()=>{
    it('returns its argument as a sting', ()=>{
      //setup
      const inputNumber = 12;
      const expected = '12';
      //exercise
      const actual = Rooster.timeAtDawn(inputNumber);
      //verify
      assert.strictEqual(expected , actual);
    });
    it('throws an error if passed a number less than 0', ()=>{
      //setup
      const inputNumber = -1;
      //verify
      assert.throws(()=>{Rooster.timeAtDawn(inputNumber)},RangeError)
    });
    it('throws an error if passed a number greater than 23', ()=>{
      //setup
      const inputNumber = 24;
      //verify
      assert.throws(()=>{Rooster.timeAtDawn(inputNumber)},RangeError)
    });
  });
