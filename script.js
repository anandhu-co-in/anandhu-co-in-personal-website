
var message = [
    ["Inner HTML", "Message 2"],
    [1,2,4,5],
    [6,7,8,9]
    [10,11,12,14]
  ];

var i=0



var f1 = document.getElementsByClassName('skillbox')[0];
var f2 = document.getElementsByClassName('skillbox')[1];
var f3 = document.getElementsByClassName('skillbox')[2];

var msg=document.getElementsByClassName("skillpoints")[0]

var fun=function(){
    document.getElementsByClassName("skillpoints")[0].innerHTML = "Hover on the tiles for deatils";

}

var hidetimer=window.setInterval(fun,1000)


f1.onmouseover = function(e) {
    
    clearInterval(hidetimer);
      
   msg.innerHTML = "I have 3.5 Years of Industry Experience in Manual & Automation Testing of Web & Mobile Applications.<br/>Have worked on Selenium, Java, TestNG, Appium, Jira, qTest, Perfecto and Cucumber";

   msg.classList.add("fullOpacity")


};

f2.onmouseover = function(e) {
    
    clearInterval(hidetimer);
    msg.classList.add("fullOpacity")
      
   msg.innerHTML = "Certified RPA Developer. Experienced in developing Process Automation Solutions using UiPath, BluePrism and Selenium";

};

f3.onmouseover = function(e) {
    
   clearInterval(hidetimer);
   msg.classList.add("fullOpacity")
      
   msg.innerHTML = "Self learned MERN Stack Developer. Have self learned knowledge in HTML, CSS, JavaScript, NodeJS, ReactJS, ExpressJS, Redux, PHP & UI/UX Designing <br/>Please check Featured section of my linkedin profile for links to some of my live hosted projects";

};



f1.onmouseout = f2.onmouseout = f3.onmouseout = function(e) {

    hidetimer = setInterval(fun, 1000);
    msg.classList.remove("fullOpacity")

    // document.getElementsByClassName("skillpoints")[0].innerHTML = "Hover on the tiles for deatils"

};


function showSite(params) {

    var body = document.getElementsByTagName('body')[0]
    body.classList.add("showSite")
    console.log("Website loaded")
}