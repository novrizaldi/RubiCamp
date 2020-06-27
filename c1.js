
function sum (){
    console.log("panjang paraneter :", arguments.length)
    var total = 0
    for (let i=0; i< arguments.length; i++){

        console.log ("iterasi ke....", i)
        console.log ("sebelum total ", total, arguments[i])
        
        total = total + arguments[i]
        
        console.log("total = ", total)
    }    
}
sum (1,2,7);
sum (1,4);
sum (11);
sum (10,3,6,7,9);