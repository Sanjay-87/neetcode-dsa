const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 30;

var searchMatrix = function(matrix, target) {
    let l = 0, r = matrix.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (matrix[m].includes(target)) {
            return true
        } else if (matrix[m][0] < target) {
            l = m + 1;
        } else {
            r = m - 1
        }
    }

    return false;
}

console.log(searchMatrix(matrix, target))