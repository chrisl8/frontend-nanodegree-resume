// Udacity JavaScript Class
// All work from class preserved as comments
// for future reference! :)

// JQuery Selector
$("#main").append("Chris L8"); // Select ID main
$("#main").append("<br/>");

// Variables
var awesomeThoughts = "I am Chris and I am AWESOME!";
console.log(awesomeThoughts);

// String replace
console.log(awesomeThoughts.replace("Chris", "Joe"));
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// HTML append/prepend
//$("#main").append(funThoughts);

var name = "Chris Lofland";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); // prepend has to be done in reverse order.

// Arrays
var skills = ["awesomeness", "programming", "teaching", "JS"];
$("#main").append(skills);
$("#main").append("<br/>");
console.log(skills);
console.log(skills[0]);
console.log(skills.length);
// Note that the "last indx" is [array].length -1 because they are 0 indexed!

// Quiz:
// Replace last entry in array
// with same number incremented by 1
var sampleArray = [0,0,7];

// My Answer
var newArray = sampleArray;
console.log(newArray[2]);
newArray[newArray.length - 1] = newArray[newArray.length - 1] + 1;
console.log(newArray);

// or

// Instructor's solution
newArray = [];
newArray = sampleArray.slice(0);
// I'm not sure why the instructor used slice
// instead of just a straight assignment?
var lastNumber = newArray.pop();
// pop gets the LAST item from an arrarry,
// AND DELETES it from the array!
newArray.push(lastNumber + 1);
// and push adds an item to the end
// of an array.
console.log(newArray);

// Quiz:
//
// If given a string of a two word name formatted with any mix of
// capitalization, can you manipulate the string to ensure the
// first name has a capital first letter and the last name is
// totally capitalized? Assume there's a space between the names.
// For instance, turning a string like "cAmEROn PittMAN" into
// "Cameron PITTMAN". Your answer should be a single string saved to
// the variable called finalName.

var name = "AlbERt EINstEiN";
arrayName = name.split(" ");
finalName = arrayName[0].substr(0,1).toUpperCase();
finalName = finalName + arrayName[0].substr(1).toLowerCase();
finalName = finalName + " ";
finalName = finalName + arrayName[1].toUpperCase();
console.log(finalName);

// Objects

// "Object Literal Notation":
var bio = {
    "name": "James",
    "age" : 32,
    "skills" : skills
};

$("#main").append(bio.name);
$("#main").append("<br/>");

// JSON

var education = {
    "schools" : [ // array
        { // Object 0
            "name" : "Eckerd College",
            "city" : "Saint Petersburg, FL, US",
            "degree" : "BA",
            "major" : ["CompSci", "French"] // array
        },
        { // Object 1
            "name" : "Nova Southeastern University",
            "city" : "Fort Lauderdale, FL, US",
            "degree" : "Masters",
            "major" : ["CompSci"]
        }
    ]
};

