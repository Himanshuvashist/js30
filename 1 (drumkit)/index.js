"use strict";

const keys = document.querySelectorAll(`.key`);

var currentColor;

var i = 0;


window.addEventListener("keyup", function (e) {


    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);   //selecting audio element related to keycode pressed
    if(!audio) return;

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);         //selecting div related to keycode pressed
    key.classList.add(`big`);

    //creating 7 colors and set new color to background every time we press a key, if color position is last then we start it from first again
    const colors = ["rgba(148, 0, 211, 0.3)",
                    "rgba(75, 0, 130, 0.3)",
                    "rgba(0, 0, 255, 0.3)",
                    "rgba(0, 255, 0, 0.3)",
                    "rgba(255, 255, 0, 0.3)",
                    "rgba(255, 127, 0, 0.3)",
                    "rgba(255, 0, 0, 0.3)"
    ];
    currentColor = colors[i];
    i++;
    if (i == 7) {
        i = 0;
    }

    key.style.backgroundColor = currentColor;       //setting background color                              



    //adding transitionend event listner to div means deciding what to do after transition ends on div
    key.addEventListener("transitionend", function (f) {                    
        key.classList.remove('big');
        key.style.backgroundColor = "white";        //setting background color "white" after transition is over
    })

    audio.currentTime = 0;                          //setting audio current time to 0 every time we press a key
    audio.play();                                   //playing audio





});