function ProductOfNumbers(arr) {
    return arr.reduce((acc, cur) => acc * cur, 1);
  }
  const myArr = [2,3,4,5,6,8];
  const product = ProductOfNumbers(myArr);
  console.log(product);