let lastRandomNum = 12;

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
            aLink.setAttribute('href',"#Dante");
        }
    }

    lastRandomNum = randomNum;

});

//------ get rid of blue borders which browser adds when onfocus--------

let inputBox = document.getElementsByTagName("input");
let textareaBox = document.getElementById("message");

for(let i = 0; i < inputBox.length; i++){
    inputBox[i].addEventListener('focus',function(){
        inputBoxfocus(inputBox[i]);
    })
}

textareaBox.addEventListener('focus',function(){
    inputBoxfocus(textareaBox);
})

function inputBoxfocus(tag){
    tag.style.outline = "none";
}

//--------------------- submit btn-----------------------------

let submitBtn = document.getElementById("SubmitBtn");

//--------------------- submit hover style-----------------------------

submitBtn.onmouseover = function(){
    submitBtn.style.transform = "scale(1.02)";
    submitBtn.style.transition = "200ms";
    submitBtn.style.backgroundColor = "rgb(80, 80, 80)";
    submitBtn.style.color = "white";
}
submitBtn.onmouseout = function(){
    submitBtn.setAttribute('style',"");
}

//--------------------- submit Message-----------------------------

submitBtn.onclick = function (){
    
    document.getElementById("formTag").style.display = "none";

    let inputBoxes = document.getElementsByClassName("input");
    for(let i = 0; i< inputBoxes.length; i++){
        inputBoxes[i].value="";
    }
    textareaBox.value="";

    let newDiv = document.createElement("div");
    newDiv.style.padding = "227.7px 25%";
    newDiv.style.justifyContent = "center";

    let newH1 = document.createElement("h1");
    newH1.style.color = "white";
    newH1.style.textAlign = "center";
    newH1.textContent = "Thank You !";

    let newP = document.createElement("p");
    newP.style.color = "white";
    newP.style.textAlign = "center";

    let newTextNode1 = document.createTextNode("Thank you for contacting us. We will respond to you ");
    let newTextNode2 = document.createTextNode("through email within seven days, so please");
    let newTextNode3 = document.createTextNode(" keep an eye on your mailbox.");
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");

    newP.appendChild(newTextNode1);
    newP.appendChild(br1);
    newP.appendChild(newTextNode2);
    newP.appendChild(br2);
    newP.appendChild(newTextNode3);

    let parenDiv = document.getElementById("parentDiv");

    newDiv.appendChild(newH1);
    newDiv.appendChild(newP);
    parenDiv.appendChild(newDiv);

    setTimeout(function(){
        
        newDiv.removeChild(newH1);
        newDiv.removeChild(newP);
        parenDiv.removeChild(newDiv);

        let form = document.getElementById("formTag");
        form.style.display="block";

    },10000); 

}

