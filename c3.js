function romawi(n) {
    var des = [1000, 900, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var rom = ['M', 'CM', 'D', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    var hasil = ''
    for (let i = 0; i < des.length; i++) {
        console.log(des[i], n)
        while (des[i] <= n) {
            hasil = hasil + rom[i]
            console.log('hasil =', hasil)
            console.log(des[i], n)
            n = n - des[i]
        }
    }
    return hasil
}
console.log("test")
console.log("script testing untuk konversi romawi");
console.log(" input | expected | result  |");
console.log("  4    |          |  ", romawi(4));
console.log("  9    |          |  ", romawi(9));
console.log("  13   |          |  ", romawi(13));
console.log(" 1453  |          |  ", romawi(1453));
console.log(" 1646  |          |  ", romawi(1646));