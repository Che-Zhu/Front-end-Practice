let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

function homePlusOne() {
    currentScore = Number(scoreHome.textContent)
    scoreHome.textContent = currentScore + 1
}

function homePlusTwo() {
    currentScore = Number(scoreHome.textContent)
    scoreHome.textContent = currentScore + 2
}

function homePlusThree() {
    currentScore = Number(scoreHome.textContent)
    scoreHome.textContent = currentScore + 3
}

function guestPlusOne() {
    currentScore = Number(scoreGuest.textContent)
    scoreGuest.textContent = currentScore + 1
}

function guestPlusTwo() {
    currentScore = Number(scoreGuest.textContent)
    scoreGuest.textContent = currentScore + 2
}

function guestPlusThree() {
    currentScore = Number(scoreGuest.textContent)
    scoreGuest.textContent = currentScore + 3
}

function restart() {
    scoreHome.textContent = 0
    scoreGuest.textContent = 0
}