// Have the function ArrayMatching(strArr) read the array of strings stored
// in strArr which will contain only two elements, both of which will represent
// an array of positive integers. For example: if strArr
// is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input
// represent two integer arrays, and your goal for this challenge is to
// add the elements in corresponding locations from both arrays. For the
// example input, your program should do the following additions:
// [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17].
// Your program should finally return this resulting array in a string format
// with each element separated by a hyphen: 6-4-13-17.
//
// If the two arrays do not have the same amount of elements, then simply
// append the remaining elements onto the new array (example shown below). B
// oth arrays will be in the format: [e1, e2, e3, ...] where at least one element
// will exist in each array.

function ArrayMatchingChallenge(strArr) {
  // * Change the stringed arrays to array first
  strArr.forEach((element, index) => {
    let stringToArray = element.replace(/'/g, '"');
    strArr[index] = JSON.parse(stringToArray);
  });

  // * Find the longest array first in the strArr
  let indexWithLongestArray = 0;
  strArr.forEach((element, index) => {
    if (indexWithLongestArray < element.length) {
      indexWithLongestArray = index;
    }
  });

  // * Now loop through the longest array and add the elements from the first array
  let result = [];
  strArr[indexWithLongestArray].forEach((element, index) => {
    // * Kung yung index ay out of bounds na i-add na lang yung remaining elements...
    let num1 = isNaN(strArr[0][index]) ? 0 : strArr[0][index];
    result.push(num1 + element);
  });

  return result.join("-");
}

// ! Do not change code below this line
function run_test() {
  let test_case_1 = ArrayMatchingChallenge(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]);
  console.log(
    "Test Case 1: ",
    test_case_1 === "6-4-13-17" ? "Correct" : "Incorrect "
  );
  let test_case_2 = ArrayMatchingChallenge(["[10, 1, 41]", "[2, 1, 0, 18]"]);
  console.log(
    "Test Case 2: ",
    test_case_2 === "12-2-41-18" ? "Correct" : "Incorrect"
  );
}

run_test();
