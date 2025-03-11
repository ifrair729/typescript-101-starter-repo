// String Reverse - with for loop
/**
 * Reverse a string
 * @param str The string to reverse
 * @returns str the reversed string
 */
function reverseString(str: string): string {
    /*
    let rts: string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rts += str[i];
    }
    return rts;
    */
    // return str.split("").reverse().join("");

    const reversedChars: string[] = [];
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversedChars.push(str[i]);
    // }
    let i: number = str.length - 1;
    while (i >= 0) {
        reversedChars.push(str[i]);
        i--;
    }
    return reversedChars.join("");
}

// console.log(reverseString('Hello World'));

function isPalindrome(str: string): boolean {
    // const reversedChars: string[] = [];
    // let i: number = str.length - 1;
    // while (i >= 0) {
    //     reversedChars.push(str[i]);
    //     i--;
    // }
    // const rts = reversedChars.join("");

    // str = str.toLowerCase();
    // let rts = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     rts += str[i];
    // }
    // if (rts === str) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    // if (str.split("").reverse().join("").toLowerCase() === str.toLowerCase()) { return true; } else { return false; };
    // return str.split("").reverse().join("").toLowerCase() === str.toLowerCase() ? true: false;
    return str.toLowerCase().replace(/[^a-z0-9]/g, "") === reverseString(str).toLowerCase().replace(/[^[a-z0-9]/g, "");
}

console.log(isPalindrome("Madam I'm Adam!"));

function isAPalindrome(str: string): boolean {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "") === reverseString(str).toLowerCase().replace(/[^a-z0-9]/g, "");
}

console.log(isAPalindrome("Racecar"));