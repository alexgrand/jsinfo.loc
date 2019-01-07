/* eslint-disable no-plusplus */
/*
There’s a ladder object that allows to go up and down.
Modify the code of up and down to make the calls chainable, like this:
ladder.up().up().down().showStep(); // 1
*/
const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep();
