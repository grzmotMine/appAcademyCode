function tabulatedFib(n){
    let table = new Array(n);
    //seeding values
    table[0]=0;
    table[1]=1;
    for(let i = 2;i<=n; i++){
        table[i]=table[i-1]+table[i-2];
    }
    return table[n];
}
console.log(tabulatedFib(50));