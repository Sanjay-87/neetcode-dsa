const nums = [1,2,3,4];

var productExceptSelf = function(nums) {
    let n = nums.length;
    const answer = new Array(n);

    answer[0] = 1;
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] = answer[i] * suffix;
        suffix *= nums[i];
    }

    return answer;
}

productExceptSelf(nums);
