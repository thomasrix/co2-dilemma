'use strict'

import DilemmaSlider from './dilemma-slider';

export default class PlaneSlider extends DilemmaSlider{
    constructor(config, update){
        super(config, update);

    }
    init(){
        super.init();
        console.log('init plane slider:', this.config.label)
        this.label.innerHTML = this.draw();
    }
    draw(){
        return `Antal flyveture om året = ${this.slider.value}`
    }
}