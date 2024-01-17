const buttonPlayHtml = document.getElementById("play-button")
const gridHtml = document.getElementById("grid")
let difficoltaHtml = document.getElementById("difficolta")

function play(number, className) {

    gridHtml.classList.remove("hidden")

    for (let i = 1; i <= number; i++) {

        let box = document.createElement("div")
        // console.log(box)

        box.classList.add("box")

        box.innerHTML = `<span>${i}</span>`

        box.classList.add(className)


        box.addEventListener("click", function () {
            this.classList.toggle("clicked")
            console.log("Il numero del box cliccato è: " + i)
        })


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

