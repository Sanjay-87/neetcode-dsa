const people = [3,2,2,1], limit = 3;

var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);

    let l = 0;
    let r = people.length - 1;
    let boat = 0;

    while (l <= r) {
        if (people[l] + people[r] <= limit) {
            l++
        }
        r--;
        boat++;
    }

    return boat;
}

console.log(numRescueBoats(people, limit))