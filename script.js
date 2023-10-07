let strength = 1;
let trainingPoints = 0;
let clickCount = 0;
let clickRate = 1;
var imageElement = document.getElementById("myImage");

document.getElementById("clicker").addEventListener("click", function() {
    strength += clickRate;
    updateStrengthDisplay();
    changeImage();
});

document.querySelectorAll("#choice").forEach(function(button) {
    button.addEventListener("click", function() {
        const upgradeCost = parseInt(button.value);
        console.log(upgradeCost)
        console.log(strength);

        if (strength >= upgradeCost) {
            console.log(strength)
            strength -= upgradeCost;
            if(button.value === "20"){
                clickRate = 20;
                console.log(clickRate)
            }
            else if(button.value === "25"){
                clickRate = 25;
                console.log(clickRate)

            }
            clickCount += clickRate;

            console.log(strength)
            updateTrainingPointsDisplay();
            updateClickCountDisplay();
        } else {
            alert("Not enough training points!");
        }
    });
});

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
    else if(strength >= 300 && strength < 400){
        console.log("Your current level is lvl 4")
        imageElement.src = "images/lvl4.png"
        imageElement.alt = "Enormous Physique"
        var x = true
        if(x == true){
            setLvlup()
            x = false
        }
        setMusic()
    }
}

function updateStrengthDisplay() {
    document.querySelector(".counter p").textContent = `Your strength is currently: ${strength}`;
}

function updateTrainingPointsDisplay() {
    document.querySelector(".counter p").textContent = `Your strength is currently: ${strength}`;
}

function updateMiddleInfoStrength(){
    document.querySelector(".info h4").textContent = `Currently you are getting: ${strength}`, "per second";
}

function updateClickCountDisplay() {
    document.querySelector(".counter img").textContent = `Click count: ${clickCount}`;
}

function setMusic(){
        const music = new Audio('kevin.mp3');
        music.play();

        music.volume = 0.5;
        music.loop = true;
}
function setLvlup(){
    const music = new Audio('lvlup.mp3');
    music.play();

    music.volume = 0.5;
}
