//Use of Dynammic Programming to avoid duplicate calcultions
// Calculate the FACTORIAL through recursion
let memo={} // memo is an object
function fact(n){
    if( n in memo) return memo[n];
    if(n===1) return 1;
    memo[n] = n*fact(n-1);
    return memo[n];
}
console.log(fact(1));
console.log(fact(7)); // this stores all the 3 2 4 6 in object and multiple calls are simplified
console.log(fact(3));
console.log(fact(2));
console.log(fact(4));
console.log(fact(6));

console.log(memo);

// The speed of the algo by big-O notation is still O(n)
// also we are using a global variable