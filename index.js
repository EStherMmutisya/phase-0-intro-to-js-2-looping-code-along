// Code your solutions in this file

 function writeCards(names, occasion){
 const messages =  names.map ( name => `Thank you, ${name}, for the wonderful surprise gift!${occasion}`)

 const  updateMessage= messages.map (message => message.replace(/surprise\s*$/, ''));
 return updateMessage;
}

const namesArray  = ["Guadalupe", "Ollie", "Aki"];
const birthdayMessage = writeCards(namesArray, "for the wonderful surprise gift!")
console.log(thankYouMessages)

function countDown (number)
{
    for (let i = number; i>= 0; i--){
        console.log(i);
    }
}
countDown(10)