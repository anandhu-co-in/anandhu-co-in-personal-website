var f1 = document.getElementsByClassName('skillbox')[0];
var f2 = document.getElementsByClassName('skillbox')[1];
var f3 = document.getElementsByClassName('skillbox')[2];

var msg=document.getElementsByClassName("skillpoints")[0]

var fun=function(){
    // document.getElementsByClassName("skillpoints")[0].innerHTML = "Hover on the tiles for deatils";
}

var hidetimer=window.setInterval(fun,1000)

f1.onmouseover = function(e) {
    clearInterval(hidetimer);
    msg.innerHTML = "I have 3.7 Years of Industry Experience in Manual & Automation Testing of Web & Mobile Applications.<br/>Have worked on Selenium, Java, TestNG, Appium, Jira, qTest, Perfecto and Cucumber.";
    msg.classList.add("fullOpacity")
};

f2.onmouseover = function(e) {
    clearInterval(hidetimer);
    msg.classList.add("fullOpacity")  
    msg.innerHTML = "Certified RPA Developer.<br/>Experienced in developing Process Automation Solutions using UiPath, BluePrism and Selenium.";
};

f3.onmouseover = function(e) {
   clearInterval(hidetimer);
   msg.classList.add("fullOpacity")
   msg.innerHTML = "Self learned MERN Stack Developer through Debug Media & Brototype.<br/>Have good knowledge in HTML, CSS, JavaScript, NodeJS, ReactJS, ExpressJS, Redux, PHP & UI/UX Designing.";
};

f1.onmouseout = f2.onmouseout = f3.onmouseout = function(e) {
    hidetimer = setInterval(fun, 1000);
    msg.classList.remove("fullOpacity")
};

function showSite(params) {

    var body = document.getElementsByTagName('body')[0]
    body.classList.add("showSite")
    console.log("Website loaded")
    checkBotConnection()
}

array=[]

function ask(question){
    if (question == undefined) {
        return
    }
    array.push(["question",question])
    updateUi()
    showTypingDots()
    fetch(`https://anandhu-co-in-dl.herokuapp.com/ask/${question}`)
    .then(response => response.text())
    .then(data => {
        hideTypingDots()
        array.push(["response",data])
        setChatBotConnStatus(1)
        updateUi()
    })
    .catch(()=>{
        hideTypingDots()
        setChatBotConnStatus(0)
    });
}

var charbotdiv = document.getElementsByClassName('chatdisplayArea')[0];

function updateUi(){
    charbotdiv.innerHTML=""
    array.map((msg)=>{
        if (msg[0] =="question"){
            charbotdiv.innerHTML=charbotdiv.innerHTML+`<div class="question"> <i class="far fa-user"></i> ${msg[1]}</div>`
        }    
        if (msg[0] =="response"){
            charbotdiv.innerHTML=charbotdiv.innerHTML+`<div class="answer">${msg[1]} <i class="fas fa-robot"></i> </div>`
        }

    })
    // console.log(array)
    var elem = document.querySelector('.chatdisplayArea');
    elem.scrollTop = elem.scrollHeight;
}

function sendQuestion(){
    var askbox = document.getElementById("askbox");
    question=askbox.value.trim().toLowerCase().replaceAll('/','').replaceAll('\\','')
    if (question){
        ask(question)
        askbox.value=""
    }
}

var elem = document.querySelector('.chatdisplayArea');
elem.scrollTop = elem.scrollHeight;


function setChatBotConnStatus(status){
    var connectionStatus = document.querySelector('.connectionStatus');
    if(status==1){
        connectionStatus.innerHTML="<div class='status connected'>Online</div>"
    }
    else if(status==0){
        connectionStatus.innerHTML="<div class='status disconnected'>Connection failed</div>"
    }
    else{
        connectionStatus.innerHTML=""
    }
}

function checkBotConnection(){
    fetch(`https://anandhu-co-in-dl.herokuapp.com/ask/hi`)
    .then(response => response.text())
    .then(data => {
        setChatBotConnStatus(1)
    })
    .catch(()=>{
        setChatBotConnStatus(0)
    });
}

function resetChat(){
    array=[]
    updateUi()
    charbotdiv.innerHTML="Say hi!"
    setChatBotConnStatus(2)
    checkBotConnection()
}

var showHoverMsg=window.setInterval(function(){
    style = window.getComputedStyle(msg),
    opacity = style.getPropertyValue('opacity');
    if(opacity==0){
        msg.classList.add("fullOpacity")
        msg.innerHTML = "Hover over above tiles to show more details";
    }

},1000)


// Functions to show and hide the typing dots

var typingdotsDiv = document.getElementById("typing-dots");

function showTypingDots(){
    typingdotsDiv.innerHTML="<div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div>"
}

function hideTypingDots(){
    typingdotsDiv.innerHTML=""
}

// Page reload when clicking back button
// https://stackoverflow.com/questions/43043113/how-to-force-reloading-a-page-when-using-browser-back-button

  if(performance.navigation.type == 2){
    location.reload(true);
 }

