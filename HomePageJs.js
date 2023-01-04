let lastRandomNum = 12;
//---------- learn more btn style --------------------

let learnMoreBtn = document.getElementById("learnMoreBtn");
learnMoreBtn.onmouseover = function(){
    learnMoreBtn.style.backgroundColor = "rgb(178, 0, 0)";
}
learnMoreBtn.onmouseout = function(){
    learnMoreBtn.setAttribute('style',"");
}

//---------- link hover style --------------------

let homeLink = document.getElementById("Home");
homeLink.addEventListener('mouseover',function(){
    linkStyleHover("Home");
});
homeLink.addEventListener('mouseout',function(){
    linkStyleInitial("Home");
});

let characterLink = document.getElementById("Characters");
characterLink.addEventListener('mouseover',function(){
    linkStyleHover("Characters");
});
characterLink.addEventListener('mouseout',function(){
    linkStyleInitial("Characters");
});

let contactUsLink = document.getElementById("ContactUs");
contactUsLink.addEventListener('mouseover',function(){
    linkStyleHover("ContactUs");
});
contactUsLink.addEventListener('mouseout',function(){
    linkStyleInitial("ContactUs");
});

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


//------ Random page when characters link is clicked ------

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

//---------- Character brightness fade --------------------
let cardContainer = document.getElementById("cardContainer");
cardContainer.addEventListener('mouseover',function(){
    document.getElementById('cardContainer').style.filter = "brightness(100%)";
    document.getElementById("cardContainer").style.boxShadow = "20px 20px 20px rgba(86, 86, 86, 0.575)";
    
})
cardContainer.addEventListener('mouseout',function(){
    document.getElementById('cardContainer').style.filter = "brightness(75%)";
    document.getElementById("cardContainer").style.boxShadow = "none";
})
document.get

//---------- Next Character function --------------------
let nextBtn = document.getElementById("NBtn");
nextBtn.addEventListener('click', nextChracter);

nextBtn.addEventListener('mouseover', function(){
    document.getElementById("NBtn").style.boxShadow = "10px 10px 10px gray";
    document.getElementById("NBtn").style.transform= "translateY(-10px)";
})
nextBtn.addEventListener('mouseout', function(){
    document.getElementById("NBtn").style.boxShadow = "none";
    document.getElementById("NBtn").style.transform= "translateY(0px)";
})

let count = 0;
function nextChracter(){
    count++;
    let C_Name = document.getElementById("C_Name");
    let C_IMG = document.getElementById("C_IMG");

    if(count == 0){
        document.getElementById("characterLinkPage").href = "KratosPage.html";
        C_IMG.setAttribute('src',"img/kratos.jpeg");
        C_Name.textContent = "Kratos";
    }
    else if(count == 1){
        document.getElementById("characterLinkPage").href = "KirbyPage.html";
        C_IMG.setAttribute('src',"img/kirby.jpeg");
        C_Name.textContent = "Kirby";
    }
    else if(count == 2){
        document.getElementById("characterLinkPage").href = "Dante.html";
        C_IMG.setAttribute('src',"img/Dante.jpeg");
        C_Name.textContent = "Dante";
    }

    if(count > 2){
        document.getElementById("characterLinkPage").href = "KratosPage.html";
        C_IMG.setAttribute('src',"img/Kratos.jpeg");
        C_Name.textContent = "Kratos";
        count = 0;
    }
}

//---------- Previous Character function ----------------
let previousBtn = document.getElementById("PBtn");
previousBtn.addEventListener('click', previousChracter);

previousBtn.addEventListener('mouseover', function(){
    document.getElementById("PBtn").style.boxShadow = "10px 10px 10px gray";
    document.getElementById("PBtn").style.transform = "translateY(-10px)";
})
previousBtn.addEventListener('mouseout', function(){
    document.getElementById("PBtn").style.boxShadow = "none";
    document.getElementById("PBtn").style.transform= "translateY(0px)";
})

function previousChracter(){
    let C_Name = document.getElementById("C_Name");
    let C_IMG = document.getElementById("C_IMG");
    let CharacterLinkPage = document.getElementById("CharacterLinkPage");
    count--;

    if(count == (-1)){
        document.getElementById("characterLinkPage").href = "Dante.html";
        C_IMG.setAttribute('src',"img/Dante.jpeg");
        C_Name.textContent = "Dante";
    }
    else if(count == (-2)){
        document.getElementById("characterLinkPage").href = "KirbyPage.html";
        C_IMG.setAttribute('src',"img/kirby.jpeg");
        C_Name.textContent = "Kirby";
    }

    else if(count < (-2)){
        count = 0;
        document.getElementById("characterLinkPage").href = "KratosPage.html";
        C_IMG.setAttribute('src',"img/Kratos.jpeg");
        C_Name.textContent = "Kratos";
    }

    else if(count == 0){
        document.getElementById("characterLinkPage").href = "KratosPage.html";
        C_IMG.setAttribute('src',"img/kratos.jpeg");
        C_Name.textContent = "Kratos";
    }
    else if(count == 1){
        document.getElementById("characterLinkPage").href = "KirbyPage.html";
        C_IMG.setAttribute('src',"img/kirby.jpeg");
        C_Name.textContent = "Kirby";
    }
    else if(count == 2){
        document.getElementById("characterLinkPage").href = "Dante.html";
        C_IMG.setAttribute('src',"img/Dante.jpeg");
        C_Name.textContent = "Dante";
    }

    else if(count > 2){
        document.getElementById("characterLinkPage").href = "KratosPage.html";
        C_IMG.setAttribute('src',"img/Kratos.jpeg");
        C_Name.textContent = "Kratos";
        count = 0;
    }
}
