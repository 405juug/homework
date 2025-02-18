const changeProposal = (capital) => {
    const result = [];
  
    for (const {word, divisibility} of capital) {
        let newText = '';
  
        for (let i = 0; i < word.length; i++) {
            const symbol = word[i];

            const position = (i + 1) % 2 === 0;
  
            if ((divisibility === 'чётный' && position) || 
            (divisibility === 'нечётный' && !position)) {
                newText += symbol.toUpperCase();  
            } else {
                newText += symbol; 
            }
        }
    result.push(newText);
    }
    return result;
}
  
const capital = [
    {word: 'чётный текст', divisibility: 'чётный'},
    {word: 'нечётный текст', divisibility: 'нечётный'},
    {word: 'этот текст тоже должен быть с каждым большим чётным символом', divisibility: 'чётный'},
    {word: 'а у этого текста должен быть каждый нечётный большой символ', divisibility: 'нечётный'},
];
  
const result = changeProposal(capital);

console.log(result);
  