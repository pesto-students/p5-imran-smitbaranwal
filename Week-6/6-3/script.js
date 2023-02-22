// ? Sort Array using two pointer  approach
function sortArray012s(arr) {
  let lo = 0;
  let hi = arr.length - 1;
  let mid = 0;

  console.log("Unsorted array : ", arr);
  console.log("Our Pointers");
  console.log("lo " + "mid " + "hi");
  console.log(lo, " ", mid, " ", hi);
  // console.log(arr[lo], arr[mid], arr[hi]);

  while (mid <= hi) {
    // If the element is 0
    if (arr[mid] === 0) {
      [arr[lo], arr[mid]] = [arr[mid], arr[lo]];
      lo++, mid++;
      console.log(lo, " ", mid, " ", hi);
    }
    // If the element is 1
    else if (arr[mid] === 1) {
      mid++;
      console.log(lo, " ", mid, " ", hi);
    }
    // If the element is 2
    // if (arr[mid] === 2) {
    else {
      [arr[mid], arr[hi]] = [arr[hi], arr[mid]];
      hi--;
      console.log(lo, " ", mid, " ", hi);
    }
  }
  return arr;
}

const array = [2, 1, 0, 1, 0, 2, 0];
console.log("Sorted array : ", sortArray012s(array));

// ? Time complexity is O(n)
// ? Space complexity is O(1)
