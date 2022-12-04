function countDownTimer(){
    //this function will make the timer gown down from 50 to 0 by incriments of 5 seconds
    console.log("countdownTimer() started");
    var currentTime = 50;
    document.getElementById("timeText").innerHTML = currentTime + " seconds";
    //45 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },5000)
    //40 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },10000)
    //35 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },15000)
    //30 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },20000)
    //25 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },25000)
    //20 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },30000)
    //15 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },35000)
    //10 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },40000)
    //5 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },45000)
    //set text to say blastoff
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = "Blastoff!";
    },50000)
    
}

function playCraps(){
    //troubleshooting playCraps() function
    console.log("begun playing craps")

    var die1 = 0;
    var die2 = 0;

    die1 = Math.ceil(6*Math.random());
    die2 = Math.ceil(6*Math.random());

    //console.log(die1)
    //console.log(die2)

    document.getElementById("die1Res").innerHTML = "The result of die 1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "The result of die 2 is: " + die2;

    var sum = die1 + die2;
    if(sum == 7 || sum == 11){
        document.getElementById("gameRes").innerHTML = "you lose";
    }else if(die1 % 2 == 0 && die1 == die2){
        document.getElementById("gameRes").innerHTML = "you win!";
    }else{
        document.getElementById("gameRes").innerHTML = "no winner";
    }
}