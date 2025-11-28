const nums = [3,4,-1,1];

var firstMissingPositive = function(nums) {
    let n = nums.length;

    // Step 1: Place each number in its correct index
    for (let i = 0; i < n; i++) {
        while (
            nums[i] > 0 &&
            nums[i] <= n &&
            nums[nums[i] - 1] !== nums[i]
        ) {
            // Swap nums[i] with nums[nums[i] - 1]
            let temp = nums[i];
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
    }

    // Step 2: Find the first index where index+1 != value
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }

    // If all positions are correct, answer is n+1
    return n + 1;
};

console.log(firstMissingPositive(nums))