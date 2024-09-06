function onClickMenu(){
    document.getElementById("burger").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
}


document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});


//signup
document.querySelector("#show-signup").addEventListener("click",function(){
    document.querySelector(".signup").classList.add("active");
});

document.querySelector(".signup .close-btn").addEventListener("click",function(){
    document.querySelector(".signup").classList.remove("active");
});