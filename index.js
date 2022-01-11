//const gifts = ["teddy bear", "drone", "dolls"];

//function wrapGifts(gifts) {
    //for (let i = 0; i <gifts.length; i++) {
        //console.log(`Wrapped ${gifts[i]} and added a bow!`);
   // }
 //   return gifts;
//}


const arrayNames = ["Aki","Ollie","Guadalupe"];
const eventName = "surprise";

function writeCards(arrayNames, eventName) {
    const newArray = [];
    for (let i=0; i < arrayNames.length; i++) {
        newArray[i] = `Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`
        debugger;
    }
    return newArray;
}
writeCards(arrayNames,eventName)

function countDown() {
    let countDown = 10;
    while (countDown >=0) {
        console.log(countDown--);
    }
};