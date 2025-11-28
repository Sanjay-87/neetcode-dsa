var majorityElement = function(nums) {
    let count = new Map();
    let res = []

    for (i = 0 ; i < nums.length; i++) {
        count.set(nums[i], (count.get(nums[i]) || 0) + 1)
        if (count.has(nums[i]) && count.get(nums[i]) > (nums.length / 3) && !res.includes(nums[i])) {
            res.push(nums[i])
        }
    }

    return res;
};