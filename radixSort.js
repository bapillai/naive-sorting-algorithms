//No comparison is done here
//Only works with integers
//No. of times we group the numbers into buckets depends on the number of integers in each number.
//We use base 10 hence we have 10 buckets,we can also have base 7 which means 7 buckets
//Assuming the number is of base10
//Time Complexity =>O(nk) where is n is array length and k is the length of items/numbers in an element of the array.
//Space Complexity => O(n+k)

function getDigit(num,place){
    return Math.floor((Math.abs(num)/Math.pow(10,place) % 10));
  }
  
  function digitCount(num){
    //log10->10 to what power will you a particular number
    //abs->To convert a -ve number to +ve or +ve to remain +ve
    if(num ===0 ){
      return 1;
    } else {
      return Math.floor(Math.log10(Math.abs(num))) + 1;
    }
  }
  
  function maxDigits(numList){
    let maxDigits = 0;
    for(let i=0;i<numList.length;i++){
      maxDigits = Math.max(maxDigits,digitCount(numList[i]));
    }
    return maxDigits;
  }
  
  function radixSort(numbers){
    let maxDigitCount = maxDigits(numbers);
    for(let k=0;k<maxDigitCount;k++){
      let digitBucket = Array.from({length: 10},() => []);
      for(let i=0;i<numbers.length;i++){
        let digit = getDigit(numbers[i],k);
        digitBucket[digit].push(numbers[i]);
      }
      numbers = [].concat(...digitBucket);
    }
    return numbers;
  }
  
  radixSort([23,5432,6,12,8973,98542,6666,999]);