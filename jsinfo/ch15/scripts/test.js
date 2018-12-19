(function IIFE() {
  /* eslint-disable no-restricted-globals */
  /* eslint-disable no-alert */
  /* eslint-disable no-console */
  const ask = function ask(question, yes, no) {
  // eslint-disable-next-line no-undef
    if (confirm(question)) return yes();
    return no();
  };
  // const showOk = function showOk() {
  //   return 'You agreed';
  // };
  // const showCancel = function showCancel() {
  //   return 'You cancelled the execution.';
  // };
  console.log(
    ask('Do you agree?',
      () => 'You agreed',
      () => 'You cancelled the execution.'),
  );
}());
