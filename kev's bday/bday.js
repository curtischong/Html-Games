$( document ).ready(function() {
    var count = 0;
    $("#whattodo").html("Welcome to my den!!!!! (click anywhere for more instructions)");
    $("#progressbar").hide();
    $(".tree").hide();
    $(".circuitchip").hide();
    //$("#body").hide();
    $("#happybirthday").hide();
    $("#lol").hide();
    $(document).on("click",function(){
        count++;
if(count == 1){
    $("#whattodo").html("you should be smarter than that kev, I just gave you a virus");
}else if(count == 2){
    alert("--------------------------MACafee:------------------------umm you've just recieved a virus would you like to scan you computer??")
}else if(count == 3){
    $("#whattodo").html(" : ) ");
}else if(count == 4){
    $("#whattodo").html(" you really need to stop saying yes. You've just given me permission to access your gmail ");
    $("#lol").show();
}else if(count == 5){
    $("#whattodo").html(" Hmmmm lets seeee. Ah yes Birthday July the 6th, ooooooo  looks like you've booked a flight to new york. sorry kev. that's why you get macs (thanks for the ad money)");
    $("#lol").hide();
}else if(count == 6){
    $("#whattodo").html("anyways, here's the deal");
}else if(count == 7){
    $("body").css("background-color","black");
    alert("--------------------------MACafee:------------------------malware protection activated. Virus deletion compleation 0%");
    $("#whattodo").html("WHAT! NOoooo. Stop it kev!!");
}else if(count == 8){
    $("#whattodo").html("Damnit, I don't have permission to shut down your anti-malware");
}else if(count == 9){
    confirm("ummm would you like to give me permission to your control panel???");
    $("#whattodo").html("");
}else if(count == 10){
     alert("--------------------------MACafee:------------------------transfer cancelled")
}else if(count == 11){
     alert("--------------------------MACafee:------------------------listen kev, I'm your computer. There isn't much time. You have to disable the attack While I hold him off");
}else if(count == 12){
    alert("--------------------------MACafee:---------------------------The bar below represents your hacking progress, sorry, I can't really talk now, I need to concentrate. Good luck");
    $("#progressbar").show();
    $("#progressbar").html("100%");
    count++;
}
    });
    
    var fourtrees = false;
    var progressbar = 0;
    var numoftreesleft = 4;
    $("#treecon").on("click",function(){
        if(count>12){
         $("#treecon").fadeOut();
            $(".tree").fadeIn();
            $(".tree").animate({top: '300px'});
            fourtrees = true;
        }
    });
    
    $(".tree").on("click",function(event){
        if(fourtrees == true){
            numoftreesleft = numoftreesleft-1;
           $(event.target).closest(".tree").fadeOut();
            progressbar = progressbar-5;
            $("#progressbar").html(progressbar + "%");
            $("#progressbar").css("width", $("#progressbar").width()-50 + "px");
            
            if(numoftreesleft == 0){
                $("#whattodo").html("NOOO kev, those trees were remanents of the treecraft days...");
            }
            if(numoftreesleft == 3){
                $("#whattodo").html("OUCH THAT HURT!!!!");
            }else if(numoftreesleft == 1){
                $("#whattodo").html("please no... I beg you");
            }
            
            
        }
    });
    seccount = 0;
    var promptcompleated = 0;
    var chip = false;
    var chipone = false;
    var chipgame = false;
    var chip3 = false;
    var chip4 = false;
    var chip5 = false;
    var chip6 = false;
    var chip7 = false;
    var chip8 = false;
    var chip9 = false;
    var chip10 = false;
    var haschip = false;
    var chipsleft = 4;
    //37,410,85,69
    var resetchips = function(){
        chip3 = false;
        chip4 = false;
        chip5 = false;
        chip6 = false;
        chip7 = false;
        chip8 = false;
        chip9 = false;
        chip10 = false;
        haschip = false;
    };
    
    var laststage = false;
    var once = false;
    
    
    $(document).on("click",function(event){
       if(numoftreesleft == 0){
           seccount = seccount+1
           if(seccount == 1){
           $("#whattodo").html("NOOO kev, those trees were my memories of the treecraft days...");
           }else if(seccount == 2){
                alert("--------------------------MACafee:--------------------------- don't listen to him. He's trying to guilt trip you");
               $("#whattodo").html("");
           }else if(seccount == 3){
               alert("--------------------------MACafee:--------------------------- Okay I'll take you to his secondary defences. Good work!");
           }else if(seccount == 4){
               alert("--------------------------MACafee:--------------------------- You have to help me hack his system. So I need you to double check my syntax and catch any errors. Once you look over it, I'll send it to his servers and cripple his attack");
           }
           else if(seccount > 4 && promptcompleated ==0){
               var htmlprompt = prompt("--------------------------MACafee:--------------------------- Fix the following html code : <div></duv>", "<div></duv>");
               if(htmlprompt == "<div></div>"){
                   promptcompleated = 1;
                   alert("--------------------------MACafee:---------------------------Nice job man. Here's the next one");
                   progressbar = progressbar-8;
                    $("#progressbar").html(progressbar + "%");
                    $("#progressbar").css("width", $("#progressbar").width()-80 + "px");
               }else{
                   alert("--------------------------MACafee:---------------------------Crap that didn't work try again");
               }
           }
       }
        
        if(promptcompleated ==1){
            var jsprompt = prompt('--------------------------MACafee:--------------------------- Fix the following js code : $("codecachelogin").on("click",function(){});', '$("codecachelogin").on("click",function(){});');
            if(jsprompt == '$("#codecachelogin").on("click",function(){});'){
                   promptcompleated = 2;
                   alert("--------------------------MACafee:---------------------------Totally not using you to help Curtis restart Codecache");
                        progressbar = progressbar-8;
                    $("#progressbar").html(progressbar + "%");
                    $("#progressbar").css("width", $("#progressbar").width()-80 + "px");
               }else{
                   alert("--------------------------MACafee:---------------------------hmmm I think that the login button is an id");
               }
            
            
        }else if(promptcompleated ==2){
            var phpprompt = prompt('--------------------------MACafee:--------------------------- Fix the following php code : if(diebro == true){die("Apple");}','if(diebro == true){die("Apple");}');
            if(phpprompt == 'if($diebro == true){die("Apple");}'){
                   promptcompleated = 3;
                   alert("--------------------------MACafee:---------------------------Nice we did it");
                        progressbar = progressbar-18;
                    $("#progressbar").html(progressbar + "%");
                    $("#progressbar").css("width", $("#progressbar").width()-180 + "px");
               }else{
                   alert("--------------------------MACafee:---------------------------It didn't work, Hurry up we don't have much time left");
               }
            
            
        }else if(promptcompleated == 3){
            promptcompleated =4;
            alert("--------------------------MACafee:---------------------------okay. We can take more risks now. Kev right now we're inside his system mainframe. Because I can't see (I'm a computer) I need you to help me match the circut boards");
        }else if(promptcompleated == 4){
            promptcompleated =5;
            alert("--------------------------MACafee:---------------------------Simply click on a chip and click to its matching partner");
        }else if(promptcompleated == 5){
            promptcompleated =6;
            alert("--------------------------MACafee:---------------------------Basically you haave to match squares into pairs. Here's an example one");
            $("#chip1").show();
            $("#chip2").show();
        }   
        
        
        
        
        if($(event.target).attr("id") == "chip1"){
            if(chip == true){
                chipgame = true;
                $(".circuitchip").show();
                $("#chip1").hide();
                $("#chip2").hide();
                alert("nice warm up. Now for the real deal");
            }else{
                $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
            chipone = true;
            }
        }else if($(event.target).attr("id") == "chip2"){
            if(chipone == true){
                chipgame = true;
                $(".circuitchip").show();
                $("#chip1").hide();
                $("#chip2").hide();
                alert("nice warm up. Now for the real deal");
            }else{
                $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
            chip = true;
            }
        }
        if(chipgame == true){
            if($(event.target).attr("id") == "chip3"){
                if(chip3 == true){
                    $("#chip7").hide();
                    $("#chip3").hide();
                    chipsleft = chipsleft -1;
                    haschip = false;
                    progressbar = progressbar-10;
                    $("#progressbar").html(progressbar + "%");
                    $("#progressbar").css("width", $("#progressbar").width()-100 + "px");
                }else{
                    if(haschip == true){
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        resetchips();
                    }else{
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        haschip = true;
                        chip7 = true;
                    }
                    
                }
            }else if($(event.target).attr("id") == "chip7"){
                if(chip7 == true){
                    $("#chip7").hide();
                    $("#chip3").hide();
                    chipsleft = chipsleft -1;
                    haschip = false;
                    progressbar = progressbar-10;
                    $("#progressbar").html(progressbar + "%");
                    $("#progressbar").css("width", $("#progressbar").width()-100 + "px");
                }else{
                    if(haschip == true){
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        resetchips();
                    }else{
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        haschip = true;
                        chip3 = true;
                    }
                    
                }
            }else if($(event.target).attr("id") == "chip4"){
                if(chip4 == true){
                    $("#chip4").hide();
                    $("#chip10").hide();
                    chipsleft = chipsleft -1;
                    haschip = false;
                    progressbar = progressbar-10;
                    $("#progressbar").html(progressbar + "%");
                    $("#progressbar").css("width", $("#progressbar").width()-100 + "px");
                }else{
                    if(haschip == true){
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        resetchips();
                    }else{
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        haschip = true;
                        chip10 = true;
                    }
                    
                }
            }else if($(event.target).attr("id") == "chip10"){
                if(chip10 == true){
                    $("#chip4").hide();
                    $("#chip10").hide();
                    chipsleft = chipsleft -1;
                    haschip = false;
                    progressbar = progressbar-10;
                    $("#progressbar").html(progressbar + "%");
                    $("#progressbar").css("width", $("#progressbar").width()-100 + "px");
                }else{
                    if(haschip == true){
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        resetchips();
                    }else{
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        haschip = true;
                        chip4 = true;
                    }
                    
                }
            }else if($(event.target).attr("id") == "chip8"){
                if(chip8 == true){
                    $("#chip8").hide();
                    $("#chip5").hide();
                    chipsleft = chipsleft -1;
                    haschip = false;
                    progressbar = progressbar-10;
                    $("#progressbar").html(progressbar + "%");
                    $("#progressbar").css("width", $("#progressbar").width()-100 + "px");
                }else{
                    if(haschip == true){
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        resetchips();
                    }else{
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        haschip = true;
                        chip5 = true;
                    }
                    
                }
            }else if($(event.target).attr("id") == "chip5"){
                if(chip5 == true){
                    $("#chip8").hide();
                    $("#chip5").hide();
                    chipsleft = chipsleft -1;
                    haschip = false;
                    progressbar = progressbar-10;
                    $("#progressbar").html(progressbar + "%");
                    $("#progressbar").css("width", $("#progressbar").width()-100 + "px");
                }else{
                    if(haschip == true){
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        resetchips();
                    }else{
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        haschip = true;
                        chip8 = true;
                    }
                    
                }
            }else if($(event.target).attr("id") == "chip6"){
                if(chip6 == true){
                    $("#chip6").hide();
                    $("#chip9").hide();
                    chipsleft = chipsleft -1;
                    haschip = false;
                    progressbar = progressbar-10;
                    $("#progressbar").html(progressbar + "%");
                    $("#progressbar").css("width", $("#progressbar").width()-100 + "px");
                }else{
                    if(haschip == true){
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        resetchips();
                    }else{
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        haschip = true;
                        chip9 = true;
                    }
                    
                }
            }else if($(event.target).attr("id") == "chip9"){
                if(chip9 == true){
                    $("#chip6").hide();
                    $("#chip9").hide();
                    chipsleft = chipsleft -1;
                    haschip = false;
                    progressbar = progressbar-10;
                    $("#progressbar").html(progressbar + "%");
                    $("#progressbar").css("width", $("#progressbar").width()-100 + "px");
                }else{
                    if(haschip == true){
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        resetchips();
                    }else{
                        $("#body").fadeOut("fast",function(){
                    $("#body").show();
                });
                        haschip = true;
                        chip6 = true;
                    }
                    
                }
            }
            
            
            
        }
        if(chipsleft == 0){
         alert("We did it! now. I don't know about you but I'm feeling for some revenge. Lets go");
            laststage = true;
        }
        if(laststage == true){
            if(once == false){
         alert("okay place your cursor on the greensquare. Your goal is to kill Curtis by reaching the yellow circle. O yeah one more thing. You can't touch the black spots. hint: think outisde the box");
            $("#greensquare").show();
            $("#whitestrip").show();
            $("#yellowcircle").show();
                once = true;
            }
        }
        
        
    });
    
    var mousetouching = false;
    
    $("#body").on("mouseenter", function () {
        mousetouching = true;
        //stuff to do on mouse enter
    });
 //pass the element as an argument to .on
    $("#yellowcircle").hover(function(){
       if(mousetouching == false){
           $("#body").fadeOut(function(){
               $("#greensquare").hide();
            $("#whitestrip").hide();
            $("#yellowcircle").hide();
               $("#happybirthday").fadeIn();
           });
       }
    });
    $("#greensquare").on("mouseenter", function () {
        mousetouching = false;
        //stuff to do on mouse enter
    });
    
    
    
    
    
    
});