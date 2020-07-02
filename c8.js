
function pola (str) {
    var angka = str.split(' ')
    var angka1 = angka[0]
    var angka2 = angka[2]
    var angka3 = angka[4]

    for (let i=0; i < 10; i++) {
        for (let j=0; j < 10; j++) {
            if ( angka1.replace("#", i) * angka2 == angka3.replace("#", j)){
                return [i,j]
            }
        }
    }

}
console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));