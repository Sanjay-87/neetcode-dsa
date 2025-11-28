const nums = [1,1,1,2,2,3], k = 2;

var topKFrequent = function (nums, k) {
    const count = {};

    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    let arr = Object.entries(count).map(([nums, freq]) => {
        return [freq, parseInt(nums)]
    })

    arr.sort((a, b) => b[0] - a[0]);

    return arr.slice(0, k).map(pair => pair[1]);
}

topKFrequent(nums, k)