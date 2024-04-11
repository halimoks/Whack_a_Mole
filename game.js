let startBtn = document.getElementById("start")
let time = document.querySelector(".time")
let whack = document.querySelectorAll(".whackImg")
let score = document.querySelector(".score")
let container = document.querySelector(".gameContainer")
let playAgain = document.querySelector(".playAgain")
let exit = document.querySelector(".exit")
let gameOverContainer = document.querySelector(".gameOver")
let finalScore = document.querySelector(".finalScore")
let whackText = document.querySelectorAll(".whackText")

let realScore = 0

    whack.forEach(img=> {
        img.addEventListener("click", function(){
            realScore++
            score.innerHTML = realScore
            
        })
    })


    function showItem() {
        let randomNumber = Math.floor(Math.random() * whack.length)
        whack[randomNumber].style.transform = "translateY(100%)"
        whack[randomNumber].style.display = "block"

        setTimeout(function() {
            whack[randomNumber].style.transform = "translateY(0%)"
            whack[randomNumber].addEventListener("click", function() {
                whackText[randomNumber].style.display = "block"
            })
        }, 10)

        setTimeout(function() {
            whack[randomNumber].style.display ="none"
            whack[randomNumber].style.transform = "translateY(100%)"
            whackText[randomNumber].style.display = "none"
        }, 700)
    }

    function hideAllWhacks() {
        whack.forEach(img => {
            img.style.display ="block"
            img.style.transition = "all .2s ease "

        })
    }

    function showRslt(){
        gameOverContainer.style.display = "block"
        gameOverContainer.style.height = "70vh"
        finalScore.innerHTML = realScore
    }
    
    function playGame(){
        container.style.height = "70vh"
        gameOverContainer.style.display = "none"
        score.innerHTML = 0
        realScore = 0
            let timer = 30
            hideAllWhacks()

            let interval = setInterval(function() {
                if (timer > 0) {
                    time.innerHTML = --timer
                    showItem()
                } else {
                    clearInterval(interval)
                    hideAllWhacks()
                    showRslt()
                }
            }, 1000)
            startBtn.style.display="none"
    }
    function reset(){
        container.style.height = "80vh"
        gameOverContainer.style.display = "none"
        score.innerHTML = 0
        realScore = 0
        time.innerHTML = 30
        startBtn.style.display = "block"
    }

playAgain.addEventListener("click" , playGame)
startBtn.addEventListener("click", playGame)
exit.addEventListener("click" , reset)

