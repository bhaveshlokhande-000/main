let paragraph = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`
let patt = /\d{10}/gm;
let words = paragraph.split(" ");
let formatSentenses = [];
let counter = 1;
let temp_str = "";
for (let index = 0; index < words.length; index++) {
    let word = words[index];
    if (patt.test(word)) {
        temp_str += "XXXXXXXXXX ";
    }
    else {
        temp_str = temp_str + word + " ";
    }
    let lastCharacter = word[word.length - 1];
    if (lastCharacter == "?" || lastCharacter == "." || lastCharacter == "!") {
        if (counter > 3) {
            formatSentenses.push(temp_str.substr(0, temp_str.length - 1));
        }
        counter = 0;
        temp_str = "";
    }
    counter += 1;
}
counter = 1;
formatSentenses.forEach((sentense) => console.log(`${counter++}. ${sentense}`));
