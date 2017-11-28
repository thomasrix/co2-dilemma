'use strict'
import {create, select, setAttributes} from '../../utils/trix-utils';

export default class DilemmaSlider{
    constructor(config, update){
        this.config = config;
        this.updateLevel = update;
        
        this.init();
    }
    init(){
        console.log('init dilemma slider', this.updateLevel);
        let wrapper = create('div', this.config.container, 'slider-wrapper');
        this.label = create('label', wrapper, 'input-label');

        this.slider = create('input', wrapper, 'input-range');
        setAttributes(this.slider, {
            type: 'range',
            min:this.config.min,
            max:this.config.max,
            value:this.config.level

        })
        this.slider.addEventListener('input', ()=>{
            console.log('slider change');
            this.label.innerHTML = this.draw();
            this.config.level = this.slider.value;
            this.updateLevel();
        });

    }
    draw(){

    }
}