// TO return the nth fibonacci number
let memo = {}
function fastfib(n) {
    if(n in memo) {
        console.log('Fetching memo for ',n);
        return memo[n];
    }

    if( n===1 || n===2) return 1;

    memo[n] = fastfib(n-1)+fastfib(n-2);
    console.log('Storing data for ',n);
    return memo[n];
}

console.log(fastfib(10));
console.log(fastfib(14));
console.log(fastfib(15));
// With the use of memoization technique we have brought
// the complextity of the program to O(n)