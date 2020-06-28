function cek(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++) {
        console.log("iterasi ke ", i);
        if (n % i == 0) {
            return false
        }
    }
    return true
}
// console.log(cek());

function indexPrime (index) {
    counter = 0
    number = 2

    while (counter < index){
        if (cek (number)){
            counter++
        }
        number ++      
    }
    return number -1
}
console.log(indexPrime(4))