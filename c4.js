
function cek (n){
    if ( n < 2){
        return false 
    }
    for ( let i=2; i < n; i++) {
        if ( n % i == 0) {
            return false
        }
        return true
    }
}

function indexPrime (index) {
    var counter = 0
    var number = 2 

    while ( counter < index) {
        if (cek(number)){
            counter++
        }
        number++
    }
    return number -1
}
console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))