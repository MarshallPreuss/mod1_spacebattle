"use strict";
let playerShip;
let alienShips;
let alienShip;

window.onload = beginGame;

function goodMsg(msg){
    console.log(`%c ${msg}`, `color: green`);
}
function badMsg(msg){
    console.log(`%c ${msg}`, `color: red`);
}


function range(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);

}
function decrange(min, max){
    return (Math.floor(Math.random() * (max - min + 1) + min))/10;

}

function beginGame(){
playerShip = new ship("USS Schwarzenegger", 20, 5, 0.7);
alienShips = createAlienFleet(6);
//alienShip = new ship("Alien X-Wing", range(3,6), range(2,4), decrange(6,8));

console.log('%c Spacebattle','font-size: 40px');
console.log('Earth has been attacked by a horde of aliens!');
console.log('Captain your mission is to destroy every last alien ship.');
console.log("We have recived intel that the aliens will attack one at a time. Use this to your advantage.");
console.log("Long range sensors have detected " + alienShips.length + " alien ships approaching!");
console.log("Good luck Captain, Earth is counting on you!");
setTimeout(() => { 
    console.log("Captain we are in range.");
    gameLoop(); }, 3000);
}


function gameLoop(){

    if(alienShip === undefined){
        alienShip = alienShips.shift();
    }


    console.log(playerShip);
    console.log(alienShip);

    if(alienShip.isAlive()){
        playerShip.attack(alienShip);
    }

    if(alienShip.isDestroyed()){
        goodMsg(alienShip.name + " destroyed!")
        alienShip = undefined;
    } else if(playerShip.isAlive()){
        alienShip.attack(playerShip);
    }

    //console.log(alienShips.length + " ships remain in the alien fleet")

    //Check for Win or Fail
    if(playerShip.isDestroyed()){
        badMsg("Your ship has been Destroyed");
        gameLost();
        return;
    }
    if(alienShips.length == 0 && alienShip === undefined){
        gameWon();
        return;
    }
    //Prompt for fight or flee
    setTimeout(() => {     
        let result = prompt("Captain what are your orders? Fight or Flee?","Fight")
        console.log(result);
        switch(result) {
            case "Fight": gameLoop();
            break;
            default: gameLost();
        }
    }, 2000);
       
}

function gameLost(){
    badMsg("The Earth has been invaded by aliens! You suck!");
}
function gameWon(){
    goodMsg("The Earth has been saved from aliens! You don't suck!");
}