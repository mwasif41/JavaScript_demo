var p1= prompt("Enter your name");
var win = 0;
var lose = 0;
//////////////// prompt modified ///////////////////////



//////////////// Alert modifier object///////////////////////

function CustomAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "Notification !";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
    }
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert = new CustomAlert();


///////////////////////////////////////////////////////
//insertWinScore();

function insertWinScore(){
document.getElementById('wins').innerHTML = "Win = "+win;
};
function insertLoseScore(){
document.getElementById('loses').innerHTML = "Lose = "+lose;
};
function objectSelect(x){
   // p1Obj = x;
    //alert(p1Obj);
         removeArea(); 
 
    setObject(x);
    setSpan();
    var modal= document.getElementById("selectModal");
    modal.style.display = "none";
    var random = Math.random();
    random = (random * 3) + 1 ;
    var p2Obj = Math.floor(random);
    setObject(p2Obj);
   //setTimeout(setObject(p2Obj),3000);
    setTimeout(function(){
          if(x === p2Obj){
        Alert.render("TIE restart the match");
         removeArea(); 
     }
     if(x===1 && p2Obj===2){
         Alert.render("computer wins");
         lose++;
         insertLoseScore();
     }
     if(x===2 && p2Obj===1){
         Alert.render("you wins");
         win++;
         insertWinScore();
     }
     if(x===2 && p2Obj===3){
         Alert.render("computer wins");
         lose++;
         insertLoseScore();
     }
     if(x===3 && p2Obj===2){
         Alert.render("you wins");
         win++;
         insertWinScore();
     }
     if(x===1 && p2Obj===3){
         win++;
         Alert.render("you wins");
         insertWinScore();
   }
     if(x===3 && p2Obj===1){
         Alert.render("computer wins");
         lose++;
         insertLoseScore();
     }
    }, 1000);
   // decide(x,p2Obj);
}
//alert(p2Obj);

function setObject(x){
    var div = document.getElementById("area");
    var img = document.createElement("img");
    img.setAttribute("width","40%");
    img.setAttribute("height","40%");

    if(x === 1){
        img.setAttribute("src","images/rock.png");
    }
    if(x === 2){
        img.setAttribute("src","images/paper.png");
    }
    if(x === 3){
        img.setAttribute("src","images/scissor.png");
    }
    div.appendChild(img);
}

function setSpan(){
    var span = document.createElement("SPAN");
    var text = document.createTextNode("VS");
    span.appendChild(text);
    span.setAttribute("class","vs");
    var div = document.getElementById("area");
    div.appendChild(span);    
}

function decide(x,y){
    if(x === y){
        alert("TIE restart the match");
     }
     if(x===1 && y===2){
         alert("computer wins");
     }
     if(x===2 && y===1){
         alert("you wins");
     }
     if(x===2 && y===3){
         alert("computer wins");
     }
     if(x===3 && y===2){
         alert("you wins");
     }
     if(x===1 && y===3){
         alert("you wins");
     }
     if(x===3 && y===2){
         alert("computer wins");
     }


}

function removeArea(){
    var node = document.getElementById("area");
    while(node.hasChildNodes()){
        node.removeChild(node.lastChild);
    }
}

////////////// modal /////////////////////
// Get the modal

/*
function objSel(){
    var modal = document.getElementById("selectModal");
    modal.style.display = "block";
}
function closeModal(){
    var modal = document.getElementById("selectModal");
    modal.style.display = "none";
    }

    
window.onclick = function(event) {
    var modal = document.getElementById("selectModal");
    
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

*/