function gcdOfStrings(str1: string, str2: string): string {
    if(str1.length < str2.length){
        return gcdOfStrings(str2, str1);
    } else if (!str1.startsWith(str2)){
        return '';
    } else if (str2.length === 0){
        return str1;
    } else {
        return gcdOfStrings(str1.slice(str2.length), str2)
    }
}