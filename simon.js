var buttonColor= new Array("red", "blue", "green", "yellow");
var gamePattern=new Array();
var userPattern=new Array();
var levelNo=0;
var  i=0;

$(document).keypress(function(){
    if(levelNo<=0){
        nextSequence();   
    }
});


function nextSequence(){
    var randomNum  = Math.floor(Math.random()*4);
    var randomColor= buttonColor[randomNum];
    gamePattern.push(randomColor);

    $("."+randomColor).fadeOut(100).fadeIn(100);

    var music= new Audio("sounds/"+randomColor+".mp3");
    music.play();

    levelNo+=1;
    $("h1").html("Level "+levelNo);    
}


$(".btn").click(function(){
    
    var userChosenColor= this.id;
    userPattern.push(userChosenColor);

    var clickSound= new Audio("sounds/"+ userChosenColor+".mp3");
    clickSound.play();

    $("#" + userChosenColor).addClass("pressed"); 

  setTimeout(function () {
    $("#" + userChosenColor).removeClass("pressed");
  }, 100);

  if(userPattern[i]==gamePattern[i]){
        i+=1;
  }
  else{
    gameOver();
    return 0;
  }

  if(userPattern.length==gamePattern.length){
    console.log(userPattern + gamePattern);
    i=0;
    userPattern=[];
    setTimeout(function(){
        nextSequence();
    },600);
  }

})




function gameOver(){
    $("body").addClass("gameOver");
    setTimeout(function(){
        $("body").removeClass("gameOver");
    },100);
    
    $("h1").html("Game Over! Press Any Key To Restart");

    gamePattern=[];
    userPattern=[];
    levelNo=0;

    var wrong=new Audio("sounds/wrong.mp3");
    wrong.play();
}

