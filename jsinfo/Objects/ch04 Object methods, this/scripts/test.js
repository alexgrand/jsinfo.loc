/* eslint-disable no-console */

// An intricate method call can lose this, for instance:
const user = {
  name: 'John',
  hi() { console.log(this.name); },
  bye() {
    console.log('Bye');
  },
};

user.hi(); // John (the simple call works)

// now let's call user.hi or user.bye depending on the name
(user.name === 'John' ? user.hi : user.bye)(); // Error!

// split getting and calling the method in two lines
const { hi } = user;
hi(); // Error, because 'this' is undefined
hi.call(user); // this works fine here cause it has user obj

const user1 = {
  firstName: 'Ilya',
  sayHi() {
    const arrow = () => console.log(this.firstName);
    arrow();
  },
};

user1.sayHi(); // Ilya
