let defuser = document.getElementById("defuser")
let timer = document.getElementById("timer")
let mainContainer = document.getElementById("mainContainer")
let refresh = document.createElement("p")

let countdown = 10

let interval = setInterval(function(){
    countdown -= 1
    timer.textContent = countdown
    if (countdown === 0){
        timer.textContent = "BOOM!!"
        clearInterval(interval)
        mainContainer.classList.add("bg-red")
        refresh.textContent = "Refresh the page to try again!"
        mainContainer.appendChild(refresh)
    }
}, 1000)

defuser.addEventListener("keypress", function(event){
    let bombdefusetext = defuser.value
    if (event.key === "Enter" && bombdefusetext === "Defuse the Bomb" && countdown !== 0){
        timer.textContent = "You did it !"
        clearInterval(interval)
        mainContainer.classList.add("bg-green")
        refresh.textContent = "Refresh the page to play again!"
        mainContainer.appendChild(refresh)
    }
})
