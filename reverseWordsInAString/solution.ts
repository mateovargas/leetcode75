function reverseWords(s: string): string {
    let reversedString = '';
    let wordArray = s.trim().split(' ');

    wordArray.forEach((word) => {
        if (reversedString === '') {
            reversedString = word;
        } else if (word !== '') {
            reversedString = word + ' ' + reversedString;
        }
    });

    return reversedString;
}