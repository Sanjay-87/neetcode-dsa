// Check if the weightages present in the given string
// Scenarios:
// • Character weights are  1 to 26 from a to z
// • Sum of consecutive same character weigtages can be considered
 
// string  weight
// a       1
// b       2
// bb      4
// c       3
// cc      6
// ccc     9
// d       4
// dd      8
// ddd     12
// dddd    16
 
// Input 1: string( 'abbcccdddd')
// Input 2: query([ 1, 7, 5, 4, 15 ])
// Expected output : ['Yes', 'No', 'No', 'Yes', 'No']

const str = "abbcccdddd";
const query = [ 1, 7, 5, 4, 15 ];

const checkWeightage = (str, query) => {
    const weights = new Set();
    let currentChar = '';
    let currentCount = 0;

    for (let ch of str) {
        const value = ch.charCodeAt(0) - 96;

        if (ch === currentChar) {
            currentCount++;
        } else {
            currentChar = ch;
            currentCount = 1;
        }

        weights.add(value * currentCount);
    }

    return query.map(q => weights.has(q) ? 'Yes' : 'No')
}

const result = checkWeightage(str, query)
console.log('result', result)