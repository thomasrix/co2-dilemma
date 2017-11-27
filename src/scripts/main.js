require('../styles/styles.scss');


// import Example from './components/example/example-component';
import CO2Dilemma from './components/CO2/co2-dilemma';
import {select} from './utils/trix-utils';




function init() {

    const container = select('#dilemma-game');
    const game = new CO2Dilemma(container);
 

}
document.addEventListener('DOMContentLoaded', () => {
    init(); // Udkommenteres til launch i webdok, da vi ikke får event dér
});

