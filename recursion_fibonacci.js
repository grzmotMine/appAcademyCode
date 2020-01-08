// TO return the nth fibonacci number

function fib(n) {
    if( n===1 || n===2) return 1;
    return fib(n-1)+fib(n-2);
}
console.log(fib(5));
console.log(fib(20));
console.log(fib(50));
// We look at this in the form of a tree
//every node represents a recursive call
//the time complexity of this algo is 2^n: quite slow
//as every branch roughly branches into two other
//taking a close look at the tree we see a patter of repetetive tasks
// for growing 'n' the duplicate trees grow exponentially