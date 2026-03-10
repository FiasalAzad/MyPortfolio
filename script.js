// Typing animation for main heading

const text = "Personal Portfolio";
let index = 0;

function typeEffect(){
    const heading = document.querySelector("h1");

    if(index < text.length){
        heading.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect,100);
    }
}

document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("h1").textContent="";
    typeEffect();
});


// Fade-in animation for sections

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function(){

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition){
            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";
        }

    });

});


// Hover animation

sections.forEach(section => {

    section.addEventListener("mouseenter",function(){
        this.style.transform = "scale(1.03)";
        this.style.transition = "0.3s";
    });

    section.addEventListener("mouseleave",function(){
        this.style.transform = "scale(1)";
    });

});
