const names = ["Guadalupe", "Ollie", "Aki"];
const eventName = "surprise"


function writeCards(cards) {
  let newArray = [];
    for (let i = 0; i < names.length; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    debugger;
  }

  return newArray;
}

wrapCards("names", "eventName")

function countDown(init = 10) {
    while (init >=0) {
        console.log(init--);
    }
}