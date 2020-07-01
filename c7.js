
function weirdMultiply(sentence) {
    var angka = sentence.toString()
    var hasil = 1

    if (sentence < 10 ){
        return sentence
    }

    for (let i = 0; i < angka.length; i++) {
        console.log("iterasi ke ", i);//
        console.log("hasil sebelum", hasil, "angka" ,angka[i]) //

        hasil = hasil * angka[i]
        
        console.log("hasil setelah", hasil); //
        
    }
    return weirdMultiply(hasil)
}
console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))