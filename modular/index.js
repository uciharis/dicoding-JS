const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

const fighting = (tiger,wolf)=> {
    if(tiger.strength > wolf.strength){
        tiger.growl();
        return;
    }
    if(wolf.strength > tiger.strength){
        wolf.howl();
        return;
    }
    console.log('tiger and wolf have same strength');
}
const tiger = new Tiger();
const wolf = new Wolf();
fighting(tiger,wolf);