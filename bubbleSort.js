/*
Properties:
O(1) extra space
Time complexity:
- worst: O(n2) comparisons and swaps
- best: O(n) when nearly sorted
not stable
adaptive - O(n) time when nearly sorted
Use cases:
Similar to insertion sort (many properties are the same for insertion and bubble sort) - when the data is nearly sorted (since it's adaptive) or when the problem size is small (because it has low memory overhead)
*/
var bubbleSort = function(array){
    let arrLen = array.length - 1;
    while(arrLen > 0){
      for(let i=0;i<arrLen;i++){
        if(array[i]>array[i+1]){
          array = swap(array,i,i+1);
        }
      }
      arrLen--;
    }
    return array;
  }
  
  function swap(arr,i1,i2){
    arr[i1] = arr[i1] ^ arr[i2];
    arr[i2] = arr[i1] ^ arr[i2];
    arr[i1] = arr[i1] ^ arr[i2];
    return arr;
  }
  console.log(bubbleSort([5,3,4,2,6,1,8,7]));