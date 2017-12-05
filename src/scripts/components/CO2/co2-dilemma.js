'use strict'

import BeefSlider from './beef-slider';
import PlaneSlider from './plane-slider';
import CarSlider from './car-slider';
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
            co2amount:260,
            label:'Køddage om ugen:',
            container:this.container
        }, this.updateLevel.bind(this));

        
        const car = new CarSlider({
            min:0,
            max:20,
            level:5,
            step:1,
            co2amount:69.35,
            label: 'Hvor kilometer i bil om dagen',
            container:this.container
        }, this.updateLevel.bind(this));

        this.sliders = [beef, car];

        this.totalLevelDisplay = new TotalLevel(this.container);
    }
    updateLevel(){
        this.totalLevel = 0;
        this.sliders.forEach(element=>{
            this.totalLevel += (element.config.level * element.config.co2amount);
        })
        this.totalLevelDisplay.update(this.totalLevel.toFixed(0));
        console.log('Samlet CO2: ',this.totalLevel);
    }
}