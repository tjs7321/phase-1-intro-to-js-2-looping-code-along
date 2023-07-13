function writeCards(names, event) {
    const thankYou = []
    for (let i = 0; i < names.length; i++) {
        thankYou.push(
            `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        )
    }
    return thankYou
}

function countDown(num){
    while (num !== -1) {
        console.log(num--)
    }
}