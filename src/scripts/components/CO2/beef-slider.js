'use strict'

import DilemmaSlider from './dilemma-slider';

export default class BeefSlider extends DilemmaSlider{
    constructor(config, update){
        super(config, update);

    }
    init(){
        super.init();
        console.log('init beef slider:', this.config.label)
        this.label.innerHTML = this.draw();
    }
    draw(){
        return `Antal køddage om ugen = ${this.slider.value}`
    }
}