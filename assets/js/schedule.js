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

}
