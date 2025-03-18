function reverseVowels(s: string): string {
    const availableVowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];

    let vowelsToReverse: string[] = [];
    let vowelReversedString = '';

    for (let i = 0; i < s.length; i++) {
        if (availableVowels.indexOf(s[i]) !== -1) {
            vowelsToReverse.push(s[i]);
        }
    }

    const reversedVowels = vowelsToReverse.reverse();

    let reversedVowelIterator = 0;

    for (let j = 0; j < s.length; j++) {
        if (availableVowels.indexOf(s[j]) !== -1) {
            vowelReversedString = vowelReversedString + reversedVowels[reversedVowelIterator];
        } else {
            vowelReversedString = vowelReversedString + s[j];
        }
    }

    return vowelReversedString;
}