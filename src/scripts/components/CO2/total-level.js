'use strict'

import {create} from '../../utils/trix-utils';

export default class TotalLevel{
    constructor(container){
        this.container = container;
        this.init();
    }
    init(){
        this.wrapper = create('div', this.container, 'total-level');
    }
    update(level){
        this.wrapper.innerHTML = `Samlet CO2: ${level} ton om året`;
    }
}