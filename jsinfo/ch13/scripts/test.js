/* eslint-disable no-console */
const txt = 'maybe';
const showMessage = function showMessage(from, text) {
  return `${from} says: ${text}` || 'no text given';
};

console.log(showMessage('Ann', txt));
