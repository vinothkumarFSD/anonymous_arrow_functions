let sentence = 'the quick brown box';
let words = sentence.split('');
console.log(words.map((word)=>{
    return (word[0].toUpperCase()+word.slice(1,));
}).join(''));