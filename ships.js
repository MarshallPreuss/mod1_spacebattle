class ship {
    constructor(name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    isDestroyed(){
        return (this.hull < 1) 
    }
    isAlive(){
        return (this.hull > 0) 
    }
    attack(targetShip){
        //TODO Identify both ships...
        
        if(Math.random() >= this.accuracy){
            console.log(this.name + " shoots at " + targetShip.name + " and hits!");
            targetShip.takesDamage(this.firepower)
        } else{
            console.log(this.name + " shoots at " + targetShip.name + " and missed!");
        }
    }
    takesDamage(damage){
        //TODO: Identify as player or alien...
        badMsg(this.name + " takes " + damage + " damage!");
        this.hull -= damage;
    }
}

function createAlienFleet(numShips){
    let fleet = [];
    let alien;
    for(x=0; x<numShips; x++){
        y = x + 1;
        alien = new ship("Alien TIE Fighter " + y, range(3,6), range(2,4), decrange(6,8));
        fleet.push(alien);
    }
    return fleet;
}