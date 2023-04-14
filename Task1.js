function sumEvenNumbers(number) {
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
      if (number[i] % 2 === 0) {
        sum += number[i];
      }
    }

    return sum;
  }

  const numbers = [1,2,4,6,8,9,10];
  const sumOfEvens = sumEvenNumbers(numbers);
  console.log("sumOfEvens"); 