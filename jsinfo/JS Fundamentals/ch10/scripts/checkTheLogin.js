/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable no-console */
const login = prompt('Who\'s there?', '');
if (login === 'Admin') {
  const password = prompt('Password?', '');
  if (password === 'TheMaster') {
    console.log('Welcome!');
  } else if (password === null) {
    console.log('Canceled.');
  } else {
    console.log('Wrong password');
  }
} else if (login === null) {
  console.log('Canceled.');
} else {
  console.log('I don\'t know you');
}
