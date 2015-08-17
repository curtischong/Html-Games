$( document ).ready(function() {
    var speach = 1;
    $("#ashar").on("click",function(){
        if(speach==1){
        alert("hi my name is ashar (click on me again)");
        }
        else if(speach==2){
            alert("you can move me around using wasd (keep clicking on me until i finish my instructions)");
        }
        else if(speach==3){
            alert("i can interact with stuff with my head using e (like half life)");
        }
        else if(speach==4){
            alert("this will alter my environment");
        }
        else if(speach==5){
            alert("my goal is to get my birthday cake! good luck");
        }
		else if (speach > 5){
			alert("instructions finished play the gameee!!!");
		}
        speach = speach +1;
    });
    var foundkey = false;
    var cakefound = false;
    var cakeplaced = false;
	var invert = false;
    $("#cake").hide();
    $("#happybday").hide();
    $(document).keypress(function(e) {
    if(e.which == 119 && invert == false) {
        $("#ashar").css("top", "-=50px");
    }
    else if(e.which == 97 && invert == false) {
        $("#ashar").css("left", "-=50px");
    }
    else if(e.which == 115 && invert == false) {
        $("#ashar").css("top", "+=50px");
    }
    else if(e.which == 100 && invert == false) {
        $("#ashar").css("left", "+=50px");
    }
    
	else if(e.which == 119 && invert == true) {
        $("#ashar").css("top", "+=50px");
    }
    else if(e.which == 97 && invert == true) {
        $("#ashar").css("left", "+=50px");
    }
    else if(e.which == 115 && invert == true) {
        $("#ashar").css("top", "-=50px");
    }
    else if(e.which == 100 && invert == true) {
        $("#ashar").css("left", "-=50px");
    }
	
    
    var asharposition = $("#ashar").offset();
    if(asharposition.top == 50 && asharposition.left == 1400 && e.which == 101){
     alert("you broke a cup and drowned to death");
        location.reload();
    }
       else if(asharposition.top == 100 && asharposition.left == 1350 && e.which == 101){
            alert("you look (not break) under the table and find a key");
            foundkey = true;
        }
       else if(asharposition.top == 50 && asharposition.left == 1500 && e.which == 101){
            alert("you look at the flowerpot and notice a note... it says 'random sticky note'");
        }
        else if(asharposition.top == 550 && asharposition.left == 300 && e.which == 101 && foundkey == true){
            alert("you open the door and find the cake!!!! but you don't know what to do with it");
            cakefound = true;
        }
        else if(asharposition.top == 550 && asharposition.left == 300 && e.which == 101){
            alert("this door needs a key");
        }
        else if(asharposition.top == 700 && asharposition.left == 350 && e.which == 101){
            alert("this is a doormat (hint place cake on top of table)");
        }
        else if(asharposition.top == 50 && asharposition.left == 1450 && e.which == 101 && cakefound == true && cakeplaced == true){
            alert("you eat the cake!!!!");
            $("#cake").show();
            $("body").css("background-color", "black");
            $("#happybday").show();
        }
        else if(asharposition.top == 50 && asharposition.left == 1450 && e.which == 101 && cakefound == true && cakeplaced == false){
            alert("you place the cake on the table");
            $("#cake").show();
            cakeplaced = true;
        }
		else if(asharposition.top == 500 && asharposition.left == 1200 && e.which == 101){
            alert("congrats you've just inverted your controls");
            invert = true;
        }
    });
});