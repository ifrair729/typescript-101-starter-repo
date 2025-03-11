function primeNumbers(n: number):string[] {
    let numberArr: string[] = [];
    let i: number = 1;

    // 1. Handle small numbers and majority of numbers divisible by 2 and 3
    while (i <= n) {
        if (i < 2) numberArr.push(i.toString());
        else if (i === 2 || i === 3) numberArr.push("prime");
        else if (i % 2 === 0 || i % 3 === 0) numberArr.push(i.toString());
        else {
            const limit = Math.floor(Math.sqrt(i));
            // we can set IsPrime to true and only change it to false if the 6k+-1 condition is mod ===
            let isPrime: boolean = true;
            // 2. Check potential divisors from 5 up to sqrt(i)
            for (let j = 5; j <= limit; j += 6) {
                // Check i and i+2
                if (i % j === 0 || i % (j + 2) === 0) {
                    // the first pass of this loop should start when i = 25
                    // therefore 25 % 5 === 0 so 25 is NOT prime

                    isPrime = false;
                    // we can break the for loop is we confirmed a non-prime and continue the while loop
                    break;
                }
            }
            if (isPrime) {
                numberArr.push("prime");
            } else {
                // push the numbers that have at least a third factor by the 6k +- 1 test
                numberArr.push(i.toString());
            }
        }
        i++;
    }

    return numberArr;
}
console.log(primeNumbers(100));