//For projects.html
let projects = [   
    {
        "projectTitle": "UAVs @ Berkeley Website",
        "projectDescription": "I designed and coded an event website for Berkeley's drone club. You can interact with it at: <a class='project-link' href='https://uav.berkeley.edu/western-drone-race/'>https://uav.berkeley.edu/western-drone-race/</a>",
        "url": "https://uav.berkeley.edu/western-drone-race/",
        "coverImage": "assets/img/uav.png",
        "category": "design",
        "id": "uav"
    },
    {
        "projectTitle": "Headphone Research",
        "projectDescription": "I researched different headphones and created an infographic about it",
        "url": "",
        "coverImage": "assets/img/headphones1.png",
        "category": "design",
        "id": "headphone"
    },
    {
        "projectTitle": "Bucket",
        "projectDescription": "I made a satirical graphic about 'kicking the bucket'",
        "url": "",
        "coverImage": "assets/img/Bucket.png",
        "category": "design",
        "id": "bucket"
    },
    {
        "projectTitle": "Web Infographic",
        "projectDescription": "I made an infographic to help non-coders understand HTML/CSS/JS",
        "url": "",
        "coverImage": "assets/img/Website-Infographic@1x.png",
        "category": "design", 
        "id": "web-info"
    },
    {
        "projectTitle": "YouTube Clone",
        "projectDescription": "I made a copy of YouTube\'s homepage from scratch using HTML+CSS.",
        "url": "lucy-xiao.github.io/youtube",
        "coverImage": "assets/img/youtube.png",
        "category": "code",
        "id": "youtube"
    }
];

for (let project of projects) {
  console.log(project);
  $(".project-wrapper").append("<div class='project-container'><div class='project-thumbnail picture' id='" + project["id"] + "'></div>" + "<div class='project-thumbnail overlay'>" + "<div class='project-thumbnail overlay-text-container'><div class='project-thumbnail overlay-title'>" + project["projectTitle"] + "</div>" + "<div class='project-thumbnail overlay-description'>" + project["projectDescription"] + "</div></div></div></div>");
  $("#" + project["id"]).css("background-image", 'url("' + project["coverImage"] + '") ' );
}

