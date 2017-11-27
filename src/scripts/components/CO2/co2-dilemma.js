'use strict'

import BeefSlider from './beef-slider';

export default class CO2Dilemma{
    constructor(container){
        this.container = container;
        this.init()
    }
    init(){
        const beef = new BeefSlider({
            min:0,
            max:7,
            start:7,
            step:1,
            label:'Køddage om ugen',
            container:this.container
        });
    
    }
}