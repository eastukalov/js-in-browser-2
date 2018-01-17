'use strict';

const wrapper = document.getElementsByClassName('wrapper-dropdown')[0];

wrapper.onclick = function () {

  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    this.classList.add('active')
  }

};