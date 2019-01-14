/* eslint-disable no-console */
/*
Template Literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals
 */
const person = 'John';
const age = 28;

const myTag = function makeTagTemplate(strings, personExp, ageExp) {
  const str0 = strings[0];
  const str1 = strings[1];

  const ageStr = ageExp > 99 ? 'centenarian' : 'youngster';

  return `${str0}${personExp}${str1}${ageStr}`;
};

console.log(myTag`That ${person} is a ${age}`);
/*
Tag functions don't need to return a string, as shown in the following example.
*/
console.log('** Tag functions don\'t need to return a string, as shown in the following example. **');

const template = function makeTemplate(strings, ...keys) {
  return (function templ(...values) {
    const dict = values[values.length - 1] || {};
    const result = [strings[0]];

    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
};

const t1Closure = template`${0}${1}${0}!`;
console.log(t1Closure('Y', 'A'));
const t2Closure = template`${0} ${'foo'}!`;
console.log(t2Closure('Hello', { foo: 'World' }));

/*
Raw strings
*/
const tag = function tag(strings) {
  return strings.raw[0];
};

console.log(tag`string text line 1\n string text line 2`);
console.log(String.raw`Hi\n${2 + 3}`);
