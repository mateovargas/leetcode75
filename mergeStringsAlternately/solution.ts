function mergeAlternately(word1: string, word2: string): string {
    let alternatedStringResult = '';
    let shortestWord = word1;
    let shortestWordLength  = word1.length;
    
    if(word1.length === 0){
        return word2;
    }

    if(word2.length === 0){
        return word1;
    }

    if(word1.length > word2.length){
        shortestWord = word2;
        shortestWordLength = word2.length;
    }

    for(let i = 0; i < shortestWordLength; i++){
        alternatedStringResult += word1[i] + word2[i]; 
    }

    if(word1 === shortestWord){
        return alternatedStringResult + word2.slice(shortestWordLength+1);
    } else if (word2 === shortestWord){
        return alternatedStringResult + word1.slice(shortestWordLength+1)
    } else {
        return alternatedStringResult;    
    }
}