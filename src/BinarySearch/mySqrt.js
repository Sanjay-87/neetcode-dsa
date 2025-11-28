const x = 8;

var mySqrt = function(x) {
    let l = 0, r = x, res = 0;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        let sqrt = m * m;

        console.log(m, sqrt, x)

        if (sqrt > x) {
            r = m - 1;
        } else if (sqrt < x) {
            l = m + 1;
            res = m
        } else {
            return m;
        }
    }

    return res;
}

const result = mySqrt(x);
console.log({result})