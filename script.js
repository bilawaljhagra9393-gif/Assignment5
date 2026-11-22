let btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    alert("Button Clicked Successfully")
})
console.log(btn);

let chnge = document.getElementById("chnge");
chnge.addEventListener("click", function(){
    para.textContent = "Text Update Successfully";
})

const bg = document.getElementById("bg");
bg.addEventListener("click",function(){

    for (let i = 0; i < bg.length; i++);

    bg.style.backGround = "Cadetblue"; 
})

