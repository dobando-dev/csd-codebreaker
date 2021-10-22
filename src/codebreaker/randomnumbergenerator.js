import fs from 'fs';

export default class RandomNumberGenerator {
    constructor(min, max){
        this.min = min;
        this.max = max;
        this.lastGenerated=null;
    }

    getNewNumber(){
        this.lastGenerated = Math.floor(Math.random() * (this.max - this.min) + this.min);
        return this.lastGenerated;
    }

    getLastNumber(){
        return this.lastGenerated;
    }
}