const nums = [1,2,3,1];

function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[1];

    let dp = [nums[0], Math.max(nums[0], nums[1])];

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    };

    return dp[nums.length - 1]
}

const result = rob(nums);
console.log("result:", result)