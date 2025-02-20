function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxCandyNoExtras = 0;
    candies.forEach((candy) => {
        if (candy > maxCandyNoExtras) {
            maxCandyNoExtras = candy;
        }
    });

    let maxCandiesWithExtrasArray: boolean[] = [];
    candies.forEach((candy) => {
        const candyWithExtras = candy + extraCandies;
        if (candyWithExtras >= maxCandyNoExtras) {
            maxCandiesWithExtrasArray.push(true);
        } else {
            maxCandiesWithExtrasArray.push(false);
        }
    });

    return maxCandiesWithExtrasArray
}