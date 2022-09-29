// 1a
let warmHugs = "Hi\, I\'m Olaf and I like warm hugs.";
// 1b
console.log(warmHugs.toUpperCase());
// 1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);
// 2a
let beenImpaled = `Oh, look at that. I've been impaled.`;
// 2b
console.log(beenImpaled.slice(18)); //-18 also works
// 3a
let dotDotDot = "...";
// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones`;
console.log(skullBones);
// 4
console.log(Math.PI);
// 5
let randomNumber = Math.floor(Math.random() * 3) + 1;
console.log(randomNumber);
// randomNumber = Math.ceil(Math.random() * 3);
// console.log(randomNumber); floor

// 6
// let letGo = "Let It Go!";
let go = " Let It Go!".toUpperCase().repeat(2).trim();
console.log(" Let It Go!".toUpperCase().repeat(2).trim());

// 7
let reindeers = "Reindeers are better than people.";
// console.log(reindeers.replaceAll(" ","_"));

// 8
console.log(Math.sqrt(2));
// 9
// 23-7+1
let newRandomNumber = Math.floor(Math.random()*(17)+7) ;
console.log(newRandomNumber)
