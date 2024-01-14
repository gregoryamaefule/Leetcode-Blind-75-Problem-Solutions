/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let r_product = new Array(nums.length).fill(1)
    let l_product = []
    answer = []

    let l_accumulator = 1
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            l_product.push(1)
            continue
        }
        l_product.push(l_accumulator * nums[i - 1])
        l_accumulator = l_accumulator * nums[i - 1]
    }
    let r_accumulator = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i == nums.length - 1) {
            r_product[i] = 1
            continue
        }
        r_product[i] = r_accumulator * nums[i + 1]
        r_accumulator = r_accumulator * nums[i + 1]
    }

    for (let i = 0; i < nums.length; i++) {
        answer.push(l_product[i] * r_product[i])
    }

    return answer

};

// right_product = [24, 12, 4, 1]
// left_product = [1,1,2,6]
// answer = [24,12,8,6]