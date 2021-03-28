var numOfButts = document.querySelectorAll(".drum").length;  //Total no of butts.

//SECTION FOR MOUSE CLICK DETECT
for (var i = 0; i < numOfButts; i++) {
   
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var key_id = this.innerHTML;    //"this" gives value about which key is pressed.
        makeNoise(key_id);
        buttonAnimation(key_id);
    });

}

//SECTION FOR KEY PRESS ON KEYBOARD DETECT
document.addEventListener("keypress", function(evt) {
    
    makeNoise(evt.key);    //"key" is predefined
    buttonAnimation(evt.key);
});

//SECTION TO PLAY SOUNDS
function makeNoise(key) {
    switch (key) {
        case "w": var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a": var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s": var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d": var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j": var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k": var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l": var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default: console.log(key_id.innerHTML);
    }
}

function buttonAnimation(key_pressed) {
    var activ_butt = document.querySelector("." + key_pressed);
    
    activ_butt.classList.add("pressed");
    
    setTimeout(function() {
    
        activ_butt.classList.remove("pressed");
    
    }, 50);
    
}