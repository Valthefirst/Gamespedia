let storyBtn = document.getElementById("storyBtn");
let powersBtn = document.getElementById("powersBtn");
let weaknessBtn = document.getElementById("weaknessBtn");
let infoName = document.getElementById("infoName");
let kirbyIMG = document.getElementById("KirbyIMG");
let homeLink = document.getElementById("Home");
let characterLink = document.getElementById("Characters");
let contactUsLink = document.getElementById("ContactUs");
let lastRandomNum = 12;

homeLink.addEventListener('mouseover',function(){
    linkStyleHover("Home");
});
homeLink.addEventListener('mouseout',function(){
    linkStyleInitial("Home");
});


characterLink.addEventListener('mouseover',function(){
    linkStyleHover("Characters");
});
characterLink.addEventListener('mouseout',function(){
    linkStyleInitial("Characters");
});


contactUsLink.addEventListener('mouseover',function(){
    linkStyleHover("ContactUs");
});
contactUsLink.addEventListener('mouseout',function(){
    linkStyleInitial("ContactUs");
});



storyBtn.addEventListener('click', function(){
    changeInfoName("Kirby");
    changeInfoText("infoText");
    activelink("storyBtn","powersBtn","weaknessBtn");
    document.getElementById("readMoreBtn").href = "https://kirby.fandom.com/wiki/Kirby";
})

powersBtn.addEventListener('click',function(){
    changeInfoName("Powers");
    changeInfoText("infoText2");
    activelink("powersBtn","storyBtn","weaknessBtn");
    document.getElementById("readMoreBtn").href = "https://kirby.fandom.com/wiki/Kirby#Abilities";
})

weaknessBtn.addEventListener('click',function(){
    changeInfoName("Weakness");
    changeInfoText("infoText3");
    activelink("weaknessBtn","storyBtn","powersBtn");
    document.getElementById("readMoreBtn").href = "https://kirby.fandom.com/wiki/Kirby";
})

kirbyIMG.addEventListener('mouseover',function(){
    imgStyle("KirbyIMG","scale(1.05)");
})
kirbyIMG.addEventListener('mouseout',function(){
    imgStyle("KirbyIMG","scale(1.0)");
})


//-----------------------Functions-----------------------------//

function changeInfoName(title){
    infoName.textContent = title;
}
function changeInfoText(id){
    document.getElementById("infoText").style.display="none";
    document.getElementById("infoText2").style.display="none";
    document.getElementById("infoText3").style.display="none";
    document.getElementById(id).style.display="block";
}

function imgStyle(imgId,scale){
    document.getElementById(imgId).style.transform = scale;
    document.getElementById(imgId).style.transition = "900ms";
}

function activelink(activeId,noactive1,noactive2){
    
    document.getElementById(activeId).style.borderColor = "#FFDC00";
    document.getElementById(activeId).style.boxShadow = "0px 0px 10px #FFDC00";
    
    document.getElementById(noactive1).setAttribute('style',"");
    
    document.getElementById(noactive2).setAttribute('style',"");
}

function linkStyleHover (id) {
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

characterLink.addEventListener('click',function(){
    // random number between 1 and 3
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let aLink = document.getElementById("charactersLink");
    
    if(lastRandomNum != randomNum){
        if(randomNum == 1){
            aLink.setAttribute('href',"KratosPage.html");
        }
        else if(randomNum == 2){
            aLink.setAttribute('href',"KirbyPage.html");
        }
        else if(randomNum == 3){
            aLink.setAttribute('href',"Dante.html");
        }
    }

    lastRandomNum = randomNum;

});



