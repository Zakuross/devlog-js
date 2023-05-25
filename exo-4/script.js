// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];  

let last = secretMessage.pop()

let newL = secretMessage.push('to')

let newL2 = secretMessage.push('program')

let first = secretMessage.shift()

let six = secretMessage[6] = 'right'

let newL3 = secretMessage.unshift('Programming')

let four = secretMessage.splice(5, 5, 'know')



console.log(secretMessage.join())