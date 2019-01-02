const user = {
  name: 'John',
  age: 30,
  sizes: {
    height: 182,
    width: 50,
  },
};
const gender = 'Male';
/* копирование объекта в соответствии с AirBnB style guide
для поверхностного копирования объектов при помощи оператора spread (...).
в случае если в клонируемом объекте присутствует другой объект,
тогда будет скопирована ссылка на него в объект клон. что ведет
к непредвиденным мутациям кода (пример sizes)
для более детального понимания https://habr.com/company/ruvds/blog/346998/
*/
const clone = { ...user, gender };
clone.name = 'Alex';
user.sizes.height = 185; // changes in both objects
console.log(user);
console.log(clone);
