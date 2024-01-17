const buttonPlayHtml = document.getElementById("play-button")
const gridHtml = document.getElementById("grid")
let difficoltaHtml = document.getElementById("difficolta")


function play(number, className) {

    // let gameOver = false

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

            // if (gameOver = true) {
            //     return
            // }

            if (arrayBombe.includes(i)) {
                this.classList.add("bomb")
                console.log("hai perso")

                gameOver = true

                box.removeEventListener("click", clickedBox)
            } else {
                this.classList.add("clicked")
                console.log("Il numero del box cliccato è: " + i)

                box.removeEventListener("click", clickedBox)
            }



        }


        box.addEventListener("click", clickedBox)

        gridHtml.append(box)

    }
}



buttonPlayHtml.addEventListener("click", function () {

    gridHtml.innerHTML = ""

    let difficoltaScelta = difficoltaHtml.value

    if (difficoltaScelta === "easy") {
        play(100, "easy-box")
    } else if (difficoltaScelta === "normal") {
        play(81, "normal-box")
    } else if (difficoltaScelta === "hard") {
        play(49, "hard-box")
    }
})

