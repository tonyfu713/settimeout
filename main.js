const btn = document.querySelector("#btn");
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2")
const box3 = document.querySelector("#box3")


btn.addEventListener("click" ,function() {
if(box1.getAttribute("class")==="box1"){
    box1.setAttribute("class","box1 box-down");
    box2.setAttribute("class","box2 box-down");
    box3.setAttribute("class","box3 box-down");

}

});