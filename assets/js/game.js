var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", " Amy Android", " Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
    // Confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // If yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            //Subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;

            break;
        }
    }

       // Remove enemy's health by subtracting the amount set in the playerAttack variable\
       enemyHealth = enemyHealth - playerAttack;
       console.log(
           playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
       );

   // Check enemy's health
   if(enemyHealth <= 0) {
    window.alert(enemyName + " has died!");

    // Award player money for winning
    playerMoney = playerMoney + 20;

    // Leave while() loop since enemy is dead
    break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

// Remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(
   enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

    //Check player's health
    if(playerHealth <= 0) {
        window.alert(playerName + " has died!");
        // Leave while() loop if player is dead
        break;
        }else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

// fight each enemy-robot by looping over them and fighting them one at a time
for(var i = 0; i < enemyNames.length; i++){
    // If player is still alive, keep fighting
    if (playerHealth > 0){
        // Let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

        // Pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // Reset enemy health before starting new fight
        // enemyHealth = 50;

        // Use debugger to pause script from running and check what's going on at that moment in the code
        debugger;

        // Pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
    }
    // If player isn't alive, stop the game
    else {
        window.alert("You have lost your robot in battle! Game Over!");
    }
}