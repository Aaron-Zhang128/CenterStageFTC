//let minimum = 0;
//let maximum = 100;
//let counter=0;
//
////makes sure everything is where it should be (invisible or not)
//

//
//const crypto = require("crypto");
//crypto.randomBytes(16).toString("base64");
//// '8IBTHwOdqNKAWeK17p1t8g==;'
//
//document.getElementById('score').addEventListener('click', score());
////document.getElementById('score').addEventListener('click', score());

window.onload = function() {
    document.getElementById("playAgain").style.display="none";
    document.getElementById("quit").style.display="none";
    document.getElementById("gameQuit").style.display="none"; 
}

function reload(){
    window.location.reload();
}

// AUTHOR AZ


// Find the button element by its ID

// Define the 'clock' function


function score(){
    let redAuto = 0;
    let blueAuto = 0;

    
    let number = parseInt(document.getElementById("autoScore1").value);
    blueAuto = blueAuto + number * 0;
    number = parseInt(document.getElementById("autoScore2").value);
    blueAuto = blueAuto + number * 10;
    number = parseInt(document.getElementById("autoScore3").value);
    blueAuto = blueAuto + number * 20;
    
    number = parseInt(document.getElementById("autoScore4").value);
    blueAuto = blueAuto + number * 0;
    number = parseInt(document.getElementById("autoScore5").value);
    blueAuto = blueAuto + number * 10;
    number = parseInt(document.getElementById("autoScore6").value);
    blueAuto = blueAuto + number * 20;
    
    number = parseInt(document.getElementById("autoScore7").value);
    blueAuto = blueAuto + number * 3;
    number = parseInt(document.getElementById("autoScore8").value);
    blueAuto = blueAuto + number * 5;

    
//    let temporary = document.getElementsByName(1).value;
//    console.log(temporary);
//    
    let blue = document.getElementsByName("blue1");
    let counter = 1;
    
    for (const check of blue) {
        if (check.checked) {
            if(counter == 1){
                blueAuto = blueAuto + 5;
            }
            if(counter == 2){
                blueAuto = blueAuto + 0;
            }
            
        }
        counter = counter + 1
    }
    
    blue = document.getElementsByName("blue2");
    counter = 1;
    
    for (const check of blue) {
        if (check.checked) {
            if(counter == 1){
                blueAuto = blueAuto + 5;
            }
            if(counter == 2){
                blueAuto = blueAuto + 0;
            }
            
        }
        counter = counter + 1
    }
    
    number = parseInt(document.getElementById("driverScore1").value);
    blueAuto = blueAuto + number;
    number = parseInt(document.getElementById("driverScore2").value);
    blueAuto = blueAuto + number*3;
    number = parseInt(document.getElementById("driverScore3").value);
    blueAuto = blueAuto + number*10;
    number = parseInt(document.getElementById("driverScore4").value);
    blueAuto = blueAuto + number*10;
//    
//    number = parseInt(document.getElementById("endScore1").value);
//    blueAuto = blueAuto + number;
//    number = parseInt(document.getElementById("endScore2").value);
//    blueAuto = blueAuto + number;
//    number = parseInt(document.getElementById("endScore3").value);
//    blueAuto = blueAuto + number;
    
    
    blue = document.getElementsByName("blue3");
    counter = 0;
    
    for (const check of blue) {
        if (check.checked) {
            if(counter == 1){
                blueAuto = blueAuto + 0;
            }
            if(counter == 2){
                blueAuto = blueAuto + 30;
            }
            
            if(counter == 3){
                blueAuto = blueAuto + 20;
            }
            if(counter == 4){
                blueAuto = blueAuto + 10;
            }
        }
        counter = counter + 1
    }
    
    
    
    blue = document.getElementsByName("blue4");
    counter = 0;
    
    for (const check of blue) {
        if (check.checked) {
            if(counter == 1){
                blueAuto = blueAuto + 20;
            }
            if(counter == 2){
                blueAuto = blueAuto + 5;
            }
            if(counter == 3){
                blueAuto = blueAuto + 20;
            }
            if(counter == 4){
                blueAuto = blueAuto + 10;
            }
            
        }
        counter = counter + 1
    }
    
    counter = 1
    blue = document.getElementsByName("blue5");
    for (const check of blue) {
        if (check.checked) {
            if(counter == 1){
                blueAuto = blueAuto + 20;
            }
            if(counter == 2){
                blueAuto = blueAuto + 5;
            }
            

        }
        counter = counter + 1
    }
    counter = 1
    blue = document.getElementsByName("blue6");
    for (const check of blue) {
        if (check.checked) {
            if(counter == 1){
                blueAuto = blueAuto + 20;
            }
            if(counter == 2){
                blueAuto = blueAuto + 5;
            }
            

        }
        counter = counter + 1
    }
    
    
    // ------------------------------
     // ------------------------------
     // ------------------------------
     // ------------------------------
     // ------------------------------
    
    
    number = parseInt(document.getElementById("RautoScore1").value);
    redAuto = redAuto + number * 0;
    number = parseInt(document.getElementById("RautoScore2").value);
    redAuto = redAuto + number * 10;
    number = parseInt(document.getElementById("RautoScore3").value);
    redAuto = redAuto + number * 20;
    
    number = parseInt(document.getElementById("RautoScore4").value);
    redAuto = redAuto + number * 0;
    number = parseInt(document.getElementById("RautoScore5").value);
    redAuto = redAuto + number * 10;
    number = parseInt(document.getElementById("RautoScore6").value);
    redAuto = redAuto + number * 20;
    
    number = parseInt(document.getElementById("RautoScore7").value);
    redAuto = redAuto + number * 3;
    number = parseInt(document.getElementById("RautoScore8").value);
    redAuto = redAuto + number * 5;
    
    
    
    blue = document.getElementsByName("red5");
    counter = 1;
    
    for (const check of blue) {
        if (check.checked) {
            if(counter == 1){
                redAuto = redAuto + 5;
            }
            if(counter == 2){
                redAuto = redAuto + 0;
            }
            
        }
        counter = counter + 1
    }
    blue = document.getElementsByName("red6");
    counter = 1;
    
    for (const check of blue) {
        if (check.checked) {
            if(counter == 1){
                redAuto =redAuto + 5;
            }
            if(counter == 2){
                redAuto = redAuto + 0;
            }
            
        }
        counter = counter + 1
    }
    
    
    
    
    
    
    number = parseInt(document.getElementById("RdriverScore1").value);
    redAuto = redAuto + number;
    number = parseInt(document.getElementById("RdriverScore2").value);
    redAuto= redAuto + number*3;
    number = parseInt(document.getElementById("RdriverScore3").value);
    redAuto = redAuto + number*10;
    number = parseInt(document.getElementById("RdriverScore4").value);
    redAuto = redAuto + number*10;
    
//    number = parseInt(document.getElementById("RendScore1").value);
//    redAuto = redAuto + number;
//    number = parseInt(document.getElementById("RendScore1").value);
//    redAuto= redAuto + number;
//    number = parseInt(document.getElementById("RendScore1").value);
//    redAuto = redAuto + number;
    
    blue = document.getElementsByName("red7");
    counter = 0;
    for (const check of blue) {
        if (check.checked) {
            if(counter == 1){
                redAuto = redAuto + 0;
            }
            if(counter == 2){
                redAuto = redAuto + 30;
            }
            if(counter == 3){
                redAuto = redAuto + 20;
            }
            if(counter == 4){
                redAuto = redAuto + 10;
            }
        }
        counter = counter + 1
    }
    blue = document.getElementsByName("red8");
    counter = 0;
    
    for (const check of blue) {
        if (check.checked) {
            if(counter == 1){
                redAuto = redAuto + 0;
            }
            if(counter == 2){
                redAuto = redAuto + 30;
            }
            if(counter == 3){
                redAuto = redAuto + 20;
            }
            if(counter == 4){
                redAuto = redAuto + 10;
            }
            
        }
        counter = counter + 1
    }
    
    counter = 1
    blue = document.getElementsByName("red9");
    for (const check of blue) {
        if (check.checked) {
            if(counter == 1){
                redAuto = redAuto + 20;
            }
            if(counter == 2){
                redAuto = redAuto + 5;
            }
            

        }
        counter = counter + 1
    }
    counter = 1
    blue = document.getElementsByName("red10");
    for (const check of blue) {
        if (check.checked) {
            if(counter == 1){
                redAuto = redAuto + 20;
            }
            if(counter == 2){
                redAuto = redAuto + 5;
            }
            

        }
        counter = counter + 1
    }
//    console.log(number);
    let para = document.getElementById("resultRed");
    para.innerHTML= redAuto; 
    
    let para2 = document.getElementById("resultBlue");
    para2.innerHTML= blueAuto; 
    
    
    
    
    
    
}

