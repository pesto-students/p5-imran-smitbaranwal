// given array S = {-1 2 1 -4}, and target = 1.
//  The sum that is closest to thetarget is 2.(-1 + 2 + 1 = 2)

function findTriplet(arr, target) {
  console.log("Array is : " + arr);
  console.log("Target Sum is : " + target);
  // To store the closest sum
  let closeSum = 99999;

  // sort array (a,b)=>a-b
  arr = arr.sort((a, b) => a - b);

  // ? Solution using two Pointers approach
  // loop through array
  for (var i = 0; i < arr.length; i++) {
    // Two pointers
    // First pointer on second element
    let k = i + 1;
    // Second pointer will be on n-1
    let l = arr.length - 1;

    // while pionter 1 < pointer 2
    while (k < l) {
      //  Calculate the current sum
      let curSum = arr[i] + arr[k] + arr[l];

      // If the some is more closer than cursum
      if (Math.abs(target - curSum) < Math.abs(target - closeSum)) {
        closeSum = curSum;
      }

      // If the curSum is greater than the target then decrement
      //  the second pointer(l) to get a smaller sum
      if (curSum > target) {
        l--;
      }

      // If the curSum is less than the target then increment
      //  the first pointer(k) to get a larger sum
      else {
        k++;
      }
    }
  }
  console.log("Closest sum is ");
  // Return the closest sum found
  return closeSum;
}

const S = [-1, 2, 1, -4];
const target = 1;

console.log(findTriplet(S, target));

// ? Time complexity is O(n^2)
// ? Space complexity is O(1)

// ? Brute force soluton
// function findTriplet(arr, target) {
//   // To store the closest sum
//   let closeSum = 99999;

//   // ? Run three nested loops
//   // ? For 1st element

//   for (let i = 0; i < arr.length; i++) {
//     // ? For 2nd element
//     for (let j = i + 1; j < arr.length; j++) {
//       // ? For 3rd element
//       for (let k = j + 1; k < arr.length; k++) {
//         // Update closeSum
//         if (
//           Math.abs(target - closeSum) >
//           Math.abs(target - (arr[i] + arr[j] + arr[k]))
//         )
//           closeSum = arr[i] + arr[j] + arr[k];
//       }
//     }
//   }
//   return closeSum;
// }
// // Time Comlexity is O(n^3)
