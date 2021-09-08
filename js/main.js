$(document).ready(function(){
    $(".toggle").click(function(){
        $(".toggle").toggleClass("active")
        $("nav ul").toggleClass("active-menu")
    })
})

/* progress-bar */

let progressbar = document.querySelector(".progress-bar");
function ScrollProgressBar(){
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    let windowHeight = scrollHeight - clientHeight;
    let porcentaje = scrollTop / windowHeight * 100;

    progressbar.style.width = porcentaje + "%"
}

window.addEventListener("scroll", ScrollProgressBar);

