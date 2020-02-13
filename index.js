const readlineSync = require('readline-sync')
console.clear()
console.log( "Welcome to Wyncode" );
console.log( "What do you want to do?" );
let option = readlineSync.question( "Options: try to make some coffee, Buy food next door, Go straight to class " );
​
switch(option) {
    case "try to make some coffee":
        console.log( "We need the coffee to stay awake!, How would you like to prepare it?" );
        let option1_1 = readlineSync.question( "Options: colada, Nespresso machine " );
        switch(option1_1) {
            case "coladas":
                console.log( "You really are from the 305, perhabs a bit cuban?" );
                let option1_2 = readlineSync.question( "Options: I am Cuban, I am not Cuban " );
                switch(option1_2) {
                    case "I am Cuban":
                        console.log( "Azucar!!!!'");
                        break;
                    case "I am not Cuban":
                        console.log( "Oh, ok, you should go home.");
                        break;
                    default: 
                }
                break;
            case "Nespresso machine":
            console.log( "This is so basic, you dont deserve coffee, bye.");
                } 
                break;
    case "Buy food next door":
        console.log( "Are we Vegans now?" );
        let option1_2 = readlineSync.question( "Options: I am Vegan, Im just running out of options " );
        switch(option1_2) {
            case "I am Vegan":
                console.log( "well enjoy eating plants.");
                break;
            case "Im just running out of options":
                console.log("Call me an UberEats and lets get some steak.");
                break;
            default: 
        }
        break;
    case "Go straight to class":
        console.log( "You are the first one to arrive to the classroom, what would you like to do next?" );
        let option3_1 = readlineSync.question( "Options: Dance like no ones looking, Finish your homework " );
        switch(option3_1) {
            case "Dance like no ones looking":
                console.log( "Music blasts, you dont want to be here. Time to go home." );
                break;
            case "Finish your homework":
                console.log( "You're not a nerd, what would you like to do next?" );
                let option3_2 = readlineSync.question( "Options: Take a nap, Wait for Cece " );
                switch(option3_2) {
                    case "Take a nap":
                        console.log( "You suddendly wake up, all this time it has been just a dream." );
                        break;
                    case "Wait for Cece":
                        console.log("Cece has left the building off to some desserted island, bye!!");
                        break;
                          default: 
                        } 
                      break;
                } 
                break;
            default: 
               console.log( "Just go home!" );
        }















// ///// Cece's quiz example below

// const readlineSync = require('readline-sync');
// let batPoints = 0;

// console.log( "Welcome to Batman: Arkham Asylum!" );
// console.log( "What do you want to do?" );
// let option = readlineSync.question( "Options: look around, smack a prisoner, run away" );

// switch(option) {
//   case "look around":
//     console.log( "You see a bunch of angry prisoners and the Joker!" );
//     batPoints += 2;
//     break;
//   case "smack a prisoner":
//     console.log( "Ouch! What did I ever do to you, man?" );
//     batPoints += 3;
//     console.log(batPoints);
//     break;
//   case "run away":
//     console.log( "Batman: \"Bats can't run.\"" );
//     batPoints += 1;
//     break;
//   default: 
//     console.log( "A prisoner punches you in the face." );
//     console.log( "Prisoner: \"Quit messin' around.\"" );
// } 

// console.log('How do you feel about the Joker?');
// let optionTwo = readlineSync.question('Options: I pity him, we are lovers');

// if (optionTwo === "I pity him") {
//     console.log("Me too, poor guy, how did he get that smile?");
//     batPoints += 2;
//     console.log(batPoints);
// } else {
//     console.log("Oh...I didn't know. Congratulations");
//     batPoints += 1;
//     console.log(batPoints);
// }

// if (batPoints <= 3) {
//     console.log("You are nothing like Batman.");
// } else {
//     console.log("You remind me so much of Batman.");
// }