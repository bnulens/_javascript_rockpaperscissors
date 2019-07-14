var compare = function (p1choice,p2choice) {
    if (p1choice === p2choice) {
        console.log("It's a Tie !");
    }
    else if (p1choice === 'rock'){
        if (p2choice === 'paper'){
        console.log("Paper Wins!")
        }
        else if (p2choice === 'scissors'){
        console.log("Stone Wins!")
        }
        else {
        console.log("It's a Tie !")
        }
    }
    else if (p1choice === 'paper'){
        if (p2choice === 'scissors'){
        console.log("Scissors Win!")
        }
        else if (p2choice === 'stone'){
        console.log("Paper Wins!")
        }
        else {
            console.log("It's a Tie !")
        }
    }
    else if (p1choice === 'stone'){
        if (p2choice === 'scissors'){
        console.log("Stone Wins!")
        }
        else if (p2choice === 'paper'){
        console.log("Paper Wins!")
        }
        else {
            console.log("It's a Tie !")
        }
    }
}