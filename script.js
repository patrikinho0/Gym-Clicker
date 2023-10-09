let strength = 1
let clickCount = 0
let clickRate = 1
let strengthPerSecond = 0
var imageElement = document.getElementById("myImage")

document.getElementById("clicker").addEventListener("click", function() {
    strength += clickRate
    updateStrengthDisplay()
    changeImage()
});

document.querySelectorAll(".choice1, .choice2").forEach(function (button) {
    button.addEventListener("click", function () {
        const upgradeCost = parseInt(button.value)

        if (strength >= upgradeCost) {
            strength -= upgradeCost

            if (button.id === "choice1") {
                strengthPerSecond += 10
            } else if (button.id === "choice2") {
                strengthPerSecond += 15
            }

            updateStrengthDisplay()
        } else {
            alert("Not enough training points!")
        }
    });
});

document.querySelectorAll(".choice3, .choice4").forEach(function(button) {
    button.addEventListener("click", function() {
        const upgradeCost = parseInt(button.value)
        console.log(upgradeCost)
        console.log(strength)

        if (strength >= upgradeCost) {
            console.log(strength)
            strength -= upgradeCost
            if(button.value === "20"){
                clickRate += 20
                console.log(clickRate)
            }
            else if(button.value === "25"){
                clickRate += 25
                console.log(clickRate)
            }
            clickCount += clickRate

            console.log(strength)
            updateStrengthDisplay()
            changeImage()
        } else {
            alert("Not enough training points!")
        }
    })
})

setInterval(function () {
    strength += strengthPerSecond
    updateStrengthDisplay()
    updateMiddleInfoStrength()
}, 1000)

function changeImage(){
    if(strength >= 100 && strength < 200){
        console.log("Your current level is lvl 2")
        imageElement.src = "images/lvl2.png"
        imageElement.alt = "Medium Physique"
    }
    else if(strength >= 200 && strength < 300){
        console.log("Your current level is lvl 3")
        imageElement.src = "images/lvl3.png"
        imageElement.alt = "Big Physique"
    }
    else if(strength >= 300){
        console.log("Your current level is lvl 4")
        imageElement.src = "images/lvl4.png"
        imageElement.alt = "Enormous Physique"
        setLvlupEffect()
        setMusic()
    }
}

function updateStrengthDisplay() {
    document.querySelector(".counter p").textContent = `Your strength is currently: ${strength}`
}

function updateMiddleInfoStrength() {
    document.querySelector("#perSecondStrength").textContent = strengthPerSecond
}

var setLvlupEffect = (function() {
    var executed = false
    return function() {
        if (!executed) {
            executed = true

            const lvlup = new Audio('lvlup.mp3')
            lvlup.volume = 0.1
            lvlup.play()
        }
    }
})()

var setMusic = (function() {
    var executed = false
    return function() {
        if (!executed) {
            executed = true

            const music = new Audio('kevin.mp3')
            music.play()
            music.volume = 0.1
            music.loop = true
        }
    }
})()