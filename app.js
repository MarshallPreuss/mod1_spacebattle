let player = {
    health: 20,
    firepower: 10,
}
let alien = {
    health: 20,
    firepower: 10
}

const printToScreen = () => {
    document.getElementById('alien-health').innerText = 
    alien.health;
    document.getElementById('players-health').innerText = 
    player.health;
}

const attack = () => {
    let attackButton = document.getElementById('attack-button');
    let restartButton = document.getElementById('restart');
    let message = document.getElementById('message');
    let retreatButton = document.getElementById('retreat');
    let playerAttack = mainAttack(player.firepower);
    alien.health -= playerAttack;
    printToScreen();

    if(GameOver(alien.health)){
        message.innerText = "You Won!"
        attackButton.hidden = true;
        restartButton.hidden = false;
        retreatButton.hidden = true;
        return;
    }

    attackButton.disabled = true;
    // message.innerText = "Alien is attacking"

    setTimeout(() => {
        let alienAttack = mainAttack(alien.firepower);
        player.health -= alienAttack;
        printToScreen();

        if(GameOver(player.health)){
            message.innerText = "You Lost!"
            attackButton.hidden = true;
            restartButton.hidden = false;
            retreatButton.hidden = true;
            return;
        }

        attackButton.disabled = false;
    }, 1000);
    
    
}
const mainAttack = (firepower) => {
    return Math.floor(Math.random() * firepower);
}
const GameOver = (health) => {
    return health <= 0;
}
const restart = () => {
    location.reload();
}
const retreat = () => {
    location.reload();
}

printToScreen();