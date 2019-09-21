
/*
Properties:
O(1) extra space
Time complexity:
- worst: O(n^2) comparisons and swaps
- best: O(n) when nearly sorted
stable
adaptive - O(n) time when nearly sorted
Use cases:
When the data is nearly sorted (since it's adaptive) or when the problem size is small (because it has low memory overhead)
*/

let insertionSort = function(array){
    let comparator = defaultComparator;
    for(index=1;index<array.length;index++){
      let val = array[index];
      let compareIndex = index - 1;
      while(compareIndex>-1 && comparator(array[compareIndex],val)>0){
        array = swap(array,compareIndex,index);
        index = compareIndex;
        compareIndex--;
      }
    }
    return array;
  }
  
  let defaultComparator = function(a,b){
    if(a<b){
      return -1;
    }else if(a>b){
      return 1;
    }else{
      return 0;
    }
  }
  let swap = function(arr,i1,i2){
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
  }
  
  console.log(insertionSort([9,5,4,7]));
  