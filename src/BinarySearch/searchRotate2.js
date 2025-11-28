const nums = [2,5,6,0,0,1,2], target = 0

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        if (nums[mid] === target) {
            return true
        } else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = left + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = left + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
}

console.log(search(nums, target))