function twoSum(nums, target){
    /*
    for(let i = 0;i < nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j];
            }
        }        
    }
    return 0;
    // BRUTE FORCE APPROACH
    */
    // AS ITS GIVEN A UNIQUE SOLUTION NECESSARILY EXISTS, WE FIND THE COMPLEMENT
    for(let i=0;i<nums.length;i++){
        let complement = target - nums[i];
        for(let j = 0;j!=i && j < nums.length;j++){
            if(nums[j] == complement){
                return [i,j];    
            }    
        }
    }
}
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([0,4,3,0],0));
console.log(twoSum([-1,-2,-3,-4,-5],-8));
console.log(twoSum([-3,4,3,90],0));