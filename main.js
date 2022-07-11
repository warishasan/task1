function fetchLongestWord(input) {


    // break the sentence into an array of words
    const splitInput = input.split(' ');

    // sort words according to their length
    let sortWords = splitInput.sort((a, b) => b.length - a.length);

    // ignore everything but letters
    sortWords = sortWords.map(x => {
        
       const arr = x.match(/[a-z]/gi)
       if (arr){
       return arr.join('')
       }
       else {
        return ''
       }
    
    }).filter(x=>x!=='');
    

    // length of the longest word(s)
    const longestWordLength = sortWords[0].length

    // longest word(s)
    let getLongestWord = sortWords.filter(x => x.length === longestWordLength);

    // if there are 2 or more longest words then find the highest number of vowels
    if (getLongestWord.length > 1) {

        const regex = /[aiueo]/gi;

        getLongestWord = getLongestWord.sort((a, b) => b.match(regex).length - a.match(regex).length);
    }

    return getLongestWord[0]

}

const input1 = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
const input3 = "experience everything ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; aaaaaaaaaaaaaaa";

console.log(fetchLongestWord(input3)); 
