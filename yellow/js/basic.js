document.addEventListener("DOMContentLoaded", function(){


// Marking nav bar items with a cursor
var navLis = document.querySelectorAll(".nav-bar-li")

navLis.forEach(function(navLi){
    navLi.addEventListener("mouseover", function(){
        this.style.backgroundColor = "#fff";
        this.querySelector(".nav-bar-item").style.color = "#000"
        }) 
    
    navLi.addEventListener("mouseout", function(){
        this.style.backgroundColor = "transparent";
        this.querySelector(".nav-bar-item").style.color = "#fff"; 
    })
});    




});



