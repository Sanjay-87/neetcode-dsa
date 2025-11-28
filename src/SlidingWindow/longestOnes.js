const nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2

var longestOnes = function(nums, k) {
    let left = 0;
    let flip = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            flip++
        }

        while (flip > k) {
            if (nums[left] === 0) flip--
            left++
        }

        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
};