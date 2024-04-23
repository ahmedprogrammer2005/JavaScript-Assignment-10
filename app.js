var numbers = [3, 5, 22, 41, 54, 15, 7, 9, 10];
console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
        numbers[i] = "ThreeFive";
    } else if (numbers[i] % 3 === 0) {
        numbers[i] = "Three";
    } else if (numbers[i] % 5 === 0) {
        numbers[i] = "Five";
    }
}
console.log(numbers);
