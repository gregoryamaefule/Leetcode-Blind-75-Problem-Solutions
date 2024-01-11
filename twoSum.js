/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let gd = []
    for (let i of nums) {
        gd.push(target - i)
    }

    for (let i=0; i < gd.length; i++){
        if (nums.includes(gd[i])){
            let x = i
            let y = nums.indexOf(gd[i])
            if (x==y){
                continue
            }
            return [x,y]
        }

    }

    
    // for (let j of gd){
    //     if (nums.includes(j)){
    //         let x = gd.indexOf(j)
    //         let y = nums.indexOf(j)
    //         if (x==y){
    //             continue
    //         }
    //         return [x,y]
    //     }
    // }


    
};