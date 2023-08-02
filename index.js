// Code your solutions in this file
for (let age = 30; age < 40; age ++) {
     console.log(`I'm ${age} years old. Happy birthday to me!`);
    }


const gifts = ["Teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

const messageHolder = [];
function writeCards(listOfNames, nameOfEvent) {

    
    for (let i = 0; i < listOfNames.length; i++) {
        messageHolder.push(`Thank you, ${listOfNames[i]}, for the wonderful ${nameOfEvent} gift!`);
    }

    return messageHolder

}

function countDown(positiveInteger) {
    while (positiveInteger > -1) {
        console.log(positiveInteger);
        positiveInteger--;
    }
}
