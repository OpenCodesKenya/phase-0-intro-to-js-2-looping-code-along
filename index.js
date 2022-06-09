// Code your solutions in this file
function writeCards(names){
    let thankYou = [];
    for (let i =0; i < names.length; i++){
        thankYou.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return thankYou;
}

function countDown(num1){
    while (num1 > 0){
        console.log(num1);
        num1 --;
    }
    console.log(num1);
}