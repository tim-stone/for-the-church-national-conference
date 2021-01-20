// This function toggles the active schedule in the schedule section

window.onload=function(){
    var g=document.getElementsByClassName("schedule-container-1");
    var h=document.getElementsByClassName("schedule-container-2");
    var i=document.getElementsByClassName("schedule-container-3");
    var j=document.getElementsByClassName("schedule-1");
    var k=document.getElementsByClassName("schedule-2");
    var l=document.getElementsByClassName("schedule-3");

    g[0].style.display = 'block';
    j[0].classList.add("active-schedule");

//toggles day 1 of the schedule
    document.getElementById("day-1").addEventListener("click", function(){

        g[0].style.display = 'block';
        h[0].style.display = 'none';
        i[0].style.display = 'none';

        j[0].classList.add("active-schedule");
        k[0].classList.remove("active-schedule");
        l[0].classList.remove("active-schedule");

    });


//Toggles day 2 of the schedule
    document.getElementById("day-2").addEventListener("click", function(){

        g[0].style.display = 'none';
        h[0].style.display = 'block';
        i[0].style.display = 'none';

        j[0].classList.remove("active-schedule");
        k[0].classList.add("active-schedule");
        l[0].classList.remove("active-schedule");

    });


//Toggles day 3 of the schedule
    document.getElementById("day-3").addEventListener("click", function(){

        g[0].style.display = 'none';
        h[0].style.display = 'none';
        i[0].style.display = 'block';

        j[0].classList.remove("active-schedule");
        k[0].classList.remove("active-schedule");
        l[0].classList.add("active-schedule");

    });


// This function toggles the overlay for speakers descriptions

//Toggles Greear's Description
    document.getElementById("overlay-greear").addEventListener("click", function(){
        var a =document.getElementsByClassName("speakers-description-greear");

        a[0].style.display = 'block';

    });

    document.getElementById("close-1").addEventListener("click", function(){
        var a =document.getElementsByClassName("speakers-description-greear");

        a[0].style.display='none';

    });

//Toggles Loritts' Description
    document.getElementById("overlay-loritts").addEventListener("click", function(){
        var b =document.getElementsByClassName("speakers-description-loritts");

        b[0].style.display = 'block';

    });

    document.getElementById("close-2").addEventListener("click", function(){
        var b =document.getElementsByClassName("speakers-description-loritts");

        b[0].style.display='none';

    });

//Toggles Merida's Description
    document.getElementById("overlay-merida").addEventListener("click", function(){
        var c =document.getElementsByClassName("speakers-description-merida");

        c[0].style.display ='block';

    });

    document.getElementById("close-3").addEventListener("click", function(){
        var c =document.getElementsByClassName("speakers-description-merida");

        c[0].style.display='none';

    });

//Toggles Allen's Description
    document.getElementById("overlay-allen").addEventListener("click", function(){
        var d =document.getElementsByClassName("speakers-description-allen");

        d[0].style.display = 'block';

    });

    document.getElementById("close-4").addEventListener("click", function(){
        var d =document.getElementsByClassName("speakers-description-allen");

        d[0].style.display='none';

    });

//Toggles Strachan's Description
    document.getElementById("overlay-strachan").addEventListener("click", function(){
        var e =document.getElementsByClassName("speakers-description-strachan");

        e[0].style.display = 'block';

    });

    document.getElementById("close-5").addEventListener("click", function(){
        var e =document.getElementsByClassName("speakers-description-strachan");

        e[0].style.display='none';

    });

//Toggles Wilson's Description
    document.getElementById("overlay-wilson").addEventListener("click", function(){
        var f =document.getElementsByClassName("speakers-description-wilson");

        f[0].style.display = 'block';

    });

    document.getElementById("close-6").addEventListener("click", function(){
        var f =document.getElementsByClassName("speakers-description-wilson");

        f[0].style.display='none';

    });

}
