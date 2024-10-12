const { Web3 } = require('web3');
const ganache = require('ganache');
const assert = require('assert');
const web3 = new Web3(ganache.provider()); 

// Testing with Mocha

class Car {
    park(){
        return 'stopped'
    }

    drive(){
        return 'vroom'
    }
}

//Tests the Car functions
//describes lets you group several it functions

let car;

beforeEach (()=>{
    car = new Car();
});

describe('Car', () => {
    
    it('can park', () => {
        assert.equal(car.park(), 'bah'); //This one will fail
    });

    it('can drive', () => {
        assert.equal(car.drive(), 'vroom'); //This one will pass
    });
});