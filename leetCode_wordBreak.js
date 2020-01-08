function wordBreak(s, wordDict){
    let table = new Array(s.length+1).fill(false);
    //we need to break up the string in such a fashion such that the word 
    //in order of certain lenths are found in the dictionary
    table[0]=true;
    for(let i=0;i<table.length;i++){
        if(table[i] === false) continue;
        for(let j=i+1;j<table.length;j++){
            let word = s.slice(i,j);
            if(wordDict.includes(word)){
                table[j]=true;
            }
        }
    }
    return table[table.length-1];
}
console.log(wordBreak('leetcode',['leet','coder']));

//for problems of tabulation we first see if there are going to iterations
//then we base the table roughly on the size of the input
//then think of the initial value of seed into the table