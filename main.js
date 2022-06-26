const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-menu");
window.onscroll = function () { scrollFunction() };


// ==============================HAMBURGER-ICON=================================
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
// ===========================HAMBURGER-ICON-END================================

// ============================NAV-BAR-ONSCROLL=================================
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.zIndex = "4";
        document.getElementById("navbar").style.top = "0px";
        document.getElementById("navbar").style.height = "60px";
        document.getElementById("navbar").style.display = "flex";
        document.getElementById("navbar").style.justifyContent = "space-between";


        document.getElementById("login-container").style.display = "flex";
        document.getElementById("login-container").style.alignItems = "center";
        document.getElementById("login-container").style.justifyContent = "center";
        document.getElementById("login-container").style.height = "60px";
        document.getElementById("login-btn").style.width = "80px";
        document.getElementById("login-btn").style.height = "35px";

        document.getElementById("nav-menu").style.height = "60px";

        document.getElementById("logo").style.fontSize = "28px";
        document.getElementById("logo").style.lineHeight = "60px";

        ["link1", "link2", "link3", "link4", "link5"].forEach(function (id) {
            document.getElementById(id).style.lineHeight = "60px";
            document.getElementById(id).style.fontSize = "14px";
        });

        ["bar-resize1", "bar-resize2", "bar-resize3"].forEach(function (id) {
            document.getElementById(id).style.width = "22px";
            document.getElementById(id).style.margin = "2px";
        });

        document.getElementById("aboutme-display-page").style.top = "80px";

        widthSize();


    } else {

        document.getElementById("navbar").style.height = "80px";
        document.getElementById("navbar").style.top = "25px";
        document.getElementById("navbar").style.display = "flex";
        document.getElementById("navbar").style.alignItems = "center";
        document.getElementById("navbar").style.justifyContent = "space-between";

        document.getElementById("login-container").style.display = "flex";
        document.getElementById("login-container").style.width = "280px";
        document.getElementById("login-btn").style.width = "85px";
        document.getElementById("login-btn").style.height = "38px";

        document.getElementById("nav-menu").style.height = "80px";
        document.getElementById("nav-menu").style.justifyContent = "center";
        document.getElementById("nav-menu").style.alignItems = "center";
        document.getElementById("nav-menu").style.flexDirection = "coloumn";

        document.getElementById("logo").style.display = "block";
        document.getElementById("logo").style.fontSize = "32px";
        document.getElementById("logo").style.lineHeight = "80px";

        ["link1", "link2", "link3", "link4", "link5"].forEach(function (id) {
            document.getElementById(id).style.display = "block";
            document.getElementById(id).style.lineHeight = "80px";
            document.getElementById(id).style.fontSize = "16px";
        });

        ["bar-resize1", "bar-resize2", "bar-resize3"].forEach(function (id) {
            document.getElementById(id).style.width = "25px";
            document.getElementById(id).style.margin = "3px";
        });

        document.getElementById("aboutme-display-page").style.top = "80px";

    }
}
// ============================NAV-BAR-ONSCROLL-END=============================
