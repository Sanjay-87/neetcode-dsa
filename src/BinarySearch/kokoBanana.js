function minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let result = right

    const hoursReqd = (k) => {
        let hours = 0;
        for (let bananas of piles) {
            hours += Math.ceil(bananas / k)
        }

        return hours;
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (hoursReqd(mid) <= h) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
}