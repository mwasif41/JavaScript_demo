var x = 0;

function message(){
  var x = document.getElementById("snackbar");
  x.className = "show";
  // 3000 = 3 sec
  // after 3 sec show would be replaced with null
  setTimeout(function() { x.className = x.className.replace("show","") },3000);
}

function generateTask(){
var task = document.getElementById("task").value;

if(task === ""){
    //alert("empty task please write a task first")
    message();
}
else{
var li = document.createElement("li");
var t = document.createTextNode(task);
li.appendChild(t);
document.getElementById("list").appendChild(li);
}
document.getElementById("task").value = "";

//need to insert cancel button in the developed task
var image = document.createElement("IMG");
image.setAttribute("src","images/del.png");
image.setAttribute("onClick","remove(id)");
image.setAttribute("class","delete");
image.setAttribute("id","e"+x);
x++;
li.appendChild(image);


}
function remove(y) {
var ul = document.getElementById("list");
var nodetoremove = document.getElementById(y);
//nodetoremove.style.display = "none";
ul.removeChild(nodetoremove.parentElement);
 // alert("remover");
}
