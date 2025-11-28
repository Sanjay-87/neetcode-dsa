const s = "abcabcbb";

var lengthOfLongestSubstring = function(s) {
    const charSet = new Set();
    let l = 0;
    let maxLen = 0;

    for (let r = 0; r < s.length; r++) {
        while (charSet.has(s[r])) {
            charSet.delete(s[l]);
            l++
        }
        charSet.add(s[r]);
        maxLen = Math.max(maxLen, r - l + 1)
    }

    return maxLen;
}