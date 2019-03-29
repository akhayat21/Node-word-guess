
var Word = require("./word.js");
var inquirer = require('inquirer');

var wordArr = ["james harden", "boston celtics", "chicago bulls","la lakers","golden state warriors","toronto raptors", "houston rockets", "oklahoma city thunder", "san antonio spurs", "milwaukee bucks", "new york knicks",
"cleaveland cavaliers", "sacramento kings", "miami heat", "dallas mavericks", "denver nuggets", "utah jazz", "los angeles clippers", "new orlean pelicans", "portland trailblazers", "brooklyn nets","detriot pistons","minnesota timberwolves", 
"indiana pacers", "phoenix suns", " charlotte hornets", "orlando magic", "memphis grizzlies", "atlanta hawks", "washington wizards", "lebron james", "michael jordon", "steph curry", "kevin durant", "kyrie irving","hakeem olajuwon", "shaquille o neal", "kobe byrant","magic johnson"];

var chosenOne = wordArr[Math.floor(Math.random()*39)];

var word = new Word(chosenOne);

inquirer
.prompt([
    
    ])



