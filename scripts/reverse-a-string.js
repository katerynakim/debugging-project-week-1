'use strict';

console.log('-- loading: reverseString');


function reverseString() { }


{
  console.log('-- testing: reverseString ');
  debugger;

  const _1_arg = 'hello';
  const _1_expect = 'olleh';
  const _1_actual = reverseString(_1_arg);
  console.assert(_1_actual === _1_expect, 'Test 1');

  const _2_arg = 'Greetings from Earth';
  const _2_expect = 'htraE morf sgniteerG';
  const _2_actual = reverseString(_2_arg);
  console.assert(_2_actual === _2_expect, 'Test 2');

  const _3_arg = '{=+=0=+=}';
  const _3_expect = '}=+=0=+={';
  const _3_actual = reverseString(_3_arg);
  console.assert(_3_actual === _3_expect, 'Test 3');

  const _4_arg = '';
  const _4_expect = '';
  const _4_actual = reverseString(_4_arg);
  console.assert(_4_actual === _4_expect, 'Test 4');

  const _5_arg = 'do geese see god';
  const _5_expect = 'dog ees eseeg od';
  const _5_actual = reverseString(_5_arg);
  console.assert(_5_actual === _5_expect, 'Test 5');

  const _6_arg = 'dogeeseseegod';
  const _6_expect = 'dogeeseseegod';
  const _6_actual = reverseString(_6_arg);
  console.assert(_6_actual === _6_expect, 'Test 6');
}


function reverseStringHandler() {
  debugger;

  // read user input

  // core logic
  const result = reverseString(str);

  // display for use

  // log for developers
}

