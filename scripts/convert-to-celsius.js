'use strict';

console.log('-- loading: convertToCelsius');


function convertToCelsius() { }


{
  console.log('-- testing: convertToCelsius ');
  debugger;

  const _1_arg = -22;
  const _1_expect = -30;
  const _1_actual = convertToCelsius(_1_arg);
  console.assert(_1_actual === _1_expect, 'Test 1');

  const _2_arg = 14;
  const _2_expect = -10;
  const _2_actual = convertToC(_2_arg);
  console.assert(_2_actual === _2_expect, 'Test 2');

  const _3_arg = 32;
  const _3_expect = 0;
  const _3_actual = convertToCelsius(_3_arg);
  console.assert(_3_actual === _3_expect, 'Test 3');

  const _4_arg = 68;
  const _4_expect = 20;
  const _4_actual = convertToCelsius(_4_arg);
  console.assert(_4_actual === _4_expect, 'Test 4');

  const _5_arg = 86;
  const _5_expect = 30;
  const _5_actual = convertToCelsius(_5_arg);
  console.assert(_5_actual === _5_expect, 'Test 5');

  const _6_arg = -40;
  const _6_expect = -40;
  const _6_actual = convertToCelsius(_6_arg);
  console.assert(_6_actual === _6_expect, 'Test 6');
}


function convertToCelsiusHandler() {
  debugger;

  // read user input

  // core logic
  const result = convertToCelsius(f);

  // display for use

  // log for developers
}
