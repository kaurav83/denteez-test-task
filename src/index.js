import _ from 'lodash';

import $ from 'jquery';
import  './scss/main.scss';

const component = () => {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello world to fixed   RUFUS end editions', 'webpack'], ' ');
    return element;
  }

document.getElementById('app')
    .appendChild(component());


    