let storyBtn = document.getElementById("storyBtn");
let powersBtn = document.getElementById("powersBtn");
let weaknessBtn = document.getElementById("weaknessBtn");
let infoName = document.getElementById("infoName");
let kratosIMG = document.getElementById("KratosIMG");
let homeLink = document.getElementById("Home");
let characterLink = document.getElementById("Characters");
let contactUsLink = document.getElementById("ContactUs");
let lastRandomNum = 12;

homeLink.addEventListener('mouseover', function () {
    linkStyleHover("Home");
});
homeLink.addEventListener('mouseout', function () {
    linkStyleInitial("Home");
});


characterLink.addEventListener('mouseover', function () {
    linkStyleHover("Characters");
});
characterLink.addEventListener('mouseout', function () {
    linkStyleInitial("Characters");
});


contactUsLink.addEventListener('mouseover', function () {
    linkStyleHover("ContactUs");
});
contactUsLink.addEventListener('mouseout', function () {
    linkStyleInitial("ContactUs");
});



storyBtn.addEventListener('click', function () {
    changeInfoName("Dante");
    changeInfoText("infoText");
    activelink("storyBtn", "powersBtn", "weaknessBtn");
    document.getElementById("readMoreBtn").href = "https://devilmaycry.fandom.com/wiki/Dante";
})

powersBtn.addEventListener('click', function () {
    changeInfoName("Weapons");
    changeInfoText("infoText2");
    activelink("powersBtn", "storyBtn", "weaknessBtn");
    document.getElementById("readMoreBtn").href = "https://gamewith.net/devil-may-cry-5/article/show/8163#:~:text=Dante%27s%20Weapon%20List%20%26%20Upgrades%201%20Rebellion.%20Rebellion,...%209%20Coyote-A.%20...%2010%20Kalina%20Ann.%20";
})

weaknessBtn.addEventListener('click', function () {
    changeInfoName("Family");
    changeInfoText("infoText3");
    activelink("weaknessBtn", "storyBtn", "powersBtn");
    document.getElementById("readMoreBtn").href = "https://www.youtube.com/watch?v=U1TlVY3azzE";
})

kratosIMG.addEventListener('mouseover', function () {
    imgStyle("KratosIMG", "scale(1.05)");
})
kratosIMG.addEventListener('mouseout', function () {
    imgStyle("KratosIMG", "scale(1.0)");
})


//-----------------------Functions-----------------------------//

function changeInfoName(title) {
    infoName.textContent = title;
}
function changeInfoText(id) {
    document.getElementById("infoText").style.display = "none";
    document.getElementById("infoText2").style.display = "none";
    document.getElementById("infoText3").style.display = "none";
    document.getElementById(id).style.display = "block";
}

function imgStyle(imgId, scale) {
    document.getElementById(imgId).style.transform = scale;
    document.getElementById(imgId).style.transition = "900ms";
}

function activelink(activeId, noactive1, noactive2) {

    document.getElementById(activeId).style.borderColor = "#00A5FF";
    document.getElementById(activeId).style.boxShadow = "0px 0px 10px #00A5FF";

    document.getElementById(noactive1).setAttribute('style', "");

    document.getElementById(noactive2).setAttribute('style', "");
}

function linkStyleHover(id) {
    let link = document.getElementById(id);
    link.style.textDecoration = "2px underline";
    link.style.textUnderlineOffset = "10px";
    link.style.transition = "350ms";
    link.style.transform = "translateY(-5px)";
    link.style.opacity = "100%";
}
function linkStyleInitial(id) {
    let link = document.getElementById(id);
    link.style.textDecoration = "none";
    link.style.transition = "350ms";
    link.style.transform = "translateY(0px)";
    link.style.opacity = "60%";
}

characterLink.addEventListener('click', function () {
    // random number between 1 and 3
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let aLink = document.getElementById("charactersLink");

    if (lastRandomNum != randomNum) {
        if (randomNum == 1) {
            aLink.setAttribute('href', "KratosPage.html");
        }
        else if (randomNum == 2) {
            aLink.setAttribute('href', "KirbyPage.html");
        }
        else if (randomNum == 3) {
            aLink.setAttribute('href', "Dante.html");
        }
    }

    lastRandomNum = randomNum;

});

function chgImg(pic1) {

    document.getElementById('KratosIMG').src = pic1;

}

let rebellion = document.getElementById('rebellion');
rebellion.addEventListener("mouseover", function () { chgImg("img/Rebellion_DMC.png") });
rebellion.addEventListener("mouseout", function () { chgImg("img/DMC3Dante.png") });

let ebony = document.getElementById('ebony&ivory');
ebony.addEventListener("mouseover", function () { chgImg("img/ebony-ivory.png") });
ebony.addEventListener("mouseout", function () { chgImg("img/DMC3Dante.png") });

let sparda = document.getElementById('sparda');
sparda.addEventListener("mouseover", function () { chgImg("img/sparda.png") });
sparda.addEventListener("mouseout", function () { chgImg("img/DMC3Dante.png") });

let vergil = document.getElementById('vergil');
vergil.addEventListener("mouseover", function () { chgImg("img/DMC3Vergil.png") });
vergil.addEventListener("mouseout", function () { chgImg("img/DMC3Dante.png") });

let nero = document.getElementById('nero');
nero.addEventListener("mouseover", function () { chgImg("img/DMC5Nero.png") });
nero.addEventListener("mouseout", function () { chgImg("img/DMC3Dante.png") });