var paragraph = `Thank yous wevk k. Dreamland guest relations.f f with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is yourphone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`;
var patt = /\d{10}/mg;
var formatSentenses = paragraph.replace(patt, "XXXXXXXXXX").split(".");
let indexCounter = 1;
formatSentenses.forEach((sentense, index) => sentense.split(" ").length > 3 && console.log(`${indexCounter++}. ${sentense}.`))

