var ranNum, textBoxVal,paused=false;
var answers=["It is certain","It is decidedly so","Without a doubt","Yes definitely","You may rely on it","As I see it, yes","Most likely",
"Outlook good","Yes","Signs point to yes","Reply hazy try again","Ask again later","Better not tell you now","Cannot predict now",
"Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"];

$(document).on("deviceready",function(){
  
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);

  
    $("#btn").on("tap",runNow());
	var onShake=function(){runNow()};
	function runNow(){
		if(!paused){
			textBoxVal=$("#textBox").val();
			if(textBoxVal==""){
				$("#question").text("");
				$("#answer").text("Please ask me a question");
			}
			if(textBoxVal!=""){
				ranNum=Math.round(Math.random()*20);
				$("#question").fadeOut("slow",function(){
					if(ranNum<11){
						navigator.notification.beep(1);
					};
					if(ranNum>10&&ranNum<16){
						navigator.notification.beep(1);
						navigator.vibrate(250);
					};
					if(ranNum>15){
						navigator.vibrate([250,250]);
					};
					$("#question").text(textBoxVal).fadeIn("slow")
				});
				$("#textBox").val("");
				$("#answer").fadeOut("slow",function(){
					$("#answer").text(answers[ranNum]).fadeIn("slow");
				});
			}
		}
    });
});

	function onPause(){
		paused=true;
	};
	function onResume(){
		paused=false;
	};
