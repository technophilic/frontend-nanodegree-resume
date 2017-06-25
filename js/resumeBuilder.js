// --------------Bio Section--------------------------
var bio={
    name : 'Vineeth',
    role : 'Web Developer',
    contacts : {
        mobile: '1234567890',
        email: 'svineth.face@gmail.com',
        github: 'technophilic',
        location: 'Chennai,India'
    },
    welcomeMessage: "Hi! I'm an enthusiastic web developer",
    skills: ['Javascript','TypeScript','Angular 2'],
    biopic: 'images/fry.jpg'
};

/**
 * @description A function to display the bio section of the resume
 */
bio.display=function () {
    var $header=$("#header");
    var $footerContacts=$('#footerContacts');
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMoblie = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var github= HTMLgithub.replace("%data%", bio.contacts.github);
    var location = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPicURL = HTMLbioPic.replace("%data%", bio.biopic);

    $header.prepend(formattedRole);
    $header.prepend(formattedName);
    $header.find('#topContacts').append(formattedMoblie);
    $header.find('#topContacts').append(formattedEmail);
    $header.find('#topContacts').append(github);
    $header.find('#topContacts').append(location);
    $footerContacts.append(formattedMoblie);
    $footerContacts.append(formattedEmail);
    $footerContacts.append(github);
    $footerContacts.append(location);
    $header.append(formattedPicURL);
    $header.append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $header.append(HTMLskillsStart);
        for(var i=0;i<bio.skills.length;i++)
        {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $header.append(formattedSkills);
        }
    }
};

// --------------Education Section------------------
var education={
    schools :[{
        name: 'VIT university',
        location:'Vellore institute of technology,Vellore,Tamil Nadu,India',
        degree: 'Bachelor',
        majors: ['Computer Science'],
        dates: ['2010-2014'],
        url: 'http://vit.ac.in'
    }],
    onlineCourses:[{
        title:'Front-end Nanodegree',
        school:'Udacity',
        dates:'2017',
        url:'https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/'
    }]
};

/**
 * @description A function to display the education section of the resume
 */
education.display = function () {

    var formattedHtml, edu;
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        // start the HTML
        for (var school in education["schools"]) {
            $("#education").append(HTMLschoolStart);
            if (education.schools.hasOwnProperty(school)) {
                formattedHtml = HTMLschoolName.replace("%data%", education.schools[school].name);
                formattedHtml = formattedHtml.replace("#", education.schools[school].url);
                $(".education-entry:last").append(formattedHtml+HTMLschoolDegree.replace("%data%", education.schools[school].degree));

                $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
                $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));

                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
            }
        }
        if (education["onlineCourses"].length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (course in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                if (education.onlineCourses.hasOwnProperty(course)) {
                    formattedHtml = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                    $(".education-entry:last").append(formattedHtml+HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school));
                    $(".education-entry:last").append(HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates));
                    $(".education-entry:last").append(HTMLonlineURL.replace('%data%', education.onlineCourses[course].url))
                }
            }
        }
    }
};

// --------------Work Section---------------------------
var work={
    jobs:[{
        employer:'GDGVIT',
        title:'Web Developer',
        location:'Vellore institute of technology,Vellore,Tamil Nadu,India',
        dates:'in progress',
        description:'Front-end Web Developer in GDGVIT'
    }]
};

/**
 * @description A function to display the work section of the resume
 */
work.display=function () {

    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        var formattedWorkDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkDescription);
    }
};

// --------------Projects Section--------------------------
var projects={
    projects:[{
        title:'MyVIT',
        dates:'2016-2017',
        description:'A chrome extension for the students of VIT university to check their attendance without having to login to the academic portal',
        images:['images/myVIT.png']
    },
    {
        title:'RoverX Website',
        dates:'2016-2017',
        description:'A website built for team roverX',
        images:['images/roverx.png']
    }]
};

/**
 * @description A function to display the projects section of the resume
 */
projects.display = function () {

    for (var project in projects.projects) {
        $('#projects').append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        for (var image in projects.projects[project].images) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }

};

// --------------Initialisation------------------

projects.display();
work.display();
education.display();
bio.display();
$('#mapDiv').append(googleMap);
$(document).click(function(loc){
    logClicks(loc.pageX,loc.pageY);
});