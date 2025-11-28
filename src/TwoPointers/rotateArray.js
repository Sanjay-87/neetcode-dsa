const nums = [1,2,3,4,5,6,7], k = 3
var rotate = function(nums, k) {
    let n = nums.length;
    k %= n;

    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);

    console.log(nums)
}

rotate(nums, k)