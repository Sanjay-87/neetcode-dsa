var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const myHash = new Map();

    for (let i = 0; i < s.length; i++) {
        myHash.set(s[i], (myHash.get(s[i]) || 0) + 1)
    };

    for (let i = 0; i < t.length; i++) {
        if (!myHash.has(t[i]) || myHash.get(t[i]) == 0) {
            return false
        }
        myHash.set(t[i], myHash.get(t[i]) - 1)
    };

    return true;
};

myHash.set(s[i], (myHash.get(s[i]) || 0) + 1)