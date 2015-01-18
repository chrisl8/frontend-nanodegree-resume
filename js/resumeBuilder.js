// Udacity JavaScript Class
var bio = {
    "name": "Chris L8",
    "role": "Unix System Administrator",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "email@example.com",
        "github": "chrisl8",
        "twitter": "@EkpyroticFrood",
        "location": "Kansas"
    },
    "welcomeMessage": "He's just this guy, you know? Chris aka ChrisL8 aka the Hoopy Frood aka the Ekpyrotic Frood is a full time Unix Admin who likes to play with everything technology on the side. I am currently learning web development with a strong focus on JavaScript.",
    "skills": [
    "Unix",
    "Linux",
    "Web Development",
    "JavaScript",
    "Robots"
    ],
    "bioPic": "images/me.jpg",
    display : function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedImage);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);
        var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMessage);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var skill in bio.skills) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#header").append(formattedSkill);
            }
        }
    }
};

var education = {
    "schools": [
{
    "name": "Pace University -- Pleasantville, NY",
    "location": "Wichita, Kansas",
    "degree": "Associates",
    "dates": "2006 - 2011",
    "majors": [
    "Telecommunications"
    ],
    "url": "http://www.pace.edu/"
},
{
    "name": "Fort Hays State University -- Hays, KS",
    "location": "Wichita, KS",
    "degree": "Pursueing Bachelors",
    "dates": "2012 to present",
    "majors": [
    "Web Development"
    ],
    "url": "http://www.fhsu.edu/"
}
],
"onlineCourse": [
{
    "title": "Intro to HTML and CSS",
    "school": "Udacity",
    "date": "2014",
    "url": "https://www.udacity.com/course/ud304"
},
{
    "title": "How to Use Git and GitHub",
    "school": "Udacity",
    "date": "2014",
    "url": "https://www.udacity.com/course/ud775"
},
{
    "title": "JavaScript Basics",
    "school": "Udacity",
    "date": "2015",
    "url": "https://www.udacity.com/course/ud804"
},
{
    "title": "Intro to jQuery",
    "school": "Udacity",
    "date": "2015",
    "url": "https://www.udacity.com/course/ud245"
}
],
display : function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        for (var major in education.schools[school].majors) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }
    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourse) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
        $(".education-entry:last").append(formattedOnlineTitle);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
        $(".education-entry:last").append(formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[course].date);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourse[course].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
}
};

var work = {
    "jobs": [
{
    "employer": "AT&T",
    "title": "Unix System Administrator",
    "location": "Wichita, KS",
    "dates worked": "2006 to present",
    "description": "As a Unix System Admin at AT&T I am responsible for creating change requests, working with project managers to complete VPMOs, documenting processes to be implemented by offshore personnel and responding to emergencies and outages."
},
{
    "employer": "AT&T (formerly SBC)",
    "title": "Desktop Support Field Services",
    "location": "Wichita, KS",
    "dates worked": "2000 to 2005",
    "description": "Set up, install and support all on site PCs. Distributed software to all desktop PCs in Kansas, Oklahoma and Dallas."
},
{
    "employer": "CharacterLink Internet Service Provider",
    "title": "Network Operations Technician and Supervisor",
    "location": "Chicago, IL",
    "dates worked": "1996 to 2000",
    "description": "Server support, customer support and technical support as well as local network and server administration for an Internet Service Provider."
},
{
    "employer": "NCR",
    "title": "Contractor",
    "location": "Wichita, KS",
    "dates worked": "1995",
    "description": "Refurbished Point of Sale PC Unix hardware for Pizza Hut."
},
{
    "employer": "Mowcow Department of Education",
    "title": "Teacher",
    "location": "Moscow, Russia",
    "dates worked": "1994 to 1995",
    "description": "Taught English to 7th and 8th form students."
}
],
display : function() {
    // linter does not like it if we do not declare the variable first
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job]["dates worked"]);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedWorkEntry = formattedEmployer +
        formattedTitle +
        formattedLocation +
        formattedDates +
        formattedDescription;
        $(".work-entry:last").append(formattedWorkEntry);
    }
}
};

var projects = {
    "projects": [
{
    "title": "Papaver Design",
    "dates worked": 2015,
    "description": "College collaborative project to design our own business web site.",
    "images": [
    "images/papaver.png",
    "images/papaverThumb.png"
    ]
},
{
    "title": "Minecraft in Space",
    "dates worked": 2014,
    "description": "College project to design an HTML5/CSS site.",
    "images": [
    "images/mcspace.png",
    "images/planetrise.png"
    ]
},
{
    "title": "White Buffalo Fly Fishing",
    "dates worked": 2015,
    "description": "College personal project to design a business web site from specs.",
    "images": [
    "images/wbf.png",
    "images/wbfThumb.png"
    ]
}
],
display : function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle =
        HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates =
        HTMLprojectTitle.replace("%data%", projects.projects[project]["dates worked"]);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription =
        HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);
        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage =
                HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
};

bio.display();
work.display();
projects.display();
education.display();

function locationizer(inputArray) {
   var locations = [];
    for (var entry in inputArray.jobs) {
        console.log(inputArray.jobs[entry].location);
        locations.push(inputArray.jobs[entry].location);
    }
    return locations;
}

// function inName(name) {
//     // trim() removes any whitespace at the start and and of the string
//     name = name.trim().split(" ");
//     name[1] = name[1].toUpperCase();
//     // We also need to make sure the first name is formatted correctly.
//     name[0] = name[0].slice(0,1).toUpperCase() +
//         name[0].slice(1).toLowerCase();
//     return name[0] + " " + name[1];
// }
// console.log(inName(bio.name));

$("#mapDiv").append(googleMap);
