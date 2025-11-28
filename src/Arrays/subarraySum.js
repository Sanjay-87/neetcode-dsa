const nums = [1,1,1], k = 2;

var subarraySum = function(nums, k) {
    let count = 0;
    let prefixSum = 0;
    let sumCount = new Map();
    sumCount.set(0, 1);

    for (let num of nums) {
        prefixSum += num;

        if (sumCount.has(prefixSum - k)) {
            count += sumCount.has(prefixSum - k);
        }

        sumCount.set(prefixSum, (sumCount.get(prefixSum) || 0) + 1);
    }

    return count
}

console.log(subarraySum(nums, k))