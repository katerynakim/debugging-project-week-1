'use strict';

console.log('-- loading: confirmEnding');


function confirmEnding() { }


{
  console.log('-- testing: confirmEnding ');
  debugger;

  const _1_arg_1 = 'Bastian';
  const _1_arg_2 = 'n';
  const _1_expect = true;
  const _1_actual = confirmEnding(_1_arg_1, _1_arg_2);
  console.assert(_1_actual === _1_expect, 'Test 1');

  const _2_arg_1 = 'Congratulation';
  const _2_arg_2 = 'on';
  const _2_expect = true;
  const _2_actual = confirmEnding(_2_arg_1, _2_arg_2);
  console.assert(_2_actual === _2_expect, 'Test 2');

  const _3_arg_1 = 'Connor';
  const _3_arg_2 = 'n';
  const _3_expect = false;
  const _3_actual = confirmEnding(_3_arg_1, _3_arg_2);
  console.assert(_3_actual === _3_expect, 'Test 3');

  const _4_arg_1 = 'He has to give me a new name';
  const _4_arg_2 = 'name';
  const _4_expect = true;
  const _4_actual = confirmEnding(_4_arg_1, _4_arg_2);
  console.assert(_4_actual === _4_expect, 'Test 4');

  const _5_arg_1 = 'Open sesame';
  const _5_arg_2 = 'same';
  const _5_expect = true;
  const _5_actual = confirmEnding(_5_arg_1, _5_arg_2);
  console.assert(_5_actual === _5_expect, 'Test 5');

  const _6_arg_1 = 'Open sesame';
  const _6_arg_2 = 'pen';
  const _6_expect = false;
  const _6_actual = confirmEnding(_6_arg_1, _6_arg_2);
  console.assert(_6_actual === _6_expect, 'Test 6');

  const _7_arg_1 = 'Open sesame';
  const _7_arg_2 = 'game';
  const _7_expect = false;
  const _7_actual = confirmEnding(_7_arg_1, _7_arg_2);
  console.assert(_7_actual === _7_expect, 'Test 7');

  const _8_arg_1 = 'Abstraction';
  const _8_arg_2 = 'action';
  const _8_expect = true;
  const _8_actual = confirmEnding(_8_arg_1, _8_arg_2);
  console.assert(_8_actual === _8_expect, 'Test 8');

}


function confirmEndingHandler() {
  debugger;

  // read user input

  // core logic
  const result = confirmEnding(str, ending);

  // display for use

  // log for developers
}
