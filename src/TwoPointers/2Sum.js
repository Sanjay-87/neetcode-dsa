const nums = [2,7,11,15], target = 9;

var twoSum = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let sum = nums[l] + nums[r];

        if (sum == target) {
            return [l + 1, r + 1];
        } else if (sum < target) {
            l++;
        } else {
            r--;
        }
    }

    return [];
}

console.log(twoSum(nums, target))