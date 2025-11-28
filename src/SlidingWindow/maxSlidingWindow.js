const nums = [1,3,-1,-3,5,3,6,7], k = 3

var maxSlidingWindow = function(nums, k) {
    let l = 0;
    let max = [Math.max(...nums.slice(0 , k))]

    for (let r = k; r < nums.length; r++) {
        l++;
        max.push(Math.max(...nums.slice(l , r+1)))
    }

    return max
};

maxSlidingWindow(nums, k)


function maxSlidingWindow(nums, k) {
  const res = [];

  for (let i = 0; i <= nums.length - k; i++) {
    let max = -Infinity;

    // Scan the window [i, i+k-1]
    for (let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j]);
    }

    res.push(max);
  }

  return res;
}