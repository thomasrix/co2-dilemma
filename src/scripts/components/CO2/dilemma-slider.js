'use strict'
import {create, select, setAttributes} from '../../utils/trix-utils';

export default class DilemmaSlider{
    constructor(config){
        this.config = config;

        this.init();
    }
    init(){
        console.log('init dilemma slider');
        this.label = create('label', this.config.container, 'input-label');

        this.slider = create('input', this.config.container, 'input-range');
        setAttributes(this.slider, {
            type: 'range',
            min:this.config.min,
            max:this.config.max,
            value:this.config.start

        })
        this.slider.addEventListener('input', ()=>{
            console.log('slider change');
            this.label.innerHTML = this.draw();
        });

    }
    draw(){

    }
}