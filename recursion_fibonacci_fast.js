// TO return the nth fibonacci number
//
function fastfib(n,memo = {}) {
    if(n in memo) return memo[n];
    if( n===1 || n===2) return 1;
    memo[n] = fastfib(n-1,memo)+fastfib(n-2,memo);
    return memo[n];
}
console.log(fastfib(6));
console.log(fastfib(20));
console.log(fastfib(50));

// With the use of memoization technique we have brought
// the complextity of the program to O(n)