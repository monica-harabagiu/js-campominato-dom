const buttonPlayHtml = document.getElementById("play-button")
const gridHtml = document.getElementById("grid")
let difficoltaHtml = document.getElementById("difficolta")
let gameOver = false
const punteggioHtml = document.getElementById("score")
let punteggio = 0
let playAgainHtml = document.getElementById("play-again")


function play(number, className) {


    // generate 16 random bombs
    function random(max) {
        return Math.floor(Math.random() * max) + 1
    }

    let arrayBombe = []

    do {
        let randomBomb = random(number)

        if (!arrayBombe.includes(randomBomb)) {
            arrayBombe.push(randomBomb)
        }
    } while (arrayBombe.length !== 16)

    console.log(arrayBombe)



    gridHtml.classList.remove("hidden")

    for (let i = 1; i <= number; i++) {

        let box = document.createElement("div")
        // console.log(box)

        box.classList.add("box")

        box.innerHTML = `<span>${i}</span>`

        box.classList.add(className)


        function clickedBox() {

            if (gameOver == true) {
                return
            }

            if (arrayBombe.includes(i)) {
                this.classList.add("bomb")
                console.log("hai perso")

                gameOver = true

                playAgainHtml.innerHTML = `Hai perso! Prova di nuovo`

                box.removeEventListener("click", clickedBox)
            } else {
                this.classList.add("clicked")
                console.log("Il numero del box cliccato è: " + i)

                punteggio++

                console.log(punteggio)
                punteggioHtml.innerHTML = `Score: ${punteggio}`

                if (punteggio === number - 16) {
                    playAgainHtml.innerHTML = `HAI VINTO!`
                    return
                }

                box.removeEventListener("click", clickedBox)

            }



        }


        box.addEventListener("click", clickedBox)

        gridHtml.append(box)

    }
}



buttonPlayHtml.addEventListener("click", function () {

    gameOver = false

    gridHtml.innerHTML = ""
    playAgainHtml.innerHTML = ""

    punteggio = 0
    punteggioHtml.innerHTML = `Score: 0`

    let difficoltaScelta = difficoltaHtml.value

    if (difficoltaScelta === "easy") {
        play(100, "easy-box")
    } else if (difficoltaScelta === "normal") {
        play(81, "normal-box")
    } else if (difficoltaScelta === "hard") {
        play(49, "hard-box")
    }
})

