
function deretKaskus(n) {
    let a = []
    for (let i=1; i <= n; i++) {
        let x = i * 3
        if (x % 5 == 0 && x % 6 == 0) {
            a.push("kaskus")
        } else if (x % 6 == 0) {
            a.push("kus")
        } else if (x % 5 == 0) {
            a.push("kas")
        } else {
            a.push(x)
        }
    }
    return arr
}
console.log(deretKaskus(10))
