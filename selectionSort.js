
/*
Properties:
O(1) extra space
O(n^2) comparisons (for worst and best)
O(n) swaps
not stable
not adaptive
Use cases:
Since selection sort minimizes the number of swaps, it's useful when the cost of swapping items is high.
Comparison to other algorithms:
*/
var selectionSort = function(array){
    let comparator = defaultComparator;
    array.forEach(function(item,index){
      let minVal = item;
      let minIndex = index;
      for(i=index;i<array.length;i++){
        if(comparator(array[i],minVal)<0){
          minVal = array[i];
          minIndex = i;
        }
      }
      array = swap(array,minIndex,index);
    });
    return array;
  }
  
  var defaultComparator = function(a,b){
    if(a<b){
      return -1;
    }else if(a>b){
      return 1;
    }else{
      return 0;
    }
  }
  
  var swap = function(arr,i1,i2){
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
  }
  
  selectionSort([9,5,4,7,1,3,8,2,6])