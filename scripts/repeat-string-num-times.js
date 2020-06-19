'use strict';

console.log('-- loading: repeatStringNumTimes');


function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return ''
  }
  let repeatedString = ''
  for (let i = 0; i < num; i++) {
    repeatedString += str
  }
  return repeatedString
}

{
  console.log('-- testing: repeatStringNumTimes ');
  debugger;

  const _1_arg_1 = '*';
  const _1_arg_2 = 3;
  const _1_expect = '***';
  const _1_actual = repeatStringNumTimes(_1_arg_1, _1_arg_2);
  console.assert(_1_actual === _1_expect, 'Test 1');

  const _2_arg_1 = 'abc';
  const _2_arg_2 = 3;
  const _2_expect = 'abcabcabc';
  const _2_actual = repeatStringNumTimes(_2_arg_1, _2_arg_2);
  console.assert(_2_actual === _2_expect, 'Test 2');

  const _3_arg_1 = 'abc';
  const _3_arg_2 = 4;
  const _3_expect = 'abcabcabcabc';
  const _3_actual = repeatStringNumTimes(_3_arg_1, _3_arg_2);
  console.assert(_3_actual === _3_expect, 'Test 3');

  const _4_arg_1 = 'abc';
  const _4_arg_2 = 1;
  const _4_expect = 'abc';
  const _4_actual = repeatStringNumTimes(_4_arg_1, _4_arg_2);
  console.assert(_4_actual === _4_expect, 'Test 4');

  const _5_arg_1 = '*';
  const _5_arg_2 = 8;
  const _5_expect = '********';
  const _5_actual = repeatStringNumTimes(_5_arg_1, _5_arg_2);
  console.assert(_5_actual === _5_expect, 'Test 5');

  const _6_arg_1 = 'abc';
  const _6_arg_2 = -2;
  const _6_expect = '';
  const _6_actual = repeatStringNumTimes(_6_arg_1, _6_arg_2);
  console.assert(_6_actual === _6_expect, 'Test 6');

  const _7_arg_1 = 'abc';
  const _7_arg_2 = 0;
  const _7_expect = '';
  const _7_actual = repeatStringNumTimes(_7_arg_1, _7_arg_2);
  console.assert(_7_actual === _7_expect, 'Test 7');
}


function repeatStringNumTimesHandler() {
  debugger;

  // read user input
  const input1 = prompt('Put random text to repeat');
  const str = String(input1);
  const input2 = prompt (`Please enter number to repeat ` );
  const num = Number(input2);


  // core logic
  const result = repeatStringNumTimes(str, num);

  // display for use
  alert(result);

  // log for developers
  console.log(result);
}

