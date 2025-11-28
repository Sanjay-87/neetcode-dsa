const nums = [1,0,-1,0,-2,2], target = 0;

var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

                let left = j + 1;
                let right = nums.length - 1;

                while (left < right) {
                    let currSum = nums[i] + nums[j] + nums[left] + nums[right];

                    if (currSum === target) {
                        result.push([nums[i], nums[j], nums[left], nums[right]]);
                        left++;
                        right--;
                        while (nums[left] === nums[left - 1]) {
                            left++;
                        }
                        while (nums[right] === nums[right + 1]) {
                            right--;
                        }
                    } else if (currSum < 0) {
                        left++;
                    } else {
                        right--;
                    }
                }
        }
    }

    return result;
}

console.log(fourSum(nums, target))