function solution(number){
  if (number < 0) return 0;

  const numbers = Array.from(Array(number).keys())

  let result = 0;
  
  numbers.forEach((n) => {
    if (n % 3 === 0 || n % 5 === 0) result += n;
  });

  return result;
}