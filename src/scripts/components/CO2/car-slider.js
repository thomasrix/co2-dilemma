'use strict'

import DilemmaSlider from './dilemma-slider';

export default class CarSlider extends DilemmaSlider{
    constructor(config, update){
        super(config, update);

    }
    init(){
        super.init();
        console.log('init car slider:', this.config.label)
        this.label.innerHTML = this.draw();
    }
    draw(){
        return `Kilometer i bil om dagen = ${this.slider.value}`
    }
}