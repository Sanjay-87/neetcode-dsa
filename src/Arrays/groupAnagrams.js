var groupAnagrams = function(strs) {
    const result = {};

    for (let i = 0; i < strs.length; i++) {
        let sort = strs[i].split('').sort().join('');

        if (!result[sort]) {
            result[sort] = [strs[i]];
        } else {
            result[sort].push(strs[i])
        }
    }

    return Object.values(result);
}