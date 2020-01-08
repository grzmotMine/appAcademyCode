// Write a function, possibleChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should return thep possible combinations of coins needed
// to make the target amount. A coin value can be used multiple times.

// Examples:
//  
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function possibleChange(coins, amount,memo={}) {
    let key = amount + '-' + coins;
    if(key in memo) return memo[key];
    if(amount === 0) return 1;
    let currentCoin = coins[coins.length-1];
    let total=0;
    for(let qty = 0; currentCoin*qty<=amount;qty++){
        total+=possibleChange(coins.slice(0,-1),amount-currentCoin*qty,memo);
    }
    memo[key]=total;
    return memo[key];
    
}
console.log(possibleChange([1,2,5,10,20,50,100,200,500,2000],2050));
console.log(possibleChange([1,2,5,7,9],50));

//in this algo to find all the possible solutions to the given amount
//we start with a denomination and check different quantities for it
//for each path we remove the denomination previously selected and 
//go to the next denomination and start with the different quantities of
//next denomination until we hit the last denomination
//everytime we hit a zero amount we got one way to return the amount 