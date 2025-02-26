function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let totalPlantableFlowers = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        const leftPlot = flowerbed[i - 1];
        const currentPlot = flowerbed[i];
        const rightPlot = flowerbed[i + 1];

        if (leftPlot === 1 || currentPlot === 1 || rightPlot === 1) {
            continue;
        } else {
            flowerbed[i] = 1;
            totalPlantableFlowers++;
        }
    }

    return (totalPlantableFlowers >= n);
}