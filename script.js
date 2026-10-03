/* ===============================
        AOS Animation
================================ */

AOS.init({

    duration:1000,
    once:true

});

/* ===============================
        Typing Animation
================================ */


var typed = new Typed("#typing", {

    strings:[

        "Python Developer",
        "Django Developer",
        "Full Stack Developer",
        "Backend Developer"

    ],

    typeSpeed:80,
    backSpeed:50,
    loop:true

});

/* ===============================
        Dark / Light Mode
================================ */


const themeBtn = document.getElementById("theme-toggle");


themeBtn.addEventListener("click",()=>{


    document.body.classList.toggle("light-mode");


    let icon = themeBtn.querySelector("i");


    if(document.body.classList.contains("light-mode")){


        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");


    }

    else{


        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");


    }


});

/* ===============================
        Scroll Top Button
================================ */


const scrollBtn = document.getElementById("scrollTop");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){

        scrollBtn.style.display="block";

    }

    else{

        scrollBtn.style.display="none";

    }


});

scrollBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,
        behavior:"smooth"

    });


});


/* ===============================
        Navbar Active Link
================================ */


let sections = document.querySelectorAll("section");

let navLinks = document.querySelectorAll(".nav-link");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        let sectionTop = section.offsetTop - 150;


        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }
    });
    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href") == "#"+current){
            link.classList.add("active");
        }
    });
});

/* ===============================
        Mobile Menu Close
================================ */


let navItems = document.querySelectorAll(".nav-link");
let navbarCollapse = document.querySelector(".navbar-collapse");
navItems.forEach(item=>{
    item.addEventListener("click",()=>{
        if(navbarCollapse.classList.contains("show")){
            document
            .querySelector(".navbar-toggler")
            .click();
        }
    });
});



/* ===============================
        Current Year Footer
================================ */

let year = new Date().getFullYear();
let copyright = document.querySelector(".copyright");
if(copyright){
    copyright.innerHTML =
    `© ${year} Sahil Yadav. All Rights Reserved.`;
}
