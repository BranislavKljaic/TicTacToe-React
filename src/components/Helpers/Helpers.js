function checkIsWin(arrayOfSymbols) {
    const winningStreak = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winningStreak.length; i++) {
        const [a, b, c] = winningStreak[i];
        if (
            arrayOfSymbols[a] &&
            arrayOfSymbols[a] === arrayOfSymbols[b] &&
            arrayOfSymbols[a] === arrayOfSymbols[c]
        ) {
            return true;
        }
    }
    return false;
}

export default checkIsWin;