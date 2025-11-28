const nums = [4,5,6,7,0,1,2];

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[right]) {
            right = mid;
        } else if (nums[mid] > nums[left]) {
            left = mid
        } else {
            right--;
            left++;
        }
    }

    return nums[left];
}

console.log(findMin(nums))