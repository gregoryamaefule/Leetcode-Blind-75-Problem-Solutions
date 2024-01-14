/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let nums_set = new Set()

    for (let i of nums) {
        nums_set.add(i)
    }

    return nums_set.size != nums.length


};