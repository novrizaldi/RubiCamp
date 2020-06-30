function stringManipulation(word) {
     var vocal = ['a', 'i', 'u', 'e', 'o']
     for (let i = 0; i <= vocal.length; i++) {
         while (word.startsWith(vocal[i])) {
             return word
         }
     }
     return word.slice(1) + word.slice(0, 1) + 'nyo'
 }

 function sentenceManipulation(sentence) {
     var word = sentence.split(' ')
     var hasil = ''
     for (let i = 0; i < word.length; i++) {
         hasil += stringManipulation(word[i]) + ' ' 
     }
     console.log(hasil)
 }
 sentenceManipulation('ibu pergi ke pasar bersama aku');