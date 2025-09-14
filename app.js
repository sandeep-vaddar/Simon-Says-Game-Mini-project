let gameSeq = [];
let userSeeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        leveUp();
    } 
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function leveUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randInx = Math.floor(Math.random() * 3);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if(userSeeq[idx] === gameSeq[idx]) {
        if(userSeeq.length == gameSeq.length) {
            setTimeout(leveUp, 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
   
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeeq.push(userColor);

    checkAns(userSeeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for (let btn of allBtn) {
    btn.addEventListener("click", btnPress);
}
function reset() {
    started = false;
    gameSeq = [];
    userSeeq = [];
    level = 0;
}
