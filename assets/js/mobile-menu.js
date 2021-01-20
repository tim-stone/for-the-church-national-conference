//This function toggles the mobile menu

function mobileToggle() {
    var menu = document.getElementById("mobile-container");
    var item1 = document.getElementById("mobile-links-1");
    var item2 = document.getElementById("mobile-links-2");
    var item3 = document.getElementById("mobile-links-3");
    var item4 = document.getElementById("mobile-links-4");

        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    item1.addEventListener("click", function(){
        menu.style.display = "none";
    });
    item2.addEventListener("click", function(){
        menu.style.display = "none";
    });
    item3.addEventListener("click", function(){
        menu.style.display = "none";
    });
    item4.addEventListener("click", function(){
        menu.style.display = "none";
    });
    }
