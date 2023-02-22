function pairWithDifference(array, difference) {
  console.log("Difference: " + difference);
  let arrSet = new Set(array);
  // console.log(arrSet.has(2 + difference));
  for (let i = 0; i < array.length; i++) {
    if (arrSet.has(array[i] + difference)) return true;
  }
  return false;
}

const A = [5, 10, 3, 2, 50, 80];
const B = 78;
console.log("Pair with difference : ", pairWithDifference(A, B));

// ? Time complexity is O(n)
// ? Space complexity is O(n)

// ? Brute force solution
// function pairWithDifference(array, difference) {
//   let n = array.length;
//   console.log("Difference: " + difference);
//   for (let i = 0; i < n; i++) {
//     // console.log(array[i]);

//     let a = array[i];

//     for (let j = 0; j < n; j++) {
//       let b = array[j];
//       if (a - b === difference) {
//         // return a, b;
//         return [a, b, true];
//       }
//       // console.log("No such pair exist");
//     }
//   }
// }

// ? Time complexity is O(n^2)
