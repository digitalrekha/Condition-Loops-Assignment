// Q4. Generate numbers between any 2 given numbers.
// Ex
//  const num1 = 10
//  const num2 = 25;
// Output: 11, 12, 13, ...., 25

const num1 = 10;
const num2 = 25;

for (let num1 = 10; num1 <= 25; num1++) {

    if (num1 == 10) {
        continue;
    }
    console.log(num1);
}

/* The output is 11, 12, 13, ......24, 25 */