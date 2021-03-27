let btn = document.getElementById("btn");
let modal = document.getElementById("modal");

btn.addEventListener('click', function(){
    modal.style.display = "block";
})

let backbtn = document.getElementById("back-btn");

backbtn.addEventListener("click", function(){
    modal.style.display ="none";
})

