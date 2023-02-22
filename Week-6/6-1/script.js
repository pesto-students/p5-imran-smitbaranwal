// Find the contiguous subarray within an array,
// A of length N which has the large sum

//? Solution using Kaden's algorithm

function maxSumSubarray(array) {
  console.log("Array ", array);
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  console.log("Maximum sum of contigous subarray is :", maxSum);
}

arr1 = [-5, 4, 6, -3, 4, -1];
arr2 = [1, 2, 3, 4, -10];
arr3 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSumArray1 = maxSumSubarray(arr1);
const maxSumArray2 = maxSumSubarray(arr2);
const maxSumArray3 = maxSumSubarray(arr3);

// ? need discussion Time complexity is O(n)
// ? need discussion Space complexity is O(1)
