let signupform=document.getElementById("signup-form");
let reg=document.getElementById("reg");
let navheader=document.querySelectorAll( "naval1 li");
let mainsection=document.getElementById("mainsection")

// function signup(){
//     if(signupform.classList.contains("test")){
//         signupform.classList.remove("test");
//     }
//     else {
// signupform.classList.add("test");
//     }
// }

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 15) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


function signup(){
    signupform.classList.toggle("test");
    mainsection.classList.toggle("test");
    if(signupform.classList.contains("test")){
        reg.textContent="Sign In";
        document.body.style.backgroundColor=""
        }
    
    else {
reg.textContent="Home";
document.body.style.backgroundColor="#ff9800"
    }
}

