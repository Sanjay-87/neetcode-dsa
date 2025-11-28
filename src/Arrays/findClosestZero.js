const nums = [-4, -2, 1, 4, 8];

const findClosest = (nums) => {
    let closest = Infinity;

    nums.forEach(num => {
        if (Math.abs(num) < Math.abs(closest)) {
            closest = num;
        } else if (Math.abs(num) === Math.abs(closest) && num > closest) {
            closest = num;
        }
    })

    return closest;
}

const result = findClosest(nums);
console.log('result is', result)