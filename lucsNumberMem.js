// Write a function, lucasNumberMemo(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578
function lucasNumberMemo(n, memo = {}) {
    if( n in memo ) return memo[n]; // Fetching
    if( n===0 ) return 2; // 0th lucas number
    if ( n===1 ) return 1; // 1st lucas number
    memo[n]=lucasNumberMemo(n-1,memo)+lucasNumberMemo(n-2,memo);
    return memo[n];
}
console.log(lucasNumberMemo(0));
console.log(lucasNumberMemo(1));
console.log(lucasNumberMemo(2));
console.log(lucasNumberMemo(40));
console.log(lucasNumberMemo(41));
console.log(lucasNumberMemo(42));