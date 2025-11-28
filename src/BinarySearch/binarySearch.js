// const nums = [-1,0,3,5,9,12], target = 9;
const nums = [-1,0,3,5,9,12], target = 2

var search = function(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            l++
        } else {
            r--;
        }
    }

    return -1;
}

console.log(search(nums, target))