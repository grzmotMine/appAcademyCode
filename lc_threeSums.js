function threeSum(nums){
    let memo={};
    var fin=[];
    for(let i =0;i<nums.length;i++){
        let curry=-nums[i];
        memo[nums[i]]=twoSum(nums,curry);
    }
    for(let i = 0; memo[nums[i]]!=undefined;i++){
        fin.push([nums[i],memo[nums[i]][0],memo[nums[i]][1]]);
    }
    //to sort fin to remove the duplicates 
    return fin;
}
function twoSum(nums, target){

    for(let i=0;i<nums.length;i++){
        let complement = target - nums[i];
        for(let j = 0;j!=i && j < nums.length;j++){
            if(nums[j] == complement){
                return [nums[i],nums[j]];    
            }    
        }
    }
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));