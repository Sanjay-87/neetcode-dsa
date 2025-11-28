const nums = [0,0,1,1,1,2,2,3,3,4];

var removeDuplicates = function (nums) {
    let l = 1;
    for (let r = 1; r < nums.length; r++) {
        if (nums[r] !== nums[r - 1]) {
            nums[l++] = nums[r]
        }
    }

    return l
}

console.log(removeDuplicates(nums))