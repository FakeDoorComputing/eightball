var ranNum, textBoxVal, paused=false;
var answers=["It is certain","It is decidedly so","Without a doubt","Yes definitely","You may rely on it","As I see it, yes","Most likely",
"Outlook good","Yes","Signs point to yes","Reply hazy try again","Ask again later","Better not tell you now","Cannot predict now",
"Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"];

//cordova device ready
$(document).on("deviceready",function(){

//html device ready
//$("document").ready(function(){

  // add event listeners for pause and resume
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);

  // add event listener for onShake
  shake.startWatch(onShake, 40);

  // add event listener for when the button is pressed
  $("#btn").on("tap",function(){
    runNow()
  });

  // tell onShake what to do when a shake is detected
	var onShake=function(){
    if(!paused){
      runNow()
    };
  };
});

function onPause(){
	paused=true;
};
function onResume(){
	paused=false;
};

function runNow(){
  //get the textBox contents
  textBoxVal=$("#textBox").val();
  //if the textbox is blank, ask for a question
  if(textBoxVal==""){
    $("#question").text("");
    $("#answer").text("Please ask me a question");
  };
  // if the textbox is not blank, choose a number between 0-19 and display the corresponding array answer
  if(textBoxVal!=""){
    ranNum=Math.round(Math.random()*20);
    $("#question").fadeOut("slow",function(){
      /*if the answer is positive*/
      if(ranNum<11){
        navigator.notification.beep(1);
      };
      /*if the answer is neutral*/
      if(ranNum>10&&ranNum<16){
        navigator.notification.beep(1);
        navigator.vibrate(250);
      };
      /*if the answer is negative*/
      if(ranNum>15){
        navigator.vibrate([250,250]);
      };
      $("#question").text(textBoxVal).fadeIn("slow")
    });
    $("#textBox").val("");
    $("#answer").fadeOut("slow",function(){
      $("#answer").text(answers[ranNum]).fadeIn("slow");
    });
  };
};
