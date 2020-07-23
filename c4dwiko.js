function indexPrime(n) {
    var hasil = [];
    for (let i = 2; i <= n * n; i++) {
        console.log(i)
        for (let j = 2; j <= i; j++) {
            console.log(i)
            if (i === j) {
                hasil.push(i)
            } if (i % j === 0) {
                break;
            }
            console.log(i,j)
        }
    }
    return hasil[n - 1]
}
console.log(indexPrime(3))
// console.log(indexPrime(500))