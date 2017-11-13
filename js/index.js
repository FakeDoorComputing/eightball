$(document).on("pagecreate","#pageOne",function(){
  var ranNum, textBoxVal;
  var answers=["It is certain","It is decidedly so","Without a doubt","Yes definitely","You may rely on it","As I see it, yes","Most likely",
"Outlook good","Yes","Signs point to yes","Reply hazy try again","Ask again later","Better not tell you now","Cannot predict now",
"Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"];
    $("#btn").on("tap",function(){
      textBoxVal=$("#textBox").val();
      if(textBoxVal==""){
        $("#question").text("");
        $("#answer").text("Please ask me a question");
      }
      if(textBoxVal!=""){
        ranNum=Math.round(Math.random()*20);
        $("#question").fadeOut("slow",function(){
          $("#question").text(textBoxVal).fadeIn("slow")
        });
        $("#textBox").val("");
        $("#answer").fadeOut("slow",function(){
          $("#answer").text(answers[ranNum]).fadeIn("slow");
        });
      }
    });
});
