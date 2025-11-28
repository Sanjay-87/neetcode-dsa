// const nums = [1,3,5,6], target = 5;
const nums = [1,3,5,6], target = 2

var searchInsert = function(nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = r - 1;
        }
    }

    return l;
}

console.log(searchInsert(nums, target))