// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

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


//My Solution:

class Fighter {
    constructor(name, health, damagePerAttack) {
      this.name = name;
      this.health = health;
      this.damagePerAttack = damagePerAttack;
  }
    returnName() {
      return this.name;
    }  
}
  
function declareWinner(fighter1, fighter2, firstAttacker) {
  let first = {};
  let second = {};
  
  if (fighter1.name === firstAttacker && fighter2.name !== firstAttacker) {
    first = fighter1;
    second = fighter2;
  } else {
    first = fighter2;
    second= fighter1;
  }
  
  while (first.health > 0 || second.health > 0) {
    second.health -= first.damagePerAttack;
    first.health -= second.damagePerAttack;

    if (first.health <= 0 && second.health > 0) {
      return second.returnName();
      break
    } else if (second.health <= 0) {
      return first.returnName();
      break
    }

  }
  
}  

//Tests:
declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew") // "Lew"
declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry") // "Harry"
declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry") // "Harald"
declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry") // "Harald"
declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"); // "Harald"
declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"); // "Harald"
