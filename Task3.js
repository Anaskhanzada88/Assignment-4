function LongestLength(arr) {
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > maxLength) {
        maxLength = arr[i].length;
      }
    }
    return maxLength;
  }
  const arr = ["apple", "banana", "orange", "Anas Khan",];
  const longestLength = LongestLength(arr);
  console.log(longestLength); 
  