function clock(){
    var audio = document.getElementById("audio");
    audio.play();
    let para3 = "";
    let minute = 0;
    let sec = 3;
    let iteration = 0
    let timer = setInterval(function(){
        if (sec < 3){
            document.getElementById('safeTimerDisplay').innerHTML=String(minute)+":0"+sec;
        }
        else if (sec < 10){
            document.getElementById('safeTimerDisplay').innerHTML=String(minute)+":0"+sec;
        }
        else{
            document.getElementById('safeTimerDisplay').innerHTML=String(minute)+":"+sec;
        }
        
        sec--;
        if (sec < 0) {
//            clearInterval(timer);
            
            if (iteration == 0){
                sec = 30
                minute = 2;
                iteration = iteration + 1;
            }
            else if (iteration == 1){
                sec = 6
                minute = 0;
                iteration = iteration + 1;
            }
            else if (iteration == 2){
                sec = 59
                minute = 1;
                iteration = iteration + 1;
            }
            else if (iteration == 3){
                sec = 59
                minute = 0;
                iteration = iteration + 1;
            }
            else if (iteration == 4){
                sec = 0
                minute = 0;
                return 0;
                
            }
//            if (iteration == 2) and (sec == 0){
//                sec = 0;
//            }
        }
//        para3 = document.getElementById("display");
//        para3.innerHTML = sec;
   
    }, 1000); 
    

}



function dice(){
    let diceRoll = Math.floor( Math.random() * 6 ) +1;
    document.getElementById('diceDisplay').innerHTML= diceRoll; 
    console.log("Dice roll:", diceRoll);
}