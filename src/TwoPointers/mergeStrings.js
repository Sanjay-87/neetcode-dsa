var mergeAlternately = function(word1, word2) {
    let count = 0;
    let res = '';

    while (count < word1.length || count < word2.length) {
        if (count < word1.length) {
            res += word1[count];
        }

        if (count < word2.length) {
            res += word2[count];
        }

        count++;
    }

    return res;
};

const mergeStrings = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;
    let res = '';

    for (let i = 0; i < Math.max(n, m); i++) {
        if(word1[i]) res += word1[i];
        if(word2[i]) res += word2[i];
    }

    return res;
}