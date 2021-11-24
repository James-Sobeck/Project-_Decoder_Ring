// Write your tests here!
const expect = require('chai').expect;
const { substitution } = require('../src/substitution');

describe('substitution', () =>{
    it('Handles symbols and spaces during encoding', ()=>{
        let actual =substitution('uY2^hsu #hfue2', 'ZYXWVUTSRQPONMLKJIHGFEDCBA');
        expect(actual).to.equal('FBSHF SUFV');
    })
    it('Checks for valid alphabet', ()=>{
        let actual = substitution(`uY2^hsu #hfue2`, `dsafbu32&#*@fuhadfkjbvlkusab`);
        expect(actual).to.be.false;
    })
    it('Checks for alphabet', ()=>{
        let actual = substitution(`uY2^hsu #hfue2`);
        expect(actual).to.be.false;
    })
    it('Spaces are maintained throughout when decoding', () =>{
        let actual = substitution('uY2^hsu #hfue2', '.waeszrdxtfcygvuhbijnokmpl', false);
        expect(actual).to.equal('pmqep qkpd');
    });
    it('input is converted to lowercase', ()=>{
        let actual = substitution('DFU&D *HDJI', '.waeszrdxtfcygvuhbijnokmpl', false);
        expect(actual).to.equal('hkph qhts');
    })
})
