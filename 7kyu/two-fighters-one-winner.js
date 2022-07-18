// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

//                  solution

function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
      fighter2.health -= fighter1.damagePerAttack;
      fighter1.health -= fighter2.damagePerAttack;
    }
    
    if (fighter1.health <= 0 && fighter2.health <= 0)
      return firstAttacker;
    else if (fighter1.health <= 0)
      return fighter2.name;
    else
      return fighter1.name;
  }

//              solution

function declareWinner(fighter1, fighter2, firstAttacker) {
    var attacker = (fighter1.name === firstAttacker)
      ? fighter1
      : fighter2;
    
    function noOneWins(){
      return ((fighter1.health > 0) && (fighter2.health > 0));
    }
    
    function getNextAttacker(attacker){
      return (attacker === fighter1) ? fighter2 : fighter1;
    }
    
    function getDefender(attacker){
      return getNextAttacker(attacker);
    }
    
    function killRound(attacker){
      var defender = getDefender(attacker);
      defender.health -= attacker.damagePerAttack;
    }
    
    function getWinner(){
      return (fighter1.health > 0) 
        ? fighter1.name 
        : fighter2.name;
    }
    
    while(noOneWins()) {
      killRound(attacker);
      attacker=getNextAttacker(attacker);
    }
    
    return getWinner();