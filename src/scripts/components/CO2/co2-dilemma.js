'use strict'

import BeefSlider from './beef-slider';
import PlaneSlider from './plane-slider';
import TotalLevel from './total-level';

export default class CO2Dilemma{
    constructor(container){
        this.container = container;
        this.init();
        this.updateLevel();
    }
    init(){
        const beef = new BeefSlider({
            min:0,
            max:7,
            level:7,
            step:1,
            co2amount:2,
            label:'Køddage om ugen',
            container:this.container
        }, this.updateLevel.bind(this));
        
        const plane = new PlaneSlider({
            min:0,
            max:50,
            level:5,
            step:1,
            co2amount:20,
            label: 'Hvor mange flyver du om året',
            container:this.container
        }, this.updateLevel.bind(this))
        this.sliders = [beef, plane];

        this.totalLevelDisplay = new TotalLevel(this.container);
    }
    updateLevel(){
        this.totalLevel = 0;
        this.sliders.forEach(element=>{
            this.totalLevel += (element.config.level * element.config.co2amount);
        })
        this.totalLevelDisplay.update(this.totalLevel);
        console.log('Samlet CO2: ',this.totalLevel);
    }
}