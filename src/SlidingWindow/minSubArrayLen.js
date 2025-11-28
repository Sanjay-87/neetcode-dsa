const target = 7, nums = [2,3,1,2,4,3];

var minSubArrayLen = function (target, nums) {  
    let minLen = Infinity;
    let l = 0; sum = 0;

    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];

        while (sum >= target) {
            minLen = Math.min(minLen, r - l + 1)
            sum -= nums[l];
            l++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}